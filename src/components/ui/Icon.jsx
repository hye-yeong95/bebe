import React from 'react';

const icons = [
    {
        name: '젖병'
    },
    {
        name: '귀저귀'
    },
    {
        name: '아기'
    },
    {
        name: '물온도'
    },
    {
        name: '임산부'
    },
    {
        name: '다이어리'
    },
    {
        name: '목욕'
    },
    {
        name: '체온계'
    },
    {
        name: '꿈나라 아기'
    },
    {
        name: '우는 아기'
    },
    {
        name: '이유식'
    },
    {
        name: '놀이'
    },
    {
        name: '턱받이'
    },
    {
        name: '분유'
    },
    {
        name: '가족'
    },
    {
        name: '손씻기'
    },
    {
        name: '모유수유'
    },
    {
        name: '모자'
    },
    {
        name: '손톱 가위'
    },
    {
        name: '가제 손수건'
    },
    {
        name: '튼살 크림'
    },
    {
        name: '침대'
    },
    {
        name: '양말'
    },
    {
        name: '신발'
    },
    {
        name: '젖병'
    },
    {
        name: '외출복'
    },
    {
        name: '실내복'
    },
    {
        name: '티슈'
    },
    {
        name: '공갈 젖꼭지'
    },
    {
        name: '주의 사항'
    },
]

const iconList = icons.map((icon) => 
    <div key={icon.name} className='flex justify-center items-center rounded-full w-28 h-28 bg-slate-100 my-6 '>
        {icon.name}
    </div>
)

export default function Icon() {
    return (
        <div className='grid grid-cols-6 mx-64 my-32 p-10'>
            {iconList}
        </div>
    );
}

