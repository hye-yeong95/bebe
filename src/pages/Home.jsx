import React from 'react';
import banner from '../images/banner.png';
import MenuButton from '../components/ui/MenuButton';

export default function Home() {
    return (
        <div>
            <div className=' relative ' >
                <img src={banner} alt='banner' />
                <div className='flex absolute bottom-20 left-20'>
                    <div className=' text-white text-[100px] font-extrabold'>
                        we support<br/>
                        every baby's first step
                    </div>
                    <p>화살표</p>
                    <MenuButton text={"Bebe Kit"}/>
                </div>
           </div>
           <div>
                <h1>Service</h1>
           </div>
        </div>
    );
}

