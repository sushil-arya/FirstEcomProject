import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";


const CartItems = (props) => {

//boxes slots menu changer
const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
const [selectedSize, setSelectedSize] = useState(props.size);
const openSize = Boolean(sizeAnchorEl);

//qty menu changer
const [qtyAnchorEl, setQtyAnchorEl] = useState(null);
const [selectedQty, setSelectedQty] = useState(props.qty);
const openQty = Boolean(qtyAnchorEl);

//boxes slots changer event
const handleClickSize = (event) => {
  setSizeAnchorEl(event.currentTarget);
};
const handleCloseSize = (value) => {
  setSizeAnchorEl(null);
  if(value!=null){
    setSelectedSize(value);
  }
  
};


//qty changer event
const handleClickQty = (event) => {
  setQtyAnchorEl(event.currentTarget);
};
const handleCloseQty = (value) => {
  setQtyAnchorEl(null);
  if(value!=null){
    setSelectedQty(value);
  }
  
};

  return (
    <>
      <div className="cartItem w-full p-3 flex items-center gap-4 pt-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[15%] rounded-md overflow-hidden border border-[rgba(0,0,0,0.1)] shadow-md ">
                <Link to="/product/7896" className="group">
                  <img
                    src="/img-products/img-product-3.webp"
                    className="w-full group-hover:scale-105 transition-all"
                    alt="cart-product"
                  />
                </Link>
              </div>

              <div className="info w-[85%] relative">
                <IoCloseSharp className="cursor-pointer absolute top-[0px] right-[0px] text-[18px] link hover:scale-105"/>
                <span className="text-[13px] text-[#888] ">
                  Leather Watch Box
                </span>
                <h3 className="text-[14px] text-[#444] font-[600]">
                  <Link to="/" className="link">
                    ALAWO Faux Leather Watch Box Organizer Case For Unisex With
                    12 Slots For Watches
                  </Link>
                </h3>

                <Rating name="size-small" defaultValue={4} size="small" readOnly />

                <div className="flex items-center gap-4 mt-2">
                  
                <div className="relative">
                    {/* Box slots changer */}
                    <span className="flex items-center justify-center bg-[#f1f1f1] text-[#555] text-[11px] p-1 font-[600] px-2 py-1 rounded-md cursor-pointer gap-1 shadow-sm border border-[#e5e5e5]" onClick={handleClickSize}>
                    Boxes Slots: {selectedSize}<GoTriangleDown />
                  </span>

                  <Menu
                      id="size-menu"
                      anchorEl={sizeAnchorEl}
                      open={openSize}
                      onClose={()=>handleCloseSize(null)}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={()=>{handleCloseSize('5')}}>5 slot boxes</MenuItem>
                      <MenuItem onClick={()=>{handleCloseSize('6')}}>6 slot boxes</MenuItem>
                      <MenuItem onClick={()=>{handleCloseSize('8')}}>8 slot boxes</MenuItem>
                      <MenuItem onClick={()=>{handleCloseSize('10')}}>10 slot boxes</MenuItem>
                      <MenuItem onClick={()=>{handleCloseSize('12')}}>12 slot boxes</MenuItem>
                      <MenuItem onClick={()=>{handleCloseSize('18')}}>18 slot boxes</MenuItem>
                      <MenuItem onClick={()=>{handleCloseSize('48')}}>48 slot boxes</MenuItem>
                    </Menu>
                </div>

                <div className="relative">
                  {/* Quantity changer */}
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[#555] text-[11px] p-1 font-[600] px-2 py-1 rounded-md cursor-pointer gap-1 shadow-sm border border-[#e5e5e5]" onClick={handleClickQty}>
                    Quantity: {selectedQty} <GoTriangleDown />
                  </span>

                  
                  <Menu
                      id="qty-menu"
                      anchorEl={qtyAnchorEl}
                      open={openQty}
                      onClose={()=>handleCloseQty(null)}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={()=>{handleCloseQty(1)}}>1</MenuItem>
                      <MenuItem onClick={()=>{handleCloseQty(2)}}>2</MenuItem>
                      <MenuItem onClick={()=>{handleCloseQty(3)}}>3</MenuItem>
                      <MenuItem onClick={()=>{handleCloseQty(4)}}>4</MenuItem>
                      <MenuItem onClick={()=>{handleCloseQty(5)}}>5</MenuItem>
                      <MenuItem onClick={()=>{handleCloseQty(6)}}>6</MenuItem>
                      <MenuItem onClick={()=>{handleCloseQty(7)}}>7</MenuItem>
                      <MenuItem onClick={()=>{handleCloseQty(8)}}>8</MenuItem>
                      <MenuItem onClick={()=>{handleCloseQty(9)}}>9</MenuItem>
                      <MenuItem onClick={()=>{handleCloseQty(10)}}>10</MenuItem>


                    </Menu>
                </div>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <span className="price text-[#1976d2] text-[15px] font-bold ">
                    &#8377; 1999.00
                  </span>
                  <span className="oldPrice line-through text-gray-500 text-[14px]">
                    &#8377; 3500.00
                  </span>

                  <span className="price text-[#1976d2] text-[14px] font-bold ">
                    43% OFF
                  </span>
                </div>
              </div>
            </div>

    </>
  )
}

export default CartItems;