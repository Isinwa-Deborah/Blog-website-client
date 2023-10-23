import { useEffect, useState } from "react";
import Post from "../Post";
import PostOne from "../PostOne";
import PostTwo from "../PostTwo";

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/post').then(response => {
            response.json().then(posts => {
                // console.log(posts);
                setPosts(posts);
            })
        })
    }, []);
    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />

            ))}

            {/* <Post />
            <PostOne />
            <PostTwo /> */}
        </>
    )
}