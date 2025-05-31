import React from 'react';
import { useLoaderData, Link } from 'react';

const PlantDetails = () => {
  const plant = useLoaderData();

  if (!plant) {
    return (
      <div className="p-6 text-center text-red-600">
        Sorry, no plant found with this ID.
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Plant Name */}
      <div className="bg-green-700 p-5 text-white text-center text-3xl font-extrabold">
        {plant.name}
      </div>

      {/* Image */}
      <div className="p-6 flex justify-center">
        <img
          src={plant.image}
          alt={plant.name}
          className="rounded-lg object-cover w-full max-h-64"
        />
      </div>

      {/* Details */}
      <div className="px-6 pb-6 space-y-4 text-gray-700">
        <div>
          <span className="font-semibold text-green-800">Category: </span>
          <span>{plant.category}</span>
        </div>

        <div>
          <span className="font-semibold text-green-800">Watering Frequency: </span>
          <span>{plant.wateringFrequency}</span>
        </div>

        {plant.description && (
          <div>
            <span className="font-semibold text-green-800">Description: </span>
            <p className="mt-1 text-gray-600">{plant.description}</p>
          </div>
        )}
      </div>

      {/* Back Button */}
      <div className="px-6 pb-6">
        <Link to="/allplants">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition duration-200">
            Back to All Plants
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlantDetails;


