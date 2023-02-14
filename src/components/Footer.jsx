import React from 'react';

export default function Footer() {
    return (
        
        <div className=' bg-black p-10 w-full '>
            <div className='flex justify-around  text-white'>
                <div>
                    <h2 className='text-xl font-bold pb-4 pt-2'>Bebe Family</h2>
                    <p >다이어리</p>
                    <p >키트</p>
                    <p >베베몰</p>
                    <p >베베케어</p>
                    <p >베베AI</p>
                </div>
                <div>
                    <h2 className='text-xl font-bold pb-4 pt-2'>인재영입</h2>
                    <p >다이어리</p>
                    <p >키트</p>
                </div>
                <div>
                    <h2 className='text-xl font-bold pb-4 pt-2'>인재영입</h2>
                    <p >직무 소개</p>
                    <p >회사 지원하기</p>
                </div>
                <div>
                    <h2 className='text-xl font-bold pb-4 pt-2'>고객센터</h2>
                    <p >모바일 고객센터</p>
                    <p >유선 고객센터</p>
                </div>
                <div>
                    <h2 className='text-xl font-bold pb-4'>문의</h2>
                    <p>사업 제휴</p>
                    <p>광고 문의</p>
                </div>
           </div>
            <div className=' h-40 flex justify-end place-items-end'>
                <div className=' text-white text-sm' >
                    <h2>베베(주)</h2>
                    <div>
                    <p>사업자 등록번호: 000-00-00000</p>
                    <p>대표이사: 김 혜 영 </p>
                    </div>
                </div>
                <p>https://diary.mybebe.net/</p>
            </div>
        </div>
    );
}

