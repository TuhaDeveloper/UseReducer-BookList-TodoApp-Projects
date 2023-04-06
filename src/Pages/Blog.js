import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { blogsData } from '../Data'
const Blog = () => {
    const { title } = useParams()
    const location = useLocation();
    // const [bodyData, setbodyData] = useState('');

    // useEffect(() => {
    //     const blogData = blogsData.filter((blog) => blog.title == title)
    //     setbodyData(blogData[0])
    // }, [])


    return (
        <div>
            <h1>{title} page</h1>
            <p>{location.state.body}</p>
        </div>
    )
}

export default Blog