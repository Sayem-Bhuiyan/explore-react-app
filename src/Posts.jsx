import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json())
        .then( data => setPosts(data))
    },[])

    return (
        <div>
            <h2>Total Posts: {posts.length}</h2>
            <div>
                {
                    posts.map(post => <Post post={post} key={post.id}/>)
                }
            </div>
        </div>
    )
}

export default Posts; 