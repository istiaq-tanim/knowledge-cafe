import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    const handleRead = (blog) =>
    {
      console.log(blog)
    }
    return (
        <div className="grid md:grid-cols-3 mt-10">
            
            <div className='col-span-2'> 
            {
                blogs.map(blog=><SingleBlog key={blog.id} blog={blog} handleRead={handleRead}></SingleBlog>)
            }
            </div>
            <div>
                 <Cart></Cart>
            </div>
        </div>
    );
};

export default Blog;