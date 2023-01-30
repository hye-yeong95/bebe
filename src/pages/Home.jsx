import React, { useState } from 'react';
import TagButton from '../components/ui/TagButton';
import banner from '../images/banner.png';
import vector from '../images/vector.png';
import { Link } from 'react-router-dom';
import TagInfo from '../components/TagInfo';
 
export default function Home() {

    const [tagValue, setTagValue] = useState(null);

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
                            <p className='px-14 py-8 rounded-full  font-bold text-3xl bg-white text-brand'># Bebe kit</p> 
                        </Link>
                    </div>
                </div>
            </div>
            <div className='h-[700px]'>
                <h1 className='text-center text-[60px] font-bold mt-20 mb-20'>Sevice</h1>
                <div className='flex justify-center gap-10' >
                    <TagButton text={"Bebe diary"} onClick={() => setTagValue(1)} />
                    <TagButton text={"Bebe kit"} onClick={() => setTagValue(2)}/>
                    <TagButton text={"Bebe mall"} onClick={() => setTagValue(3)}/>
                </div>
                <div className='m-32'>
                    <TagInfo tagValue={tagValue} />
                </div>
            </div>
        </div>
    );
}

