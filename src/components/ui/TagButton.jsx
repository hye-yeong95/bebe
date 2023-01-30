import React from 'react';

export default function TagButton({text, onClick}) {
    return (
        <p onClick={onClick} className='cursor-pointer px-10 py-[20px] rounded-full  font-bold text-3xl text-white bg-[#f95c58]/30  hover:bg-brand hover:text-white'># {text}</p>
    );
}

