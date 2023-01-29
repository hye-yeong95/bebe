import React from 'react';
import MenuButton from './ui/MenuButton';
import LoginButton from './ui/LoginButton';
import mainLogo from '../images/main-logo.png';
import moreIcon from '../images/more.png';
import languageIcon from '../images/language.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className='flex justify-between bg-white '>
            <Link to='/' className='flex mx-10 my-5' >
                <img src={mainLogo} alt="logo" />
            </Link>
            <nav className='flex items-center gap-5'>
                <Link to='/' className='m-5 pl-5'>
                    <MenuButton text={"Home"} />
                </Link>
                <Link to='/detail' className='m-5'>
                    <MenuButton text={"Bebe Family"} />
                </Link>
                <Link to='/crew'  className='m-5'>
                    <MenuButton text={"Crew"} />
                </Link>
                <button className='m-5 pr-5'>
                    <img src={moreIcon} alt='icon' />
                </button>
            </nav>
            <div className='flex items-center mx-10 my-5'>
                <Link to='/login' >
                    <LoginButton text={'login'}/>
                </Link>
                <button className='px-20'>
                    <img src={languageIcon} alt='icon' />
                </button>
            </div>
        </header>
    );
}

