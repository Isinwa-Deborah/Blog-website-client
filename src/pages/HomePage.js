import { useEffect, useState } from "react";
import Post from "../Post";
import PostOne from "../PostOne";
import PostTwo from "../PostTwo";

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    /* Old syntax */
    /*useEffect(() => {
            fetch('http://localhost:4000/post').then(response => {
                response.json().then(posts => {
                    // console.log(posts);
                    setPosts(posts);
                })
            })
        }, []);*/

    useEffect(() => {
        fetch('http://localhost:4000/post')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setPosts(data);
            })
            .catch((err) => {
                setError(err);
            });
    }, []);

    /*return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />

            ))}

            {<Post />
            <PostOne />
            <PostTwo /> }
        </>
    )*/

    return (
        <div>
            {error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div>
                    {posts.map((post) => (
                        <Post key={post.id} {...post} />
                    ))}
                </div>
            )}
        </div>
    );
}