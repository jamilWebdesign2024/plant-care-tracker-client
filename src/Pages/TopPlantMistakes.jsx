import React, { use } from 'react';

const TopPlantMistakes = ({ plantPromise }) => {

    const plantPromiseData = use(plantPromise);
    console.log(plantPromiseData);


    return (
        <div className='py-8 mt-12'>
            <h2 className="text-2xl font-bold mb-6 text-center">Top Plant Care Mistakes</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr w-9/12 mx-auto'>
                {
                    plantPromiseData.map((item, index) => (
                        <div key={index} className='max-w-lg'>
                            <div className='bg-white shadow-md rounded-xl p-4 border border-green-100 hover:shadow-xl transition-all flex flex-col justify-between'>
                                <div>
                                    <h3 className='text-xl font-semibold text-neutral'>{item.title}</h3>
                                    <p className='text-gray-600 mt-2 text-[12px]'>{item.desc}</p>
                                </div>
                                <p className='text-sm text-info mt-1'>👍 likes</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default TopPlantMistakes;




