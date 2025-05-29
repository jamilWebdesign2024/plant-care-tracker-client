import React, { use, useEffect } from 'react';
import image from '../../src/assets/slider-2.jpg'
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';


const Register = () => {


  

  const {createUser, googleSignIn, updateUser, setUser} = use(AuthContext);
    console.log(createUser);
     const location =useLocation();
        const navigate =useNavigate();

      
  

  const handleSignUp = (e) =>{
      e.preventDefault();
      const form = e.target;
      // const photo = form.photo.value;

      const formData = new FormData(form);
      
      const {email, password, photo, ...restFormData} = Object.fromEntries(formData.entries())

     createUser(email, password)
      .then(result =>{
        const user = result.user;

        updateUser({displayName: name, photoURL: photo})
          .then(()=>{
              setUser({...user, displayName: name, photoURL: photo});
              navigate(`${location.state? location.state : "/auth/login"}`)
          })
          .catch((error)=>{
            setUser(user);
            console.log(error);
            
          })

        const userProfile = {
          email,
          ...restFormData,
          creationTime : result?.user?.metadata?.creationTime,
          lastSignInTime : result?.user?.metadata?.lastSignInTime
        }

        // save profile info in the db
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(userProfile)
        })
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your PlantCare Account has created",
              showConfirmButton: false,
              timer: 1500
            });
          }
          navigate(`${location.state? location.state : "/"}`)
        })
      })
        .catch(error =>{
        console.log(error);
      })
    }
    const handleGoogleLogin = ()=>{
      googleSignIn()
      .then(result=>{
        const user = result.user;
        if(user){
          Swal.fire({
            position: "top-end",
             icon: "success",
              title: "Your PlantCare Account has created",
              showConfirmButton: false,
              timer: 1500
          });
        }
        navigate(`${location.state? location.state : "/"}`)
      })
      .catch(error=>{
          console.log(error);
          
      })
      .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            console.log(errorCode);
            
            
        });
    }




  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clear Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Login Form - Glass Effect */}
      <div className="relative z-10 w-full max-w-sm mx-auto">
        <div className="card backdrop-blur-md bg-white/10 shadow-2xl border  border-white/10">
          <div className="card-body text-white">

            <h1 className="text-3xl font-bold text-center mb-4">Create a PlanCare Account</h1>

            <form onSubmit={handleSignUp}>

              <div className='space-y-3 mb-5'>
                  <input
                    type="text"
                    name='name'
                    className="w-full px-4 py-3 text-gray-600 bg-green-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral"
                    placeholder="Enter your name"
                  />

                  <input
                    type="text"
                    name='photo'
                    className="w-full px-4 py-3 text-gray-600 bg-green-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral"
                    placeholder="Enter your Photo Url"
                  />

                  <input
                    type="email"
                    name='email'
                    className="w-full px-4 py-3 text-gray-600 bg-green-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral"
                    placeholder="Enter your email"
                  />

                  <input
                    type="password"
                    name="password"
                    className="w-full px-4 py-3 text-gray-600 bg-green-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral"
                    placeholder="Enter your password"
                  />
              </div>

              <div className='text-center flex flex-col items-center justify-center gap-4'>
                <button className="btn font-bold bg-green-400 hover:bg-green-500 mt-4 w-full border-none text-black">
                  Register your Account
                </button>
                <span>or</span>
                <button onClick={handleGoogleLogin} className="btn font-bold bg-white hover:bg-green-500 mt-4 w-full border-none text-black">
                  Sign in With Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;