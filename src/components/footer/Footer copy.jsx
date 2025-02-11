import React from "react";

import { TbTruckDelivery } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import { LiaWalletSolid } from "react-icons/lia";
import { TfiGift } from "react-icons/tfi";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-scroll";
import { PiChats } from "react-icons/pi";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { FiPhoneCall } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

import { BsPinterest } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillAmazonCircle } from "react-icons/ai";
import { FaGooglePlus } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io5";

import { PiBuildingOfficeFill } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid py-4 md:py-8 bg-[#fafafafa] border-1 border-[rgba(0,0,0,0.23)]">
        {/* Services section */}
        <div className="border-b-1 border-b-[rgba(0,0,0,0.23)]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 pb-8 px-4">
            {/* Each service item */}
            <div className="flex items-center justify-center flex-col group text-center">
              <TbTruckDelivery className="text-[35px] md:text-[45px] transition-all duration-300 group-hover:text-[#1976d2] group-hover:-translate-y-1 text-[rgba(0,0,0,0.8)]" />
              <h3 className="text-[14px] md:text-[16px] font-[600] mt-2 text-[rgba(0,0,0,0.8)]">
                Free Shipping
              </h3>
              <p className="text-[11px] md:text-[12px] font-[500] text-[rgba(0,0,0,0.8)]">
                For all Orders Over $100
              </p>
            </div>
            {/* ... repeat for other service items ... */}
          </div>
        </div>

        {/* Main footer content */}
        <div className="footer flex flex-col lg:flex-row gap-8 p-4 md:p-8">
          {/* Contact section */}
          <div className="w-full lg:w-[25%] border-b lg:border-b-0 lg:border-r border-[rgba(0,0,0,0.23)] pb-6 lg:pb-0">
            <div className="w-full flex items-center flex-col justify-center pb-4">
              <img
                src="/img-logo/alawo_logo.webp"
                alt=""
                className="w-32 md:w-auto"
              />
              <Divider className="pt-2 w-70" />
            </div>
            <p className="text-[12px] md:text-[13px] font-[400] pb-4 flex items-center gap-3 md:gap-5">
              {/* ... existing content ... */}
            </p>
            {/* ... rest of contact content ... */}
          </div>

          {/* Products & Company section */}
          <div className="w-full lg:w-[40%] grid grid-cols-3 gap-6 px-0 lg:px-8">
            {/* Products column */}
            <div>
              <h2 className="text-[16px] md:text-[18px] font-[600] mb-4">
                Products
              </h2>
              <ul className="space-y-3">
                <li className="list-none">
                  <Link
                    to="/"
                    className="text-[12px] md:text-[13px] hover:text-[#1976d2] transition-colors"
                  >
                    Prices drop
                  </Link>
               </li>
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h2 className="text-[16px] md:text-[18px] font-[600] mb-4">
                Products
              </h2>
              <ul className="space-y-3">
                <li className="list-none">
                  <Link
                    to="/"
                    className="text-[12px] md:text-[13px] hover:text-[#1976d2] transition-colors"
                  >
                    Prices drop
                  </Link>
                </li>
                                
              </ul>
            </div>

          </div>

          {/* Newsletter section */}
          <div className="w-full lg:w-[35%] px-0 lg:px-8">
            <h2 className="text-[16px] md:text-[18px] font-[600] mb-4">
              Subscribe to newsletter
            </h2>
            <p className="text-[12px] md:text-[13px]">
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>

            <form className="mt-5 pb-2 space-y-4">
              <input
                type="email"
                className="w-full h-[45px] border outline-gray-500 px-4 rounded-sm"
                placeholder="Enter your email"
              />
              <Button className="w-full md:w-auto h-[45px]" variant="outlined">
                Subscribe
              </Button>
            </form>

            {/* Social icons */}
            <h2 className="text-[16px] md:text-[18px] font-[600] text-center mt-6">
              Get in touch
            </h2>
            <Divider className="my-4" />
            <div className="socialGroup">
              <ul className="flex flex-row flex-wrap gap-3 md:gap-4 items-center justify-center">
                <li>
                  <Link
                    to="/"
                    className="text-[20px] md:text-[22px] hover:text-[#3b5998]"
                  >
                    <FaFacebook className="transition-all ease-in-out hover:-translate-y-1 "/>
                  </Link>
                </li>
                


              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 md:p-8 text-[12px] md:text-[13px] text-[rgba(0,0,0,0.8)]">
        <p className="text-center md:text-left">
          Copyright &copy; 2025 ALAWO. All rights reserved.
        </p>
        <Link to="/" className="hover:text-[#1976d2] transition-colors">
          Terms & Conditions
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
          <img
            src="/img-payment/visa.png"
            alt="visa-img"
            className="h-6 md:h-8"
          />
          {/* ... other payment images ... */}
        </div>
      </div>
    </>
  );
};

export default Footer;
