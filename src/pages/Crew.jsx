import React from 'react';
import CrewCard from '../components/CrewCard';
import crewBanner from '../images/crew.png';

export default function Crew() {
    return (
        <div>
            <div className='relative' >
                <img src={crewBanner} alt='banner'/>
                <div className='absolute flex items-center bottom-12 left-10 gap-5' >
                    <p className='text-7xl leading-snug font-bold text-left text-white'>
                        우리는 누구나 리더가 될 수 있고,<br/>
                        자유롭게 의견을 공유하며,<br/>
                        서로 좋은 영향을 주며 일합니다.
                    </p>
                </div>
            </div>
            <div className='h-[450px] my-32 border-b border-gray-400'>
                <h1 className='text-center text-6xl font-bold my-20'>Crew</h1>
                <p className='flex justify-center text-center font-semibold text-4xl'>
                    뭔말을 적을지 보류중<br/>
                    뭔말을 적을지 보류중 뭔말을 적을지 보류중<br/>
                </p>     
            </div>
            <CrewCard />








        </div>
    );
}

