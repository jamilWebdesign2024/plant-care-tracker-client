import React, { Suspense, useState } from 'react';
import SinglePlant from './SinglePlant';
// import { div } from 'framer-motion/client';

const NewPlant = ({data}) => {
    const [allPlant, setAllPlant]=useState(false)
    
    const plantShort = allPlant ? data : data.slice(0, 6)

    return (
        <div className='mt-12 py-8'>
            <Suspense fallback={<h3>Plant Loading......</h3>}>
                    <div className='text-center mb-4'>
                        <p className='text-[#4ea9ae] font-semibold'>Plant Store</p>
                        <h1 className='text-2xl font-bold'>New Arrivales</h1>
                    </div>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-9/12 mx-auto p-5 lg:p-0'>
                        {
                            plantShort.map((singlePlant)=><SinglePlant key={singlePlant.id} singlePlant={singlePlant}></SinglePlant>)
                        }
                  </div>
            </Suspense>

            {
                data.length > 6 && (
                    <div className='text-center mt-6'>
                        <button onClick={()=> setAllPlant(!allPlant)}
                             className="px-6 py-2 mb-12 bg-[#4ea9ae]  hover:bg-cyan-900 text-white font-semibold rounded-full transition-all duration-300 cursor-pointer"
                            >
                            {allPlant ? "Short Plant" : "All Plant"}
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default NewPlant;

