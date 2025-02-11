import React from 'react';
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";

const QuantityBox = () => {
  return (
    <div className='qtyBox flex items-center relative'>
      <input type="number" className='w-full h-[40px] p-2 pl-5 text-[15px] focus:outline-none border border-[#e5e5e5] rounded-md ' defaultValue={1} />

      <div className="flex items center flex-col justify-between h-[40px] absolute top-0 right-0 z-50">
        <Button className="!min-w-[30px] !w-[30px] !h-[20px]"><FaAngleUp/></Button>
        <Button className="!min-w-[30px] !w-[30px] !h-[20px]"><FaAngleDown/></Button>
      </div>
    </div>
  )
}

export default QuantityBox