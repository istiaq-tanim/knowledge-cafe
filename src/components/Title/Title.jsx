import React from 'react';

const Title = ({item}) => {
    return (
        <div className="bg-white border-2 rounded-md m-5">
            <p className='p-5 text-[#111111] font-bold text-lg text-left'>{item}</p>
        </div>
    );
};

export default Title;