import React from 'react';

export default function MenuButton({text}) {
    return (
       <div className='flex px-10 py-4 rounded-full bg-#F2F2F2 hover:bg-brand hover:text-white'>
            <span className='flex-grow-0 flex-shrink-0 text-3xl font-medium text-center' >{text}</span>
       </div>
    );
}



