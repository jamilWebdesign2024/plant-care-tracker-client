import React from 'react';
import { useLoaderData } from 'react-router';

const UpdatePlants = () => {

    const data = useLoaderData();
    console.log(data);
    

    const handleUpdatePlant =e=>{
        e.preventDefault();
    }



    return (
        <div className='lg:p-24 p-4 max-w-7xl mx-auto '>
           <div className='p-12 text-center space-y-4 bg-green-50'>
                <h1 className='text-6xl'>Update Plant</h1>
            
                <form onSubmit={handleUpdatePlant}>
                    <div className=''>
                        <fieldset className="fieldset rounded-box p-4">
                            <label className="label font-bold text-black">Image</label>
                            <input type="text" name='image'  className="input w-full border border-green-800" placeholder="Photo Url" />
                        </fieldset> 
                        <fieldset className="fieldset  rounded-box p-4">
                            <label className="label font-bold text-black">Plant Name</label>
                            <input type="text" name='name' defaultValue={name} className="input w-full border border-green-800" placeholder="Plant Name" />
                        </fieldset> 
                        <fieldset className="fieldset  rounded-box p-4">
                            <select name='category' defaultValue="Select Your Category" className="select w-full border border-green-800 ">
                            <option disabled={true}>Select Your Category</option>
                            <option>succulent</option>
                            <option>fern</option>
                            <option>flowering</option>
                            </select>
                        </fieldset> 
                        <fieldset className="fieldset  rounded-box p-4">
                           <textarea name='description'  className="textarea border border-green-800 h-24 w-full" placeholder="Write your plant Description"></textarea>
                        </fieldset> 
                        <fieldset className="fieldset  rounded-box p-4">
                            <select name='careLevel'  defaultValue="Select Care Level" className="select w-full border border-green-800">
                            <option disabled={true}>Select Care Level</option>
                            <option>Easy</option>
                            <option>Moderate</option>
                            <option>Difficult</option>
                            </select>
                        </fieldset> 
                        <fieldset className="fieldset  rounded-box p-4">
                            <select name='wateringFrequency' defaultValue="Water Frequency" className="select w-full border border-green-800">
                            <option disabled={true}>Water Frequency</option>
                            <option>EveryDay</option>
                            <option>Every 3 days</option>
                            <option>Every 5 days</option>
                            <option>Twice a week</option>
                            <option>Once a week</option>
                            </select>
                        </fieldset> 
                        <fieldset className="fieldset  rounded-box p-4">
                            <label className="label font-bold text-black">Last Watered Date</label>
                            <input type="date" name="next" className="input w-full border border-green-800" placeholder='Last Watered Date'/>
                        </fieldset> 
                        <fieldset className="fieldset  rounded-box p-4">
                            <label className="label font-bold text-black">Next Watering Date</label>
                            <input type="date" name="last" className="input w-full border border-green-800" placeholder='Next Watering Date'/>
                        </fieldset> 
                        <fieldset className="fieldset  rounded-box p-4">
                            <label className="label font-bold text-black">Health Status</label>
                            <input type="text" name='health' className="input w-full border border-green-800" placeholder="Write your Plant Health Status" />
                        </fieldset>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold text-black">User Email</label>
                                <input type="email" name='email'
                                // defaultValue={user?.email}
                                className="input w-full border border-green-800" placeholder="User Email" />
                            </fieldset> 
                            <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold text-black">User Name</label>
                                <input type="text" name='userName'
                                // value={user?.displayName}
                                className="input w-full border border-green-800" placeholder="User Name" />
                            </fieldset> 
                        </div>
                    </div>
                    <input type="submit" className='btn w-full bg-green-600 text-white mt-4' value="Add Plant" />
                </form>
            </div>
        </div>
    );
};

export default UpdatePlants;

