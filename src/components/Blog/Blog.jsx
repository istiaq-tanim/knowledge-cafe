import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="grid md:grid-cols-3 mt-10">
            
            <div className='col-span-2'> 
            {
                blogs.map(blog=><SingleBlog key={blog.id} blog={blog}></SingleBlog>)
            }
            </div>
            <div>
                <h3>Cart Is Here</h3>
            </div>
        </div>
    );
};

export default Blog;