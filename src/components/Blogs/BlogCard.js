import React from 'react';
import CategoryPill from './BlogCategoryPill';

const BlogCard = ({ blog }) => {
    return (
        <div className="blog-card" style={{ 
                border: '2px solid rgb(200 0 255)',
                padding: '20px', 
                margin: '15px', 
                width: "300px",
                borderRadius: '20px',
            }}>
            <a id="blog-link" href={blog.link.split("?")[0]} target="_blank" rel="noopener noreferrer" style={{
                position: 'relative',
                textDecoration: 'none',
            }}>
            <img id="thumbnail" src={blog.thumbnail} alt="thumbnail" style={{ 
                width: '100%',
                border: '2px solid #689780',
                borderRadius: '20px',
                marginBottom: '10px',
            }} />
            <h3 id="title" style={{color: "white"}}>{blog.title}</h3>
            <p id="created-at" style={{color: "white", fontWeight: "10px"}}>{new Date(blog.pubDate).toDateString()}</p>
            <CategoryPill categories={blog.categories} />
            </a>
        </div>
    );
};

export default BlogCard;
