import React from 'react';
import banner from '../images/banner.png';
import vector from '../images/vector.png';
import { Link } from 'react-router-dom';

export default function BebeFamily() {
    return (
        <div className='h-[900px]'>   
            <nav className=''>
                    <ul className='flex justify-around items-center h-14 text-xl text-gray-700 rela'>
                        <li>
                            <a href='/detail'>베베다이어리</a>
                        </li>
                        <li>
                            <a href='/detail'>베베키트</a>
                        </li>
                        <li>
                            <a href='/detail'>베베케어</a>
                        </li>
                        <li>
                            <a href='/detail'>베베몰</a>
                        </li>
                        <li>
                            <a href='/detail'>베베인공지능</a>
                        </li>
                    </ul>
            </nav>
            














          

        </div>
    );
}

