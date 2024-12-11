import { useEffect, useState } from "react"
import Friend from "./Friend";


export default function Friends(){

    const [friends, setFriends] =useState([]);

     useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data)
        )
     },[])   
    return(
        <>
        <h2>friends: {friends.length}</h2>
        {
            friends.map(item => <Friend friends={item}></Friend>)
        }
        </>
    )
}