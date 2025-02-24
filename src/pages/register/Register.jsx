import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";


const Register = () => {

            useEffect(() => {
              AOS.init({
                duration: 700,
                offset: 100,
                easing: "ease-out-cubic",
              });
            }, []);
        

  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <section className='section py-10'  data-aos="zoom-out">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className='text-center text-[18px] text-[#666]'>Sign Up with a new account</h3>
          <form className='w-full mt-5' data-aos="fade-up">


            {/* email id field */}
            <div className="form-group w-full mb-5">
            <TextField type="text" id="name" label="Full Name *" variant="outlined"
            className='w-full' />
            </div>

            {/* email id field */}
            <div className="form-group w-full mb-5">
            <TextField type="email" id="email" label="Email Id *" variant="outlined"
            className='w-full' />
            </div>

            {/* password id field */}
            <div className="form-group w-full mb-5 relative">
            <TextField 
            type={isShowPassword===false ? 'password' : 'text'}
            id="password" label="Password *" variant="outlined"
            className='w-full' />
            <Button  className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#000]' onClick={()=>setIsShowPassword(!isShowPassword)}>


            {
              isShowPassword === false ?  <IoMdEyeOff className="text-[20px] opacity-75"/> : <IoMdEye className="text-[20px] opacity-75"/>

            }
            
            </Button>
            
            </div>

            <div className="flex items-center w-full mt-5 mb-3">
              <Button variant="contained" className="!capitalize w-full btn-lg">Registered</Button>
            </div>

            <p className="!text-[15px] text-center text-[#666] font-[400]">Already have an account? <Link className="link text-[15px] pl-1 font-[600]" to="/login">Login</Link></p>

            <p className="!text-[13px] mt-5 text-center text-[#666] font-[500]">Or continue with social account</p>


            <Button variant="outlined" className='flex gap-3 !mt-5 !capitalize w-full btn-lg !font-[500]'><FcGoogle className='!text-[20px]' />Login with Google</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register;