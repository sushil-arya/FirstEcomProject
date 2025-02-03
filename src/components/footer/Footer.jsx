import React from "react";

import { TbTruckDelivery } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import { LiaWalletSolid } from "react-icons/lia";
import { TfiGift } from "react-icons/tfi";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-scroll";
import { PiChats } from "react-icons/pi";
// import Divider from "@mui/material/Divider";



import Button from "@mui/material/Button";


import { FiPhoneCall } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";

const Footer = () => {

  
  return (


    <footer className="container-fluid py-8 bg-[#fafafafa] border-1 border-[rgba(0,0,0,0.23)] ">
      <div className="border-b-1 border-b-[rgba(0,0,0,0.23)]   ">
        <div className="flex items-center justify-center gap-2 mt-4 pb-8">
          {/* free shipping icon */}
          <div className="col flex items-center ustify-center flex-col group w-[15%]">
            <TbTruckDelivery className="text-[45px] transition-all duration-300 group-hover:text-[#1976d2] group-hover:-translate-y-1 text-[rgba(0,0,0,0.8)]" />
            <h3 className="text-[16px] font-[600] mt-2 text-[rgba(0,0,0,0.8)]">
              Free Shipping
            </h3>
            <p className="text-[12px] font-[500] text-[rgba(0,0,0,0.8)]">
              For all Orders Over $100
            </p>
          </div>

          {/* retruns icon */}
          <div className="col flex items-center ustify-center flex-col group w-[15%]">
            <TbTruckReturn className="text-[45px] transition-all duration-300 group-hover:text-[#1976d2] group-hover:-translate-y-1 text-[rgba(0,0,0,0.8)]" />
            <h3 className="text-[16px] font-[600] mt-2 text-[rgba(0,0,0,0.8)]">
              30 Days Returns
            </h3>
            <p className="text-[12px] font-[500] text-[rgba(0,0,0,0.8)]">
              For and Exchange Product
            </p>
          </div>

          {/* Secured Payment icon */}
          <div className="col flex items-center ustify-center flex-col group w-[15%]">
            <LiaWalletSolid className="text-[45px] transition-all duration-300 group-hover:text-[#1976d2] group-hover:-translate-y-1 text-[rgba(0,0,0,0.8)]" />
            <h3 className="text-[16px] font-[600] mt-2 text-[rgba(0,0,0,0.8)]">
              Secured Payment
            </h3>
            <p className="text-[12px] font-[500] text-[rgba(0,0,0,0.8)]">
              Payment Cards Accepted
            </p>
          </div>

          {/* Special Gifts icon */}
          <div className="col flex items-center ustify-center flex-col group w-[15%]">
            <TfiGift className="text-[45px] transition-all duration-300 group-hover:text-[#1976d2] group-hover:-translate-y-1 text-[rgba(0,0,0,0.8)]" />
            <h3 className="text-[16px] font-[600] mt-2 text-[rgba(0,0,0,0.8)]">
              Special Gifts
            </h3>
            <p className="text-[12px] font-[500] text-[rgba(0,0,0,0.8)]">
              Our First Product Order
            </p>
          </div>

          {/* Support 24/7 icon */}
          <div className="col flex items-center ustify-center flex-col group w-[15%]">
            <MdSupportAgent className="text-[45px] transition-all duration-300 group-hover:text-[#1976d2] group-hover:-translate-y-1 text-[rgba(0,0,0,0.8)]" />
            <h3 className="text-[16px] font-[600] mt-2 text-[rgba(0,0,0,0.8)]">
              Support 24/7
            </h3>
            <p className="text-[12px] font-[500] text-[rgba(0,0,0,0.8)]">
              Contact us Anytime
            </p>
          </div>
        </div>
      </div>

      <div className="footer flex p-8">
        {/* Part1 Contact Us */}
        <div className="contactUs w-[25%] border-r border-r-[rgba(0,0,0,0.23)]">
        {/*  <div className="w-30 pb-3">
            <img src="/img-logo/alawo_logo.webp" alt="" />
            <Divider className="pt-2 w-70" />
          </div> */}
          <h2 className="text-[18px] font-[600] ">Contact us</h2> <br />
          <p className="text-[13px] font-[400] pb-4 ">
            ALAWO - Best Of Best Super Store 507-Union <br /> Trade New Delhi -
            India (110011)
          </p>

          <Link
            className="flex items-center gap-5 link text-[15px] font-[400]"
            to="mailto:example@alawo.com"
          >
            <RiMailSendLine />
            sales@alawo.com
          </Link>

          <span className="flex items-center gap-3 text-[14px] font-[400] mt-3 mb-5 text-[#1976d2] ">
            <FiPhoneCall  className="text-[15px] font-[400] text-[#1976d2]"/>(+91) 8810-632-912{" "}
          </span>

          <div className="flex items-center gap-2">
            <PiChats className="text-[40px] text-[#1976d2]" />
            <span className="text-[14px] font-[600]">
              Online Chat <br /> Get Expert Help
            </span>
          </div>
          
        </div>

        {/* Part2 Products */}
        <div className="product_part w-[40%] flex pl-8">
          <div className="part2_col1 w-[50%] ">
          <h2 className="text-[18px] font-[600] ">Products us</h2> <br />
          <ul className="list">
            <li className="list-none">
              <Link to="/" className="link text-[13px] w-full mb-3">Prices drop</Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link text-[13px] w-full mb-3">New Products</Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link text-[13px] w-full mb-3">Best Sales</Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link text-[13px] w-full mb-3">Contact Us</Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link text-[13px] w-full mb-3">Site Map</Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link text-[13px] w-full mb-3">Stores</Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link text-[13px] w-full mb-3">Prices drop</Link>
            </li>
                  
                  
          </ul>
          
          </div>
          
       
        
          {/* Part2 */}
          <div className="part2_col2 w-[50%]">
          <h2 className="text-[18px] font-[600] ">Our Company</h2> <br />
          <ul className="list">
            <li className="list-none">
              <Link to="/" className="link text-[13px] w-full mb-3">Delivery</Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link text-[13px] w-full mb-3">Privacy Policy</Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link text-[13px] w-full mb-3">FAQ'S</Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link text-[13px] w-full mb-3">Terms & conditions</Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link text-[13px] w-full mb-3">About Us</Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link text-[13px] w-full mb-3">Sercure payment</Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link text-[13px] w-full mb-3">Login</Link>
            </li>
                  
                  
          </ul>

          
          </div>
          


        </div>

                  {/* newsletter part */}

          <div className="newsPart w-[35%] flex pl-8 flex-col pr-8">
            <h2 className="text-[18px] font-[600] mb-4">Subscribe to newsletter</h2>
            <p className="text-[13px]">Subscribe to out latest newsletter to get new about special discounts.</p>
            <form className="mt-5">
              <input
                type="email"
                className="w-full h-[45px] border outline-gray-500 pl-4 pr-4 rounded-sm mb-4 focus:border-b-gray-200"
                placeholder="Enter your email"
              />
            <Button className="h-[45px]" variant="outlined"  >Subscribe</Button>
            </form>
            <p>*term and conditions</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
