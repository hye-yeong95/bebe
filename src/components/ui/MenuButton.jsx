import React from 'react';

export default function MenuButton({text}) {
    return (
       <div className='flex justify-center gap-3 px-10 py-[20px] rounded-full bg-white text-gray-800  hover:bg-brand hover:text-white'>
            <span className='flex-grow-0 flex-shrink-0 text-3xl font-medium text-center ' >{text}</span>
       </div>
    );
}



