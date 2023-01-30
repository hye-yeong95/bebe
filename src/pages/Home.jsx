import React from 'react';
import banner from '../images/banner.png';
import vector from '../images/vector.png';
import { Link } from 'react-router-dom';
 
export default function Home() {

    return (
        <div>
            <div className='relative' >
                <img src={banner} alt='banner'/>
                <div className='absolute flex items-center bottom-5 left-10 gap-5' >
                    <p className='text-[90px] font-bold text-left text-white'>
                        we support<br/>
                        every baby's first step
                    </p>
                    <div className='flex items-center m-5 pt-24'>
                        <img className='-ml-4 mt-16'  src={vector} alt='vector'/>
                        <Link className='ml-6 mt-16' to='/bebekit'>
                            <p className='px-14 py-8 rounded-full  font-bold text-3xl bg-white text-brand'># Bebe dairy</p> 
                        </Link>
                    </div>
                </div>
            </div>
            <div className='h-[700px]'>
                <h1 className='text-center text-[60px] font-bold mt-28 mb-20'>Sevice</h1>
                <div className='flex justify-center gap-10' >
                    <p className='px-10 py-[20px] rounded-full  font-bold text-3xl text-white bg-[#f95c58]/30  hover:bg-brand hover:text-white'># Bebe dairy</p>
                    <p className='px-10 py-[20px] rounded-full  font-bold text-3xl text-white bg-[#f95c58]/30  hover:bg-brand hover:text-white'># Bebe kit</p>
                    <p className='px-10 py-[20px] rounded-full  font-bold text-3xl text-white bg-[#f95c58]/30  hover:bg-brand hover:text-white'># Bebe mall</p>
                </div>
                <div className='m-32'>
                    <p className='flex justify-center text-center font-bold text-4xl'>
                        우리 아이의 성장을 "베베 다이어리"와 함께 기록하고 관리하세요.<br/>
                        소중한 장면을 같이 또 따로 기억될 수 있도록 도와줄께요.
                    </p>
                </div>
            </div>
        </div>
    );
}

