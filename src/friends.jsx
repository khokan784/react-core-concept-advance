import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './friend';
export default function Friends(){
    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])


    return (
        <div className='box'>
            <h3>friends : {friends.length}</h3>
            
            {
                friends.map(friend => <Friend gfriend={friend}></Friend>)
            }
        </div>
    )
}