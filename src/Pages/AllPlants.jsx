
import { img } from 'framer-motion/client';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const AllPlants = () => {
  // const [plants, setPlants]=useState(data);
  const data = useLoaderData();
  const [selectedCareLevel, setSelectedCareLevel] = useState('');

  const filteringData = selectedCareLevel ? data.filter(plant => plant.careLevel === selectedCareLevel) : data;


  return (
    <div className="lg:p-6 p-2 overflow-x-auto">
      <h2 className='text-3xl font-bold text-center mb-6 text-green-700'>All Plants</h2>

      <div className='flex justify-end'>
          <div className='mb-4 text-center'>
          {/* <label className="mr-2 font-semibold">Care Level:</label> */}
          <select
            value={selectedCareLevel}
            onChange={(e) => setSelectedCareLevel(e.target.value)}
            className="border border-green-500 px-4 py-2 rounded"
          >
            <option value=""> All</option>
            <option value="Succulent">Succulent</option>
            <option value="Fern">Fern</option>
            <option value="Flowering">Flowering</option>
          </select>
        </div>
      </div>



      <table className="table">
        {/* head */}
        <thead>
          <tr className='text-center bg-green-700 text-white'>
            <th className='px-4 py-2 border'>Image</th>
            <th className='px-4 py-2 border'>Plant Name</th>
            <th className='px-4 py-2 border'>Category</th>
            <th className='px-4 py-2 border'>Care Level</th>
            <th className='px-4 py-2 border'>Watering Frequency</th>
            <th className='px-4 py-2 border'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            filteringData.map(plant => <tr key={plant.id} className='text-center hover:bg-green-50'>
              <th className='px-4 py-2 border'>
                <img className='w-16 h-16 object-cover mx-auto rounded-md' src={plant.image} alt="" />
              </th>
              <td className='px-4 py-2 border'>{plant.name}</td>
              <td className='px-4 py-2 border'>{plant.category}</td>
              <td className='px-4 py-2 border'>{plant.careLevel}</td>
              <td className='px-4 py-2 border'>{plant.wateringFrequency}</td>
              <td className='px-4 py-2 border'>
                <Link to={`/plantDetails/${plant.id}`}>
                  <button className='bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-all duration-200'>
                    View Details
                  </button>
                </Link>
              </td>
            </tr>)
          }
          {filteringData.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center text-red-500 py-4">
                No plants found for selected care level.
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
};

export default AllPlants;






