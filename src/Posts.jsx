import { use } from "react";
import Post from "./Post";

export default function Posts({ postData }) {
    const posts = use(postData);
    return (
        <div>
            <h3>All Post Are Here: {posts.length}</h3>
            {posts.map((post) => (
                <Post key={post.id} post={post}></Post>
            ))}
        </div>
    );
}
