import React from 'react';
import Title from '../Title/Title';

const Cart = ({watchTime,bookmark}) => {
    return (
        <div className='md:mx-6 mt-2 sticky top-10'>
            <div className="border-2 p-3 border-[rgba(96,71,236,1)] bg-[rgba(96,71,236,0.1)]">
                <p className='text-2xl py-2 text-[rgba(96,71,236,1)] font-semibold'>Spent Time On Read : {watchTime}</p>
            </div>

            <div className='mt-6 pb-3 bg-[rgba(17,17,17,0.05)]'>
                <p className='text-[rgba(17,17,17,1)] font-bold text-2xl py-3'>Bookmarked Blogs: {bookmark.length}</p>
                {
                    bookmark.map(item => <Title item={item.title}></Title>)
                }
            </div>
        </div>
    );
};

export default Cart;