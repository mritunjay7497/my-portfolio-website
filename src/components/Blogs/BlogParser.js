import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';  
import axios from 'axios';
import extractThumbnail from "./Thumbnail"


const BlogParser = ({ feedUrl }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                const response = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`);
                response.data.items.forEach((item) => {
                    item.thumbnail = extractThumbnail(item.description);
                });
                setBlogs(response.data.items);
            } catch (error) {
                console.error('Error fetching the RSS feed:', error);
            }
        };

        fetchFeed();
    }, [feedUrl]);

    return (
        <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '15px',
            justifyContent: 'center',
        }}>
            {blogs.map((blog) => (
                <BlogCard key={blog.guid} blog={blog} />
            ))}
        </div>
    );
};

export default BlogParser;
