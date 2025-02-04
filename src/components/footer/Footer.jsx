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
         <div className="w-full flex items-center flex-col justify-center pb-4">
            <img src="/img-logo/alawo_logo.webp" alt="" />
            <Divider className="pt-2 w-70" />
          </div>
          {/* <h2 className="text-[18px] font-[600] ">Contact us</h2> <br /> */}
          <p className="text-[13px] font-[400] pb-4 flex items-center gap-5 "><PiBuildingOfficeFill className="text-[20px] font-[400] text-gray-700"/>
            ALAWO - Best Of Best Super Store 507-Union <br /> Trade New Delhi -
            India (110011)
          </p>

          <Link
            className="flex items-center gap-5 link text-[15px] font-[400]"
            to="mailto:example@alawo.com"
          >
            <RiMailSendLine className="text-[18px] font-[400]" />
            sales@alawo.com
          </Link>

          <span className="flex items-center gap-5 text-[14px] font-[400] mt-3 mb-5 text-[#1976d2] ">
            <FiPhoneCall  className="text-[18px] font-[400] text-[#1976d2]"/>(+91) 8810-632-912{" "}
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
            <form className="mt-5 pb-2">
              <input
                type="email"
                className="w-full h-[45px] border outline-gray-500 pl-4 pr-4 rounded-sm mb-4 focus:border-b-gray-200"
                placeholder="Enter your email"
              />
            <Button className="h-[45px]"  variant="outlined"  >Subscribe</Button>
            </form>
            <h2 className="text-[18px] font-[600] text-center mt-1">Get in touch</h2>
            <Divider className="pt-2 pb-2" />
            <div className="socialGroup flex items-center mt-3">
        
              <ul className="flex flex-row gap-5 items-center" >
                <li><Link to="/" className="text-[22px] hover:text-[#3b5998] " ><FaFacebook className="transition-all ease-in-out hover:-translate-y-1 " /></Link></li>
                <li><Link to="/" className="text-[26px] hover:text-[#1DA1F2] " ><AiFillTwitterCircle className="transition-all ease-in-out hover:-translate-y-1 " /></Link></li>
                <li><Link to="/" className="text-[21px] hover:text-[#c32aa3] " ><GrInstagram className="transition-all ease-in-out hover:-translate-y-1 " /></Link></li>
                <li><Link to="/" className="text-[25px] hover:text-[#FF0000] " ><IoLogoYoutube className="transition-all ease-in-out hover:-translate-y-1 " /></Link></li>
                <li><Link to="/" className="text-[25px] hover:text-[#25d366] " ><IoLogoWhatsapp className="transition-all ease-in-out hover:-translate-y-1 " /></Link></li>
                <li><Link to="/" className="text-[22px] hover:text-[#0a66c2] " ><BsLinkedin className="transition-all ease-in-out hover:-translate-y-1 " /></Link></li>
                <li><Link to="/" className="text-[24px] hover:text-[#bd081c] " ><BsPinterest className="transition-all ease-in-out hover:-translate-y-1 " /></Link></li>
                <li><Link to="/" className="text-[26px] hover:text-[#ff9900] " ><AiFillAmazonCircle className="transition-all ease-in-out hover:-translate-y-1 " /></Link></li>
                <li><Link to="/" className="text-[25px] hover:text-[#db4437] " ><FaGooglePlus className="transition-all ease-in-out hover:-translate-y-1 " /></Link></li>
                <li><Link to="/" className="text-[25px] hover:text-[#0088cc] " ><FaTelegram className="transition-all ease-in-out hover:-translate-y-1 " /></Link></li>
                <li><Link to="/" className="text-[25px] hover:text-[#00aff0] " ><IoLogoSkype className="transition-all ease-in-out hover:-translate-y-1 " /></Link></li>
                
              </ul>
            </div>
          </div>
      </div>
    </footer>

          {/* footer bottom */}
          <div className="footerBottom flex justify-between items-center p-8 text-[13px] font-[400] text-[rgba(0,0,0,0.8)]">
            <p>Copyright &copy; 2025 ALAWO. All rights reserved.</p>
            <Link to="/" className="link">Terms & Conditions</Link>

            <div className="flex items-center gap-5">
              <img src="/img-payment/visa.png" alt="visa-img" />
              <img src="/img-payment/master_card.png" alt="master-img" />
              <img src="/img-payment/american_express.png" alt="master-img" />
              <img src="/img-payment/paypal.png" alt="master-img" />
              
            </div>
            {/* <Link to="/" className="link">Privacy Policy</Link> */}
          </div>
    </>

  );
};



export default Footer;
