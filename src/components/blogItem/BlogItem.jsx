import React from 'react'
import { GiBackwardTime } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const BlogItem = () => {
  return (
    <div className="blogItem group w-full rounded-md border-1 border-[rgba(0,0,0,0.23)]">

      <div className="imgWrapper overflow-hidden rounded-md cursor-pointer relative border-b-1 border-[rgba(0,0,0,0.23)]">
        
        <img src="https://zoodmall.com/cdn-cgi/image/500,fit=contain,f=auto/https://images2.zoodmall.com/https%3A/img.joomcdn.net/9e7306591704fbe75c2e73e035e06fd715bc4fce_original.jpeg" alt="Blog Image"  className="w-full transition-all group-hover:scale-105" />

        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1">
        <GiBackwardTime className="text-[16px]" /> 5 MARCH, 2023
        </span>

      </div>

      <div className="info py-4 p-3 ">
        <h2 className="text-[13px font-[500] text-[rgba(0,0,0,0.8)]">
          <Link to="/" className="link">Slim Coin Purse Money Pocket </Link>

        </h2>
        <p className="text-[12px] font-[400] text-[rgba(0,0,0,0.8)] mb-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing el Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <Link to="/" className="link font-[500] text-[14px] flex items-center gap-1">Read More <IoIosArrowForward /></Link>
      </div>

    </div>
  )
}

export default BlogItem