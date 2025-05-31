import React from 'react';
import { Link, useLoaderData } from 'react-router';

const PlantDetails = () => {

  const plant = useLoaderData();
  const {id, name, category, wateringFrequency, image, benefits, drawbacks, description}=plant;
  console.log(plant);
  

  return (
    <div className='w-10/12 mx-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden'>
      
      <div className="bg-green-700 p-5 text-white text-center text-3xl font-extrabold">
       {name}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className="p-6 flex justify-start">
            <img
                src={image}
                alt=""
                className="rounded-lg object-cover w-full max-h-screen"
              />
            </div>

            <div className="px-6 pb-6 space-y-5 text-gray-700 mt-5">
          <div>
            <span className="font-bold text-green-800">Category: </span>
            <span>{category}</span>
          </div>
        <div>
          <span className="font-bold text-green-800">Watering Frequency: </span>
           <span>{wateringFrequency}</span>
        </div>
        <div>
          <span className="font-bold text-green-800">Benefites: </span>
           <span>{benefits}</span>
        </div>
        <div>
          <span className="font-bold text-green-800">Drabacks: </span>
           <span>{drawbacks}</span>
        </div>

        {plant.description && (
          <div>
            <span className="font-bold text-green-800">Description: </span>
            <p className="mt-1 text-gray-600">{description}</p>
          </div>
        )}
            </div>
        </div>

        <div className="px-6 pb-6">
        <Link to="/allplants">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 cursor-pointer rounded transition duration-200">
              Back to All Plants
            </button>
          </Link>
      </div>

      




    </div>
  );
};

export default PlantDetails;




