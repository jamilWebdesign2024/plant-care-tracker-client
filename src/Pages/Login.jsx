import { use, useState } from 'react';
import image from '../../src/assets/slider-3.jpg'
import { AuthContext } from '../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {

  const [error, setError]=useState("");
  const [showPassword, setShowPassword]=useState(false)

  const {signIn} = use(AuthContext)
  const location =useLocation();
  const navigate =useNavigate();


  const handleLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password=form.password.value;

    signIn(email, password)
    .then((result)=>{
      const user =result.user;
      if(user){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your PlantCare Profile has created",
            showConfirmButton: false,
            timer: 1500
         });
      }
      navigate(`${location.state? location.state : "/"}`)
    })
    .catch((error)=>{
      const errorCode = error.code;
      setError(errorCode)
    })
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
            <div className='p-0 m-0'>
              <h1 className="text-3xl font-bold text-center">Login Your Plant Care Account</h1>
              <p className='text-center'><small>One account for all PlantCare products</small></p>
            </div>
            <form onSubmit={handleLogin}> 
              <label className="label text-white">Email</label>
              <input
                type="email"
                name='email'
                className="w-full px-4 py-3 mb-2 text-gray-600 bg-green-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral"
                placeholder="Enter your email"
              />
              <label className="label">Password</label>
                    <div className='relative'>
                            <input 
                            type={showPassword ? 'text' : 'password'} 
                            name='password' 
                            className="input w-full px-4 py-3 mb-2 text-gray-600 bg-green-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-neutral" 
                            required
                            placeholder="password" />
                            <button 
                            onClick={()=>{setShowPassword(!showPassword)}}
                            className='btn btn-xs absolute top-3 right-4'>{
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />
                            }</button>
                    </div>
              <div className="">
                <a className="link link-hover text-sm text-white">Forgot password?</a>
                </div>
                 {error && <p className='text-red-400 text-xs'>{error}</p>}
              <button className="btn font-bold bg-green-400 hover:bg-green-500 mt-4 w-full border-none text-black">
                Login
              </button>
              <p className='pt-5 font-semibold text-center'>Don't have an account ? <Link to="/register" className='text-blue-600 underline'>Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
     

     
  );
};

export default Login;


