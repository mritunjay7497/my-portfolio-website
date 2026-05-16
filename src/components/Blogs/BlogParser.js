import { useEffect, useRef, useState } from 'react';
import BlogCard from './BlogCard';
import extractThumbnail from "./Thumbnail"
import InsightLoader from "../InsightLoader";
import FetchErrorCard from "../FetchErrorCard";
import { enrichBlog, estimateReadingTime, fetchBlogsFromFeed } from "./blogUtils";

const MIN_LOADER_VISIBLE_MS = 3000;
const SUCCESS_PHASE_MS = 750;

const BlogParser = ({ feedUrl }) => {

    const [blogs, setBlogs] = useState([]);
    const [phase, setPhase] = useState("loading"); // loading | success | ready | error
    const [hasError, setHasError] = useState(false);
    const loadStartedAtRef = useRef(0);
    const successTimerRef = useRef(null);
    const readyTimerRef = useRef(null);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                setHasError(false);
                setPhase("loading");
                loadStartedAtRef.current = Date.now();
                const items = await fetchBlogsFromFeed(feedUrl);

                const enrichedBlogs = items.map((item) => ({
                    ...enrichBlog(item),
                    thumbnail: extractThumbnail(item.description || ""),
                    readingTimeMinutes: estimateReadingTime(item.content || item.description || "")
                }));

                setBlogs(enrichedBlogs);

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
                console.error('Error fetching the RSS feed:', error);
                setHasError(true);
                setPhase("error");
            }
        };

        fetchFeed();

        return () => {
            if (successTimerRef.current) {
                window.clearTimeout(successTimerRef.current);
            }
            if (readyTimerRef.current) {
                window.clearTimeout(readyTimerRef.current);
            }
        };
    }, [feedUrl]);

    if (hasError) {
        return (
            <FetchErrorCard
                title="Could not reach the writing feed."
                message="The feed endpoint is unavailable right now. You can still read everything directly on Medium."
                href="https://plusx0x07.medium.com/"
                hrefLabel="Open Medium profile"
            />
        );
    }

    if (phase !== "ready") {
        return <InsightLoader phase={phase === "success" ? "success" : "loading"} label="Fetching writing" />;
    }

    return (
        <div className="blogs-grid">
            {blogs.map((blog) => (
                <BlogCard key={blog.guid} blog={blog} />
            ))}
        </div>
    );
};

export default BlogParser;
