import React from 'react';

export default function MenuButton({text}) {
    return (
       <div className='flex justify-end items-center relative gap-2.5 px-10 py-[30px] rounded-[100px] bg-[#f95c58]'>
        <span className='flex-grow-0 flex-shrink-0 text-3xl font-medium text-center text-white' >{text}</span>
       </div>
    );
}


