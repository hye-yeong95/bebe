import React from 'react';
import banner from '../images/banner.png';
import MenuButton from '../components/ui/MenuButton';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
 
export default function Home() {
    return (
        <div className='' >
            <img className=' absolute object-cover' src={banner} alt='banner' />
            <div className='flex justify-start items-end gap-[41px]'>
                <div className='flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5 py-20' >
                   <p className='flex-grow-0 flex-shrink-0 text-[100px] font-bold text-left text-white'>
                        <span className='flex-grow-0 flex-shrink-0 text-[90px] font-bold text-left text-white'>we support</span><br/>
                        <span className='flex-grow-0 flex-shrink-0  text-[90px] font-bold text-left text-white'>every baby's first step</span>
                   </p>
                </div>
            </div>
        </div>
    );
}

