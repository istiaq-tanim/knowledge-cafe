import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {
    const [blogs,setBlogs]=useState([]);
    const [watchTime,setWatchTime]=useState(0)
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    
    const handleRead = (blog) =>
    {
       setWatchTime(watchTime+blog.time);
    }

    const handleBookMark = (blog) =>
    {
        console.log(blog);
    }
    return (
        <div className="grid md:grid-cols-3 mt-10">
            
            <div className='col-span-2'> 
            {
                blogs.map(blog=><SingleBlog key={blog.id} blog={blog} handleBookMark={handleBookMark} handleRead={handleRead}></SingleBlog>)
            }
            </div>
            <div>
                 <Cart watchTime={watchTime}></Cart>
            </div>
        </div>
    );
};

export default Blog;