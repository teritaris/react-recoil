import { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            {post.id}:{post.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>
    );
}

export default Posts;
