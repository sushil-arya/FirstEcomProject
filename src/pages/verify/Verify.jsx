import React, { useState } from 'react';
import OtpBox from '../../components/otpBox/OtpBox';
import Button from '@mui/material/Button';

const Verify = () => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const verifyOTP=(e)=>{
    e.preventDefault();
    alert(otp);
  }

  return (
    <section className='section py-10'>
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <div className="text-center flex items-center justify-center">
            <img src="/img-payment/verify-3.png" width='80' alt="" />
          </div>
          <h3 className='text-center text-[18px] text-[#666] mt-4 mb-3'>Verify OTP</h3>

        <p className='text-center text-[15px] mt-0 mb-4'>OTP sent to <span className='text-[#1976d2] font-bold '>mickjhon@gmail.com</span></p>
    
      <form onSubmit={verifyOTP}>
          <OtpBox length={6} onChange={handleOtpChange} />

          <div className="flex items-center justify-center mt-5 px-3">
            <Button type="submit" variant="contained" className="!capitalize w-full btn-lg">Verify OTP</Button>
          </div>
      </form>
        </div>
      </div>
    </section>
  )
}

export default Verify;