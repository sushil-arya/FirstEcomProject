import React from 'react'
import '../search/search-styles.css'

import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2'>
      <input type="text" placeholder='Search for prodcuts...' className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]' />
      {/* <button className='absolute right-0 top-0 h-[50px] w-[90px] bg-[#4871b8] text-white rounded-[5px] text-[15px]'>Search</button> */}

      <Button  className='!absolute right-[5px] top-[5px] !w-[40px] !min-w-[40px] h-[40px] z-50 !rounded-full !text-[#05132c]'><IoSearch className='!text-[#0e2751] text-[30px]'/></Button>
      


    
    </div>
  )
}

export default Search