import React from 'react';

export default function TagInfo({tagValue}) {
    
    switch(tagValue) {
        case 1 :
            return <p className='flex justify-center text-center font-bold text-4xl'>
                                우리 아이의 성장을 "베베 다이어리"와 함께 기록하고 관리하세요.<br/>
                                 소중한 장면을 같이 또 따로 기억될 수 있도록 도와줄께요.
                 </p>
        case 2 :
            return  <p className='flex justify-center text-center font-bold text-4xl'>
                    손닿지 않는 곳에까지 우리 아이를 위한 최소한의 준비 박스 <br/>
                    베베가 전달해 드려요
                    </p>
        case 3 :
            return  <p className='flex justify-center text-center font-bold text-4xl'>
                    우리 아이를 위한 쇼핑몰 <br/>
                    마니마니 사거라아아아아아아아아아아아아 하아 
                    </p>
        default :
            return <p>I'm default value</p>
    }
}

