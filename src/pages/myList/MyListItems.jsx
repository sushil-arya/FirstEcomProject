import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

import Rating from "@mui/material/Rating";
import Button from '@mui/material/Button';


const MyListItems = (props) => {


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


                <div className="flex items-center gap-3 mt-2 mb-2">
                  <span className="price text-[#1976d2] text-[15px] font-bold">
                    &#8377; 1999.00
                  </span>
                  <span className="oldPrice line-through text-gray-500 text-[14px]">
                    &#8377; 3500.00
                  </span>

                  <span className="price text-[#1976d2] text-[14px] font-bold ">
                    43% OFF
                  </span>
                </div>


                <Button className='btn-blue !capitalize !py-1.5'>Add to Cart</Button>
              </div>
      
      </div>

    </>
  )
}

export default MyListItems;