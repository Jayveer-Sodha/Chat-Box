import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')

            .then(response => {
                console.log(response)
                setPosts(response.data)

            })
            .catch(error => {
                console.log(error)
        })
    },[])
         
    return (
        <div>
            <ul>
                {posts.map(post => <li> {post.id }</li>)}
                </ul>            
        </div>
    )
}

export default DataFetching
