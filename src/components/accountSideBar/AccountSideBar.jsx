import React from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { HiClipboardCheck } from "react-icons/hi";
import { FaHeart } from "react-icons/fa6";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

const AccountSideBar = () => {
  return (
    <div className="card bg-white shadow-md rounded-md  sticky top-[10px]">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
          <img
            src="/img-user/user-account-2.jpeg"
            alt="user-profile-image"
            className="w-full h-full object-cover"
          />

          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
            <IoMdCloudUpload className="text-[#fff] text-[25px]" />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0"
            />
          </div>
        </div>

        <h3>Jhon Carter</h3>
        <h6 className="text-[13px] font-[500]">jhon.c@gmail.com</h6>
      </div>

      <ul className="list-none pb-5 bg-[#f3f3f3] myAccountTabs">
        <li className="w-full">
          <NavLink to="/my-account" exact="true" activeClassName="isActive">
            <Button className="w-full !text-left !py-3 !px-5 !justify-start !capitalize !text-[#555] !rounded-none flex items-center gap-2">
              <FaUser className="text-[18px]" />
              My Profile
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/my-list" exact="true" activeClassName="isActive">
            <Button className="w-full !text-left !py-3 !px-5 !justify-start !capitalize !text-[#555] !rounded-none flex items-center gap-2">
              <FaHeart className="text-[16px]" />
              My List
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/my-orders" exact="true" activeClassName="isActive">
            <Button className="w-full !text-left !py-3 !px-5 !justify-start !capitalize !text-[#555] !rounded-none flex items-center gap-2">
              <HiClipboardCheck className="text-[20px]" />
              My Orders
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/logout" exact="true" activeClassName="isActive">
            <Button className="w-full !text-left !py-3 !px-5 !justify-start !capitalize !text-[#555] !rounded-none flex items-center gap-2">
              <RiLogoutBoxRFill className="text-[20px]" />
              Logout
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AccountSideBar;
