import React from 'react';

const Cart = ({watchTime}) => {
    return (
        <div className='ml-10 sticky top-10'>
            <div className="border-2 p-3 border-[rgba(96,71,236,1)] bg-[rgba(96,71,236,0.1)]">
                <p className='text-2xl text-[rgba(96,71,236,1)] font-semibold'>Spent Time On Read : {watchTime}</p>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default Cart;