import React from 'react';

const SingleBlog = (props) => {
    const { picture, name, authorImage, time, publish, title } = props.blog
    return (
        <div className='my-3'>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='h-[400px]' src={picture} alt="Shoes" /></figure>
                <div className='flex justify-between mt-5'>
                    <div className='flex md:gap-4'>
                        <img className="h-16 w-16 md:mx-auto rounded-full" src={authorImage} />
                        <div>
                            <p className="text-xl text-[#111111] font-semibold">{name}</p>
                            <p className='text-[rgba(17,17,17,0.6)]'>{publish}</p>
                        </div>
                    </div>
                    <p className='text-lg text-[rgba(17,17,17,0.6)]'>{time} min read</p>
                </div>
                <h3 className="text-left my-5  text-[#111111] font-bold text-2xl">{title}</h3>
        
                <a className="link text-left text-lg text-[#6047EC] font-semibold">Mark as read</a>
            </div>
        </div>
    );
};

export default SingleBlog;