import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import axios from 'axios';
import extractThumbnail from "./Thumbnail"
import Preloader from '../../components/Pre';


const BlogParser = ({ feedUrl }) => {

    const delayLoader = (timeout) => {
        setTimeout(() => {
            setLoading(false);
        }, timeout);
    };

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                const response = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`);
                delayLoader(1000);
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
            {loading ? (
                <Preloader load={loading} />
            ) : (
                blogs.map((blog) => (
                    <BlogCard key={blog.guid} blog={blog} />
                ))
                
            )
            }

        </div>
    );
};

export default BlogParser;
