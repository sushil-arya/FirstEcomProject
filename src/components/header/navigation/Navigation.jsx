import React from 'react'
import { Button } from '@mui/material'
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='py-2'>
      <div className="container flex item-center justify-end">
        <div className="col_1 w-[20%]">
          <Button className='!text-black gap-2 w-full'> <RiMenu2Fill className='text-[18px]' />&SHOP BY CATEGORIES <FaAngleDown className='text-[14px] ml-auto' /></Button> 
        </div>
        <div className="col_2 w-[80%]">
          <ul className="flex items-center">
            <li className="list-none">
              <Link className="link transition">Home</Link>
            </li>
          </ul>
        </div>
        {/* <div className="col_3"></div> */}

      </div>
      
    </nav>
  )
}

export default Navigation