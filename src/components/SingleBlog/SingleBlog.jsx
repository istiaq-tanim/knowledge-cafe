import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'

const SingleBlog = (props) => {
    const {id, picture, name, authorImage, time, publish, title } = props.blog;
    const handleRead=props.handleRead;
    const handleBookMark=props.handleBookMark;
    return (
        <div className='my-3'>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='h-[400px]' src={picture} alt="Shoes"/></figure>
                <div className='md:flex md:justify-between mt-5'>
                    <div className='md:flex md:gap-4'>
                        <img className="h-16 w-16 md:mx-auto rounded-full inline-block" src={authorImage} />
                        <div>
                            <p className="text-xl pt-1 text-[#111111] font-semibold">{name}</p>
                            <p className='text-[rgba(17,17,17,0.6)] pt-1'>{publish}</p>
                        </div>
                    </div>
                    <p className='text-lg text-[rgba(17,17,17,0.6)]'>{time} min read <span onClick={()=>{handleBookMark (props.blog,id) }} className='px-2 cursor-pointer'><FontAwesomeIcon icon={faBookmark} /></span></p>

                </div>
                <h3 className="text-left my-5  text-[#111111] font-bold text-2xl">{title}</h3>

                <a onClick={()=>{handleRead(props.blog)}} className="link text-left text-lg text-[#6047EC] font-semibold">Mark as read</a>
            </div>
        </div>
    );
};

export default SingleBlog;