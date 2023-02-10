import React from 'react';

export default function CrewCard() {

    const crews = [
        {
            id: 1,
            name: '김혜영',
            job: 'Frontend 개발',
            info: '"늘 갈망하고 바보처럼 도전하라."',
            image: "https://www.pexels.com/ko-kr/photo/601170/",
        },
        {
            id: 2,
            name: '조현덕',
            job: 'Backtend 개발',
            info: '"베베에서 인생 팀을 만났다!"',
            image: "https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 3,
            name: '김서영',
            job: 'BX 디자인',
            info: '"즐겁게 성장하자"',
            image: "https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 4,
            name: '최은진',
            job: '총무, 회계',
            info: '"He who laughs, lasts!"',
            image: "https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 5,
            name: '김지연',
            job: '제품 디자인',
            info: '"인생은 속도가 아니라 방향이다"',
            image: "https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 6,
            name: '강가혜',
            job: '마케팅',
            info: '"어디를 가든지 마음을 다해간다!"',
            image: "https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 7,
            name: '권수진',
            job: '인사관리',
            info: '"행복한 하루!"',
            image: "https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
    ]

    const crewsList = crews.map((crews)=> 
        <div className='my-5' key={crews.id}>
            <div className='w-100 h-100 rounded-t-md'>
                <image />
            </div>
            <div className=' bg-gray-100 rounded-b-md gap-1 p-2'>
                <p className='text-4xl m-4' >{crews.name}</p>
                <p className='text-xl ml-4'>{crews.job}</p>
                <p className='text-3xl m-4'>{crews.info}</p>
            </div>
        </div>
        );
 
    return (
        <div className='my-52'>
            <div className=''>
                <div className='grid grid-cols-3 gap-20'>{crewsList.splice(0.3)}</div>
            </div>
            <div>
                <div className='grid grid-cols-3 gap-20 '>{crewsList.splice(0,3)}</div>
            </div>
        </div>

    );
}

