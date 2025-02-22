import Button from '@mui/material/Button';
import React from 'react'

import Divider from "@mui/material/Divider";
import { TextField } from '@mui/material';
import AccountSideBar from '../../components/accountSideBar/AccountSideBar';

const MyAccount = () => {
  return (
    <section className='py-10 w-full'>
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          {/* Account side bar component */}
          <AccountSideBar />
        </div>

        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2>My Profile</h2>
            <Divider className='!mt-5' /> 

            {/*user profile form fields */}
          <form className='mt-5'>
            <div className="flex items-center gap-5 ">

              <div className="w-[50%]">
              <TextField label="Full Name" variant="outlined" size="small"
              className='w-full'  
              />
              </div>    

              <div className="w-[50%]">
                <TextField label="Email" variant="outlined" size="small"
                className='w-full'  
                />
              </div>      
            </div>

            <div className="flex items-center  mt-4 gap-5">

              <div className="w-[50%]">
                <TextField label="Phone Number" variant="outlined" size="small"
                className='w-full'  
                />
              </div>  
              
            </div>

            <br />
            <div className="flex items-center gap-4">
              <Button className='btn-lg btn-blue !font-[500] !p-2  !capitalize w-[20%] shadow-md' variant="contained" color="primary" size="small">Save</Button>

              <Button className='btn-blue btn-lg btn-border !capitalize w-[20%] shadow-md !p-2 !font-[500]' size="small">Cancel</Button>
            </div>
          </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default MyAccount