import axios from "axios";

export async function fetchBlogsFromFeed(feedUrl) {
  const response = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`);
  return response?.data?.items || [];
}

export function slugifyText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function createBlogId(blog) {
  const titleSlug = slugifyText(blog?.title || "article");
  const guidSuffix = String(blog?.guid || blog?.link || "entry")
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(-10)
    .toLowerCase();

  return `${titleSlug}-${guidSuffix}`;
}

export function enrichBlog(blog) {
  return {
    ...blog,
    articleId: createBlogId(blog)
  };
}

export function estimateReadingTime(html) {
  const plainText = stripHtml(html);
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 220));
}

export function stripHtml(html) {
  return String(html || "")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function sanitizeArticleHtml(html, featuredImageUrl = "") {
  if (typeof window === "undefined") {
    return html;
  }

  const parser = new window.DOMParser();
  const doc = parser.parseFromString(String(html || ""), "text/html");
  const blockedTags = [
    "script",
    "style",
    "object",
    "embed",
    "form",
    "input",
    "button",
    "textarea",
    "select",
    "svg"
  ];

  blockedTags.forEach((tag) => {
    doc.querySelectorAll(tag).forEach((node) => node.remove());
  });

  doc.querySelectorAll("*").forEach((element) => {
    [...element.attributes].forEach((attribute) => {
      const name = attribute.name.toLowerCase();
      const value = attribute.value || "";

      if (name.startsWith("on")) {
        element.removeAttribute(attribute.name);
        return;
      }

      if ((name === "href" || name === "src") && /^\s*javascript:/i.test(value)) {
        element.removeAttribute(attribute.name);
      }
    });

    if (element.tagName === "A") {
      element.setAttribute("target", "_blank");
      element.setAttribute("rel", "noopener noreferrer");
    }

    if (element.tagName === "IFRAME") {
      const source = element.getAttribute("src") || "";
      const isTrustedGiphyEmbed =
        /^https:\/\/giphy\.com\/embed\//i.test(source) ||
        /^https:\/\/giphy\.com\/gifs\/embed\//i.test(source) ||
        /^https:\/\/media\d*\.giphy\.com\/media\//i.test(source);

      if (!isTrustedGiphyEmbed) {
        element.remove();
        return;
      }

      element.setAttribute("class", "blog-article-embed");
      element.setAttribute("loading", "lazy");
      element.setAttribute("allowfullscreen", "true");
      element.removeAttribute("sandbox");
      return;
    }

    if (element.tagName === "IMG") {
      const source = element.getAttribute("src") || "";

      if (source.includes("medium.com/_/stat")) {
        element.remove();
        return;
      }

      element.setAttribute("loading", "lazy");
      element.setAttribute("decoding", "async");
      if (!element.getAttribute("alt")) {
        element.setAttribute("alt", "Article visual");
      }
    }

    if (element.tagName === "A") {
      const href = element.getAttribute("href") || "";
      const text = (element.textContent || "").trim();

      if (/medium\.com\/media\/.+\/href/i.test(href) || /medium\.com\/media\/.+\/href/i.test(text)) {
        const mediaFigure = doc.createElement("figure");
        mediaFigure.setAttribute("class", "blog-article-media-figure");

        const mediaImage = doc.createElement("img");
        mediaImage.setAttribute("src", href || text);
        mediaImage.setAttribute("alt", "Embedded article media");
        mediaImage.setAttribute("loading", "lazy");
        mediaImage.setAttribute("decoding", "async");
        mediaImage.setAttribute("class", "blog-article-media-image");

        const mediaLink = doc.createElement("a");
        mediaLink.setAttribute("href", href || text);
        mediaLink.setAttribute("target", "_blank");
        mediaLink.setAttribute("rel", "noopener noreferrer");
        mediaLink.setAttribute("class", "blog-article-media-link");

        mediaFigure.appendChild(mediaImage);
        mediaFigure.appendChild(mediaLink);
        element.replaceWith(mediaFigure);
      }
    }
  });

  const firstImage = doc.body.querySelector("img");
  if (firstImage && featuredImageUrl) {
    const imageSource = firstImage.getAttribute("src") || "";
    if (imageSource === featuredImageUrl) {
      firstImage.remove();
    }
  }

  doc.body.querySelectorAll("p").forEach((paragraph) => {
    if (!paragraph.textContent?.trim() && !paragraph.querySelector("img")) {
      paragraph.remove();
    }
  });

  doc.body.querySelectorAll("iframe.blog-article-embed").forEach((iframe) => {
    const wrapper = doc.createElement("div");
    wrapper.setAttribute("class", "blog-article-embed-shell");
    iframe.parentNode?.insertBefore(wrapper, iframe);
    wrapper.appendChild(iframe);
  });

  return doc.body.innerHTML;
}
