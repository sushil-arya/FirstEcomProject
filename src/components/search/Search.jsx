import React from 'react'
import '../search/search-styles.css'

import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[40px] bg-[#fff] border border-[#e5e5e5] rounded-[5px] relative p-1 group'>
      <input type="text" className='w-full focus:outline-0 bg-inherit p-1 text-[14px]' placeholder='Search for prodcuts...' />
      {/* <button className='absolute right-0 top-0 h-[50px] w-[90px] bg-[#4871b8] text-white rounded-[5px] text-[15px]'>Search</button> */}

      <Button  className='!absolute right-[10px] top-[2px] !w-[38px] !min-w-[38px] h-[38px] z-50 !rounded-full !text-[#05132c]'><IoSearch className='!text-[#0e2751] text-[30px]'/></Button>
   
    </div>
  )
}

export default Search