import React, { useState } from 'react';
import TagButton from '../components/ui/TagButton';
import banner from '../images/banner.png';
import vector from '../images/vector.png';
import { Link } from 'react-router-dom';
import TagInfo from '../components/TagInfo';
import Icon from '../components/ui/Icon';
 
export default function Home() {

    const [tagValue, setTagValue] = useState(1);

    return (
        <div>
            <div className='relative ' >
                <img className='' src={banner} alt='banner'/>
                <div className='absolute flex justify-evenly w-full items-start bottom-10 ml-2'>                   
                    <p className='text-7xl leading-snug font-bold text-left text-white'>
                        we support<br/>
                        every baby's first step
                    </p>
                    <div className=' flex items-center mt-12 ml-2'>
                        <img className='mt-14 mr-6'  src={vector} alt='vector'/>
                        <Link className='mt-14 mx-4 ' to='/bebekit'>
                            <p className='px-14 py-8 rounded-full  font-bold text-3xl bg-white text-brand'># Bebe kit</p> 
                        </Link>
                    </div>
                </div>
            </div>
            <div className='h-[700px] my-32 border-b border-gray-400'>
                <h1 className='text-center text-7xl font-bold my-20'>Sevice</h1>
                <div className='flex justify-center gap-10 ' >
                    <TagButton bgColor={ tagValue === 1 ? "bg-brand" : "bg-[#f95c58]/30" } text={"Bebe diary"} onClick={() => setTagValue(1)} />
                    <TagButton bgColor={ tagValue === 2 ? "bg-brand" : "bg-[#f95c58]/30" } text={"Bebe Care"} onClick={() => setTagValue(2)}/>
                    <TagButton bgColor={ tagValue === 3 ? "bg-brand" : "bg-[#f95c58]/30" } text={"Bebe mall"} onClick={() => setTagValue(3)}/>
                </div>
                <div className='m-32'>
                    <TagInfo tagValue={tagValue} />
                </div>
            </div>
            <div className='my-32'>
                <h1 className='text-center text-6xl font-bold my-20' >베베 가치</h1>
                <p className='flex justify-center text-center font-semibold text-4xl leading-normal'>
                    "베베"는 우리의 서비스를 누구나 잘 이해하고<br/>
                    가치를 공유하며, 나아가기를 희망합니다.<br/>
                    우리가 제시하는 아이콘은 그것에 대한 첫 제시이며,<br/>
                    더 쉽고 편한 시작이 되기를 바랍니다. 
                </p>
            </div>
            <Icon />
        </div>
    );
}

