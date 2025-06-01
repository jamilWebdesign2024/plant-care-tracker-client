import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const AddPlant = () => {

    const {user}=use(AuthContext)

    const handleAddPlant =(e)=>{
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newPlant = Object.fromEntries(formData.entries());
        console.log(newPlant);
        

        // send data to the server
        fetch('http://localhost:3000/plants', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newPlant)
        })
            .then(res=>res.json())
            .then(data =>{
                if(data.insertedId){
                    console.log('added successfully');
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Add Plant Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                    });
                }
                
            })
        }

        

    return (
        <div className='lg:p-24 p-4 max-w-7xl mx-auto '>
           <div className='p-12 text-center space-y-4 bg-green-50'>
                <h1 className='text-6xl'>Add Plant</h1>
            <p>A plant description typically includes details about a plant's appearance, growth habits, and ecological characteristics. This could include its size, shape, leaf and flower characteristics, and whether it is an annual, biennial, or perennial. It may also cover information about its preferred growing conditions, such as light, soil, and water requirements. </p>

                <form onSubmit={handleAddPlant}>
                    <div className=''>
                        <fieldset className="fieldset rounded-box p-4">
                            <label className="label font-bold text-black">Image</label>
                            <input type="text" name='image' className="input w-full border border-green-800" placeholder="Photo Url" />
                        </fieldset> 
                        <fieldset className="fieldset  rounded-box p-4">
                            <label className="label font-bold text-black">Plant Name</label>
                            <input type="text" name='name' className="input w-full border border-green-800" placeholder="Plant Name" />
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
                           <textarea name='description' className="textarea border border-green-800 h-24 w-full" placeholder="Write your plant Description"></textarea>
                        </fieldset> 
                        <fieldset className="fieldset  rounded-box p-4">
                            <select name='careLevel' defaultValue="Select Care Level" className="select w-full border border-green-800">
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
                                defaultValue={user?.email}
                                className="input w-full border border-green-800" placeholder="User Email" />
                            </fieldset> 
                            <fieldset className="fieldset  rounded-box p-4">
                                <label className="label font-bold text-black">User Name</label>
                                <input type="text" name='userName'
                                value={user?.displayName}
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

export default AddPlant;











// import React, { useState } from 'react';

// const AddPlant = () => {
//   const [formData, setFormData] = useState({
//     image: '',
//     plantName: '',
//     category: '',
//     description: '',
//     careLevel: '',
//     wateringFrequency: '',
//     lastWatered: '',
//     nextWatering: '',
//     healthStatus: '',
//     userEmail: '',
//     userName: '',
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can post data to your backend here
//     setSubmitted(true);
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md border">
//       <h1 className="text-3xl font-bold text-center mb-6 text-green-600">Add a New Plant</h1>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <input name="image" onChange={handleChange} value={formData.image} placeholder="Image URL" className="border p-2 rounded" />
//         <input name="plantName" onChange={handleChange} value={formData.plantName} placeholder="Plant Name" className="border p-2 rounded" />

//         <select name="category" onChange={handleChange} value={formData.category} className="border p-2 rounded">
//           <option value="">Select Category</option>
//           <option value="Succulent">Succulent</option>
//           <option value="Fern">Fern</option>
//           <option value="Flowering">Flowering</option>
//         </select>

//         <select name="careLevel" onChange={handleChange} value={formData.careLevel} className="border p-2 rounded">
//           <option value="">Select Care Level</option>
//           <option value="Easy">Easy</option>
//           <option value="Moderate">Moderate</option>
//           <option value="Difficult">Difficult</option>
//         </select>

//         <input name="wateringFrequency" onChange={handleChange} value={formData.wateringFrequency} placeholder="Watering Frequency" className="border p-2 rounded" />

//         <input type="date" name="lastWatered" onChange={handleChange} value={formData.lastWatered} className="border p-2 rounded" />

//         <input type="date" name="nextWatering" onChange={handleChange} value={formData.nextWatering} className="border p-2 rounded" />

//         <input name="healthStatus" onChange={handleChange} value={formData.healthStatus} placeholder="Health Status" className="border p-2 rounded" />

//         <input name="userName" onChange={handleChange} value={formData.userName} placeholder="User Name" className="border p-2 rounded" />
//         <input name="userEmail" onChange={handleChange} value={formData.userEmail} placeholder="User Email" className="border p-2 rounded" />

//         <textarea name="description" onChange={handleChange} value={formData.description} placeholder="Description" className="border p-2 rounded col-span-full" rows="3" />

//         <button type="submit" className="col-span-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">Submit Plant</button>
//       </form>

//       {/* Preview */}
//       {submitted && (
//         <div className="mt-8 p-5 border rounded-lg shadow-lg bg-gray-50">
//           <h2 className="text-xl font-bold mb-4 text-green-700">Preview:</h2>
//           <img src={formData.image} alt="plant" className="w-full max-h-60 object-cover rounded mb-4" />
//           <p><strong>Plant Name:</strong> {formData.plantName}</p>
//           <p><strong>Category:</strong> {formData.category}</p>
//           <p><strong>Care Level:</strong> {formData.careLevel}</p>
//           <p><strong>Watering Frequency:</strong> {formData.wateringFrequency}</p>
//           <p><strong>Last Watered:</strong> {formData.lastWatered}</p>
//           <p><strong>Next Watering:</strong> {formData.nextWatering}</p>
//           <p><strong>Health Status:</strong> {formData.healthStatus}</p>
//           <p><strong>Added By:</strong> {formData.userName} ({formData.userEmail})</p>
//           <p><strong>Description:</strong> {formData.description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddPlant;