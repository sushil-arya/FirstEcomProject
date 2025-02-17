import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { MyContext } from '../../App';


const Login = () => {

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormsFields] = useState({
    email: '',
    password: ''
  });

  const context = useContext(MyContext);

  const history = useNavigate();

  const forgotPassword =()=>{
    if(formFields.email==""){
      history("/verify");
      context.openAlertBox("success", "OTP Send");
    }

  }

  return (
    <section className='section py-10'>
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className='text-center text-[18px] text-[#666]'>Login to your account</h3>
          <form className='w-full mt-5'>

            {/* email id field */}
            <div className="form-group w-full mb-5">
            <TextField type="email" id="email" label="Email Id *" variant="outlined"
            className='w-full'
            name = 'name'
          />
            </div>

            {/* password id field */}
            <div className="form-group w-full mb-5 relative">
            <TextField 
            type={isShowPassword === false ? 'password' : 'text'}
            id="password" label="Password *" variant="outlined"
            className='w-full'
            name = 'password'
            />
            <Button type="submit" className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#000]' onClick={()=>setIsShowPassword(!isShowPassword)}>


            {
              isShowPassword === false ?  <IoMdEye className="text-[20px] opacity-75"/> : <IoMdEyeOff className="text-[20px] opacity-75"/>

            }
            
            </Button>
            
            </div>

            <a className='link cursor-pointer text-[15px] font-[600]' onClick={forgotPassword}>Forgot Password?</a>

            <div className="flex items-center w-full mt-5 mb-3">
              <Button variant="contained" className="!capitalize w-full btn-lg">Login</Button>
            </div>

            <p className="!text-[15px] text-center text-[#666] font-[400]">Not Registered? <Link className="link text-[15px] pl-1 font-[600]" to="/register">Sign Up</Link></p>

            <p className="!text-[13px] mt-5 text-center text-[#666] font-[500]">Or continue with social account</p>


            <Button variant="outlined" className='flex gap-3 !mt-5 !capitalize w-full btn-lg !font-[500]'><FcGoogle className='!text-[20px]' />Login with Google</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login;