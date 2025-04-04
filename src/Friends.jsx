import { useEffect, useState } from "react";
import "./Friends.css"
import Friend from "./Friend";


const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    return (
        <div className="box">
            <h2>Friends: {friends.length}</h2>
            {
                friends.map((friend) => <Friend friend={friend} key={friend.id}/>)
            }
        </div>
    )
}

export default Friends;