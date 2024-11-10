import React from 'react';
import CategoryPill from './BlogCategoryPill';

const BlogCard = ({ blog }) => {
    console.log(blog,'blog');
    return (
        <div className="blog-card" style={{ 
                border: '2px solid rgb(200 0 255)',
                padding: '20px', 
                margin: '15px', 
                width: "300px",
                borderRadius: '20px',
            }}>
            <br />
            <img id="thumbnail" src={blog.thumbnail} alt="thumbnail" style={{ width: '100%' }} />
            <h3 id="title">{blog.title}</h3>
            <p id="created-at">{new Date(blog.pubDate).toDateString()}</p>
            <CategoryPill categories={blog.categories} />
            <a id="blog-link" href={blog.link} target="_blank" rel="noopener noreferrer">
                Read more
            </a>
        </div>
    );
};

export default BlogCard;
