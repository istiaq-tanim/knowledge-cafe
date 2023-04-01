import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleBlog from '../SingleBlog/SingleBlog';
import { ToastContainer, toast } from 'react-toastify';

const Blog = () => {
    const [blogs,setBlogs]=useState([]);
    const [watchTime,setWatchTime]=useState(0);
    const [bookmark,setBookmark]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    
    const handleRead = (blog) =>
    {
       setWatchTime(watchTime+blog.time);
    }

    const handleBookMark = (blog,id) =>
    {
        const isBookMarked=bookmark.find((item)=>item.id===id);
        if(isBookMarked)
        {
            toast("You Have Already Bookmarked This Blog")
        }
        else
        {
            const newBookmark=[...bookmark,blog];
            setBookmark(newBookmark);
        }
        
    }
    return (
        <div className="grid md:grid-cols-3 mt-10">
            
            <div className='md:col-span-2'> 
            {
                blogs.map(blog=><SingleBlog key={blog.id} blog={blog} handleBookMark={handleBookMark} handleRead={handleRead}></SingleBlog>)
            }
            </div>
            <div>
                 <Cart watchTime={watchTime} bookmark={bookmark}></Cart>
            </div>
        </div>
    );
};

export default Blog;