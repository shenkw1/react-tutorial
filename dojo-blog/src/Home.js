import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(r => {
                    console.log(r)
                    if(!r.ok) {
                        throw Error('could not fetch data for specific resource');
                    }
                    return r.json();
                })
                .then((data) => {
                    setBlogs(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(e => {
                    setIsLoading(false);
                    setError(e.message);
                })
        }, 1000)
    }, []);

    return (
        <div className="home">
            {e && <div>{ e }</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}
 
export default Home;