import React from 'react';

export default function CrewCard() {

    const crews = [
        {
            id: 1,
            name: '김혜영',
            job: 'Frontend 개발',
            info: '늘 갈망하고 바보처럼 도전하라.'
        },
        {
            id: 2,
            name: '조현덕',
            job: 'Backtend 개발',
            info: '베베에서 인생 팀을 만났다!'
        },
        {
            id: 3,
            name: '김서영',
            job: 'BX 디자인',
            info: '즐겁게 성장하자'
        },
        {
            id: 4,
            name: '최은진',
            job: '총무, 회계',
            info: 'He who laughs, lasts!'
        },
        {
            id: 5,
            name: '김지연',
            job: '제품 디자인',
            info: '인생은 속도가 아니라 방향이다'
        },
        {
            id: 6,
            name: '강가혜',
            job: '마케팅',
            info: '어디를 가든지 마음을 다해간다!'
        },
        {
            id: 7,
            name: '권수진',
            job: '인사관리',
            info: '행복한 하루!'
        },
    ]

    const crewsList = crews.map((crews)=> 
        <li key={crews.id}>
            <p>{crews.name}</p>
            <p>{crews.job}</p>
            <p>{crews.info}</p>
        </li>
        );
 
    return (
        <div>
            <ul className='flex justify-around items-center my-20'>{crewsList.splice(0,3)}</ul>
            <ul className='flex justify-around items-center '>{crewsList.splice(0,3)}</ul>
        </div>
    );
}

