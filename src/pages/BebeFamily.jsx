import React, { useState } from 'react';
import Diary from '../components/Diary';
import Care from '../components/Care';
import Mall from '../components/Mall';

export default function BebeFamily() {

    const [page, setPage] = useState(1);
    console.log(page);

    return (
        <div className='h-[900px] '>   
            <nav className='mb-6 mx-20'>
                    <ul className='flex justify-around items-center h-14 text-xl text-gray-700'>
                        <li onClick={()=> setPage(1)}>
                            Diary
                        </li>
                        <li onClick={()=> setPage(2)}>
                            Care
                        </li>
                        <li onClick={()=> setPage(3)}>
                            Mall
                        </li>
                    </ul>
            </nav>


            {
                page ===1 ? 
                <Diary /> : 
                page === 2 ? 
                <Care /> : 
                page === 3 ?
                <Mall />:
                null          
            }
             














          

        </div>
    );
}

