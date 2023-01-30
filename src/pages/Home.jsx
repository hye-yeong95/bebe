import React from 'react';
import banner from '../images/banner.png';
import MenuButton from '../components/ui/MenuButton';
import vector from '../images/vector.png';
import { Link } from 'react-router-dom';
 
export default function Home() {
    return (
        <div>
            <div className='relative' >
                <img src={banner} alt='banner'/>
                <div className='absolute flex items-center bottom-5 left-10 gap-5 p-2' >
                    <p className='text-[85px] font-bold text-left text-white'>
                        we support<br/>
                        every baby's first step
                    </p>
                    <div className='flex mt-20'>
                        <div className='mx-5'  >
                            <img src={vector} alt='vector'/>
                        </div> 
                        <Link className='mx-5' to='/bebekit'>
                            <MenuButton text={"BeBe Kit"} />   
                        </Link>
                    </div>
                </div>
            </div>
            <div className='h-[500px]'>
                <h1 className='text-center text-5xl font-bold mt-28 mb-20'>Sevice</h1>
                <div className='flex justify-center gap-5' >
                    <p># Bebe dairy</p>
                    <p># Bebe kit</p>
                    <p># Bebe mall</p>
                </div>
            </div>
        </div>
    );
}

