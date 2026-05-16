import React from 'react';
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import CategoryPill from './BlogCategoryPill';

const BlogCard = ({ blog }) => {
    return (
        <div className="blog-card">
            <Link
                className="blog-link"
                to={`/blogs/${blog.articleId}`}
            >
                <img className="blog-thumbnail" src={blog.thumbnail} alt="thumbnail" />
                <div className="blog-card-meta">
                    <span className="blog-card-kicker">Article</span>
                    <span className="blog-card-readtime">{blog.readingTimeMinutes} min read</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-date">{new Date(blog.pubDate).toDateString()}</p>
                <CategoryPill categories={blog.categories} />
                <div className="blog-card-footer">
                    <span>Read on site</span>
                    <FiArrowUpRight />
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;
