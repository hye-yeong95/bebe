import React from 'react';
import MenuButton from './ui/MenuButton';
import mainLogo from '../images/main-logo.png';
import { CiCircleMore } from 'react-icons/ci'
import { BsGlobe } from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className='flex justify-between' >
            <Link to='/' className='flex items-center shrink-0 w-1/4 p-2 ml-10'>
                <img className='' src={mainLogo} alt="logo"/>
            </Link>
            <nav className='flex justify-around items-center w-1/2 gap-5 p-2 mx-20' >
                <Link to='/'>
                    <MenuButton text={"Home"} />
                </Link>
                <Link to='/detail'>
                    <MenuButton text={"Bebe Family"} />
                </Link>
                <Link to='/crew'  >
                    <MenuButton text={"Crew"} />
                </Link>
            </nav>
            <div className='flex justify-center items-center gap-12 w-1/4 p-4' >
                <button className='text-4xl shrink-0 ' >
                    <CiCircleMore />
                </button>
                <button className='text-3xl shrink-0 ' >
                    <BsGlobe />
                </button>
            </div>
        </header>
    );
}

