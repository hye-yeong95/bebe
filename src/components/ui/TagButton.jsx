import React from 'react';

export default function TagButton({text, onClick, bgColor}) {
    return (
        <p onClick={onClick} className={`cursor-pointer px-10 py-[20px] rounded-full  font-bold text-3xl text-white ${bgColor}`}># {text}</p>
    );
}

