import React from 'react';

export default function LoginButton({text}) {
    return (
       <div className='flex px-10 py-4 rounded-full bg-black text-white hover:bg-white hover:text-black'>
            <span className='flex-grow-0 flex-shrink-0 text-3xl font-medium text-center' >{text}</span>
       </div>
    );
}
