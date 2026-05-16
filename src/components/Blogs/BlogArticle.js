import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiClock, FiExternalLink } from "react-icons/fi";
import Particle from "../Particle";
import InsightLoader from "../InsightLoader";
import FetchErrorCard from "../FetchErrorCard";
import extractThumbnail from "./Thumbnail";
import {
  enrichBlog,
  estimateReadingTime,
  fetchBlogsFromFeed,
  sanitizeArticleHtml
} from "./blogUtils";

const MIN_LOADER_VISIBLE_MS = 2200;
const SUCCESS_PHASE_MS = 550;

function BlogArticle({ feedUrl }) {
  const { articleId } = useParams();
  const [phase, setPhase] = useState("loading");
  const [hasError, setHasError] = useState(false);
  const [article, setArticle] = useState(null);
  const loadStartedAtRef = useRef(0);
  const successTimerRef = useRef(null);
  const readyTimerRef = useRef(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setHasError(false);
        setPhase("loading");
        loadStartedAtRef.current = Date.now();

        const items = await fetchBlogsFromFeed(feedUrl);
        const matchedArticle = items
          .map((item) => ({
            ...enrichBlog(item),
            thumbnail: extractThumbnail(item.description || ""),
            readingTimeMinutes: estimateReadingTime(item.content || item.description || "")
          }))
          .find((item) => item.articleId === articleId);

        if (!matchedArticle) {
          throw new Error("Article not found");
        }

        setArticle(matchedArticle);

        if (successTimerRef.current) {
          window.clearTimeout(successTimerRef.current);
        }
        if (readyTimerRef.current) {
          window.clearTimeout(readyTimerRef.current);
        }

        const elapsedMs = Date.now() - loadStartedAtRef.current;
        const remainingLoaderMs = Math.max(0, MIN_LOADER_VISIBLE_MS - elapsedMs);

        successTimerRef.current = window.setTimeout(() => {
          setPhase("success");
          readyTimerRef.current = window.setTimeout(() => setPhase("ready"), SUCCESS_PHASE_MS);
        }, remainingLoaderMs);
      } catch (error) {
        console.error("Error loading the article:", error);
        setHasError(true);
        setPhase("error");
      }
    };

    loadArticle();

    return () => {
      if (successTimerRef.current) {
        window.clearTimeout(successTimerRef.current);
      }
      if (readyTimerRef.current) {
        window.clearTimeout(readyTimerRef.current);
      }
    };
  }, [articleId, feedUrl]);

  const sanitizedHtml = useMemo(
    () => sanitizeArticleHtml(article?.content || "", article?.thumbnail || ""),
    [article?.content, article?.thumbnail]
  );

  useEffect(() => {
    const mediaImages = [...document.querySelectorAll(".blog-article-media-image")];
    const cleanups = mediaImages.map((image) => {
      const parentFigure = image.closest(".blog-article-media-figure");
      if (!parentFigure) {
        return null;
      }

      const handleError = () => {
        parentFigure.classList.add("blog-article-media-figure--fallback");
      };

      const handleLoad = () => {
        parentFigure.classList.remove("blog-article-media-figure--fallback");
      };

      image.addEventListener("error", handleError);
      image.addEventListener("load", handleLoad);

      if (image.complete && image.naturalWidth === 0) {
        handleError();
      }

      return () => {
        image.removeEventListener("error", handleError);
        image.removeEventListener("load", handleLoad);
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup?.());
    };
  }, [sanitizedHtml]);

  if (hasError) {
    return (
      <Container fluid className="blog-section">
        <Particle />
        <Container>
          <FetchErrorCard
            title="Could not load this article."
            message="The feed item was unavailable or could not be resolved. You can still open the original story on Medium."
            href="https://plusx0x07.medium.com/"
            hrefLabel="Open Medium profile"
          />
        </Container>
      </Container>
    );
  }

  if (phase !== "ready" || !article) {
    return <InsightLoader phase={phase === "success" ? "success" : "loading"} label="Opening article" />;
  }

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container className="blog-article-shell">
        <Link className="blog-back-link" to="/blogs">
          <FiArrowLeft />
          <span>Back to writing</span>
        </Link>

        <section className="blog-article-hero">
          <div className="blog-article-copy">
            <div className="blog-article-meta-row">
              <span className="section-kicker">Writing</span>
              <span className="blog-article-readtime">
                <FiClock />
                <span>{article.readingTimeMinutes} min read</span>
              </span>
            </div>

            <h1 className="section-heading blog-article-title">{article.title}</h1>
            <p className="blog-date blog-article-date">{new Date(article.pubDate).toDateString()}</p>

            {article.categories?.length ? (
              <div className="blog-article-tags">
                {article.categories.map((category) => (
                  <span key={category} className="blog-article-tag">
                    {category}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="blog-article-actions">
              <a className="insight-link" href={article.link.split("?")[0]} target="_blank" rel="noreferrer">
                <span>Open original on Medium</span>
                <FiExternalLink />
              </a>
            </div>
          </div>

          {article.thumbnail ? (
            <div className="blog-article-thumbnail-shell">
              <img className="blog-article-thumbnail" src={article.thumbnail} alt={article.title} />
            </div>
          ) : null}
        </section>

        <section className="blog-article-body-card">
          <article className="blog-article-body" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
        </section>
      </Container>
    </Container>
  );
}

export default BlogArticle;
