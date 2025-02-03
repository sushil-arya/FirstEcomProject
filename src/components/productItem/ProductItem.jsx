import React from "react";
import "../productItem/productItem-styles.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareSharp } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { GrView } from "react-icons/gr";

const ProductItem = () => {
  return (
    <div className="productItem shadow-md overflow-hidden rounded-md border-1 border-[rgba(0,0,0,0.1)]">
      <div className="imgWrapper group w-[100%] h-full overflow-hidden rounded-md relative">
        <Link to="/">
          <div className="img">
            {/* image front */}
            {/* <img
              src="/img-popular-products/product1.webp"
              alt="product1"
              className="w-full"
            /> */}
            <img
              src="/img-popular-products/product6.webp"
              alt="product1"
              className="w-full"
            />

            {/* image back */}
            {/* <img
              src="/img-popular-products/product2.webp"
              alt="product1"
              className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-105 group-hover:scale-105"
            /> */}


              <img
              src="/img-popular-products/product7.webp"
              alt="product1"
              className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-105 group-hover:scale-105"
            />

          </div>
        </Link>

            {/* <div className="sale badge absolute top-[10px] left-[60px] z-50 bg-yellow text-white rounded-lg p-2 text-[12px] font-[500]">Sale</div> */}

      {/* discount badge */}
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
          10%
        </span>

        {/* product hover buttons */}
        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all group-hover:top-[5px] duration-700">
          <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[rgba(255,255,255)] text-black group border-1 border-[rgba(0,0,0,0.9)] shadow-md">
            {" "}
            <MdZoomOutMap className="text-[20px] group-hover:text-[#1976d2] " />{" "}
          </Button>

          <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[rgba(255,255,255)] text-black group border-1 border-[rgba(0,0,0,0.9)] shadow-md">
            {" "}
            <FaRegHeart className="text-[20px] group-hover:text-[#1976d2] " />{" "}
          </Button>

          <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[rgba(255,255,255)] text-black group border-1 border-[rgba(0,0,0,0.9)] shadow-md">
            {" "}
            <IoGitCompareSharp className="text-[20px] group-hover:text-[#1976d2] " />{" "}
          </Button>

          <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[rgba(255,255,255)] text-black group border-1 border-[rgba(0,0,0,0.9)] shadow-md">
            {" "}
            <GrView className="text-[20px] group-hover:text-[#1976d2] " />{" "}
          </Button>

        </div>


      </div>

      {/* product details brand name - product name - rating & price */}

      <div className="info p-3 py-5">
        <h6 class="text-[13px]">
          <Link to="/" className="link">
            Black Faux Leather Watch
          </Link>
        </h6>
        <h3 class="text-[13px] title mt-1 mb-1 font-[500] text-[rgba(0,0,0,0.9)]">
          <Link to="/" className="link">
            ALAWO Faux Leather Watch Box Organizer Case For Unisex With 12 Slots
            For Watches In And Cherry Color
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-3">
          <span className="oldPrice line-through text-gray-500">$80.00</span>
          <span className="price text-[#1976d2] text-[18px] font-bold ">
            $60.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
