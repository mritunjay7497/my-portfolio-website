import React from 'react';
import CategoryPill from './BlogCategoryPill';

const BlogCard = ({ blog }) => {
    return (
        <div className="blog-card">
            <a
                className="blog-link"
                href={blog.link.split("?")[0]}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="blog-thumbnail" src={blog.thumbnail} alt="thumbnail" />
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-date">{new Date(blog.pubDate).toDateString()}</p>
                <CategoryPill categories={blog.categories} />
            </a>
        </div>
    );
};

export default BlogCard;
