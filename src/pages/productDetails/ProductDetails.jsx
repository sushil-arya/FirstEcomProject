import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/productZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import QuantityBox from "../../components/quantityBox/QuantityBox";
import Divider from "@mui/material/Divider";
import { IoCartOutline } from "react-icons/io5";

import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareSharp } from "react-icons/io5";

import ProductTabSingle from "../../components/productTabSingle/ProductTabSingle";



const ProductDetails = () => {
  
  const [productActionIndex, setProductActionIndex] = useState(null);


  return (
    <>
      <div className="py-5">
        {/* Breadcrumbs */}
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transition"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transition"
            >
              product
            </Link>
            <Link
              underline="hover"
              color="inherit"
              className="link transition"
            >
              product detail page
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-8">
            <div className="productZoomContainer w-[50%]">
              <ProductZoom />
            </div>

            <div className="productContent w-[50%]">
              <h1 className="text-[22px] font-[600] mb-2">LEDO Watch Box and Sunglass Case Holder Organizer with 6 Slots for Watches and 3 Slots for Sunglasses in Black and Cherry color
                </h1> 
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 text-[13px]">Brand: <span className="font-[500] text-[#666]">Alawo Watch Box</span></span>

                  <Rating name="size-small" defaultValue={4} size="small" readOnly />

                  <span className="text-[13px] cursor-pointer">(5 reviews)</span>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <span className="oldPrice line-through text-gray-500 text-[20px] font-[600]]">$100.00</span>
                  
                  <span className="price text-[#1976d2] text-[22px] font-[700]">$80.00</span>

                  <span className="text-[13px]">In Stock: </span> <span className="text-green-600 text-[13px] font-[700]">147 items</span>
                </div>

                {/*small description of product */}
                <p className="mt-3 pr-10 mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio aliquam tempora dolores explicabo officiis rerum rem beatae dolore porro omnis non provident maiores, praesentium deleniti earum aperiam corrupti soluta debitis!</p>

                <Divider variant="middle"  className="!mb-5"/>


                {/* different box slots */}
                <div className="flex items-center gap-3">
                  <span className="text-[12px]">Box Slots: </span>
                  <div className="flex items-center gap-2 actions">
                  <Button className={`${productActionIndex === 0 ? '!bg-[#1976d2] !text-white' : ''}`}  onClick={() => setProductActionIndex(0)}>5 Slots</Button>
                  <Button className={`${productActionIndex === 1 ? '!bg-[#1976d2] !text-white' : ''}`}  onClick={() => setProductActionIndex(1)}>6 Slots</Button>
                  <Button className={`${productActionIndex === 2 ? '!bg-[#1976d2] !text-white' : ''}`} onClick={() => setProductActionIndex(2)}>8 Slots</Button>
                  <Button className={`${productActionIndex === 3 ? '!bg-[#1976d2] !text-white' : ''}`} onClick={() => setProductActionIndex(3)}>10 Slots</Button>
                  <Button className={`${productActionIndex === 4 ? '!bg-[#1976d2] !text-white' : ''}`} onClick={() => setProductActionIndex(4)}>12 Slots</Button>
                  <Button className={`${productActionIndex === 5 ? '!bg-[#1976d2] !text-white' : ''}`} onClick={() => setProductActionIndex(5)}>18 Slots</Button>
                  <Button className={`${productActionIndex === 6 ? '!bg-[#1976d2] !text-white' : ''}`} onClick={() => setProductActionIndex(6)}>48 Slots</Button>
                  </div>
                </div>

                {/* quantity component */}
                <p className="!text-[12px] !mt-4 text-[#666] mb-2">Free Shipping (Est. Delivery Time 2-3 Days)</p>
                <div className="flex items-center mt-4 gap-5">
                    <div className="qtyBoxWrapper w-[70px]">
                      {/* <span className="text-[13px]">Quantity:</span> */}
                      <QuantityBox />
                    </div>

                {/* Add to cart button */}
                    <Button variant="contained" className="flex gap-2 items-center h-[40px] "> <IoCartOutline  className="text-[20px] font-[800] " /> Add to Cart</Button>
                    {/* <FaRegHeart className="text-[25px] link" />
                    <IoGitCompareSharp className="text-[25px] link" /> */}
                    <Button variant="contained" className="!bg-cyan-600  h-[40px]"> Buy Now</Button>
                </div>

                {/* <OrderTrackingProgress2 currentStatus="shipped" /> */}



            </div>

            
        </div>

        <ProductTabSingle />

        
      </section>
    </>
  );
};

export default ProductDetails;
