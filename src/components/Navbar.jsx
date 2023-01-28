import React from 'react';
import MenuButton from './MenuButton';
import logo from '../images/logo.png';
import textLogo from '../images/text_logo.png';
import moreIcon from '../images/more.png';
import global from '../images/global.png';

export default function Navbar() {
    return (
        <div className='flex w-[1920px] h-[180px] bg-slate-300 justify-around '>
            <div className='flex'>
                <img alt='logo' src={logo} />
                <img alt='text-logo' src={textLogo} />
            </div>
            <div className='flex py-20 items-center' >
                <MenuButton text={"Home"} />
                <MenuButton text={"Home"} />
                <MenuButton text={"Home"} />
                <img alt='icon' src={moreIcon}/>
            </div>
            <div className='flex py-20 justify-around items-center'>
                <button className='flex justify-end items-center relative gap-2.5 px-10 py-[30px] rounded-[100px] bg-black text-white ' >
                    <p className='font-bold'>Login</p>
                </button>
                <img alt='icon' src={global}/>
            </div>
        </div>
    );
}

