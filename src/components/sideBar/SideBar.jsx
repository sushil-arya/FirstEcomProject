import React,{useState} from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../sideBar/SideBar-styles.css';
import {Collapse} from 'react-collapse';
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


const SideBar = () => {

  const[isOpenAvailableFilter,setIsOpenAvailableFilter] = useState(true);

  const[isOpenCategoyFilter,setIsOpenCategoryFilter] = useState(true);

  const[isOpenBoxSlotsFilter,setIsOpenBoxSlotsFilter] = useState(true);



  return (
    <aside className='sidebar py-5'>

      {/* shop by avilability filter */}
      <div className="box pt-2">
        <h3 className='mb-3 text-[16px] font-[600] flex items-center pr-5'>Shop by Availability<Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#666]"  onClick={()=>setIsOpenAvailableFilter(!isOpenAvailableFilter)}>
        {
          isOpenAvailableFilter === true ? <FaAngleUp /> : <FaAngleDown />
        }

        </Button></h3>
        <Collapse isOpened={isOpenAvailableFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel control={<Checkbox size="small" />} label="Available (17)" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="In stock (17)" className="w-full" />
  
          </div>
        </Collapse>
      </div>

      <Divider variant="full" />

      {/* shop by categroy filter */}
      <div className="box pb-2">
        <h3 className='mb-3 text-[16px] font-[600] flex items-center pr-5'>Shop by Category <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#666]"  onClick={()=>setIsOpenCategoryFilter(!isOpenCategoyFilter)}>
        {
          isOpenCategoyFilter === true ? <FaAngleUp /> : <FaAngleDown />
        }

        </Button></h3>
        <Collapse isOpened={isOpenCategoyFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel control={<Checkbox size="small" />} label="Watch Boxes" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="Bangle Boxes" className="w-full"/>
            <FormControlLabel control={<Checkbox size="small" />} label="Wallets" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="Belts" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="Cheque Books" className="w-full"/>
            <FormControlLabel control={<Checkbox size="small" />} label="Watch & Sweat Belts" className="w-full"/>
            <FormControlLabel control={<Checkbox size="small" />} label="Watch & Sunglasses Box" className="w-full"/>
            <FormControlLabel control={<Checkbox size="small" />} label="Belts" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="Cheque Books" className="w-full"/>
            <FormControlLabel control={<Checkbox size="small" />} label="Watch & Sweat Belts" className="w-full"/>
            <FormControlLabel control={<Checkbox size="small" />} label="Watch & Sunglasses Box" className="w-full"/>
              
          </div>
        </Collapse>
      </div>
      
      <Divider variant="full" />

      {/* shop by box slots filter */}
      <div className="box pb-2">
        <h3 className='mb-3 text-[16px] font-[600] flex items-center pr-5'>Shop by Box Slots <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#666]"  onClick={()=>setIsOpenBoxSlotsFilter(!isOpenBoxSlotsFilter)}>
        {
          isOpenBoxSlotsFilter === true ? <FaAngleUp /> : <FaAngleDown />
        }

        </Button></h3>
        <Collapse isOpened={isOpenBoxSlotsFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel control={<Checkbox size="small" />} label="5 Slots Box" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="6 Slots Box" className="w-full"/>
            <FormControlLabel control={<Checkbox size="small" />} label="8 Slots Box" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="12 Slots Box" className="w-full" />
            <FormControlLabel control={<Checkbox size="small" />} label="48 Slots Box" className="w-full"/>
    
              
          </div>
        </Collapse>
      </div>
      
      <Divider variant="full" className="pt-2" />

      {/* shop by price filter */}
      <div className="box pb-2">
        
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Shop by Price
       </h3>
       <RangeSlider />
       <div className="flex pt-4 pb-2 priceRange">
        <span className='text-[13px]'>
          From: <strong className="text-[#666]">Rs: {100}</strong>
        </span>
        <span className='ml-auto text-[13px]'>
          From: <strong className="text-[#666]">Rs: {5000}</strong>
        </span>
       </div>
      </div>

      






    </aside>
  )
}

export default SideBar