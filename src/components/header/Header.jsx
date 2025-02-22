import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareSharp } from "react-icons/io5";
import Button from "@mui/material/Button";
import "../header/header-styles.css";
import Navigation from "./navigation/Navigation";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { HiClipboardCheck } from "react-icons/hi";
import { FaHeart } from "react-icons/fa6";
import { RiLogoutBoxRFill } from "react-icons/ri";
import Tooltip from "@mui/material/Tooltip";
import { RiLoginBoxFill } from "react-icons/ri";
import { BiSolidContact } from "react-icons/bi";

import { MyContext } from "../../App";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const context = useContext(MyContext);

  const [anchorElMy, setAnchorElMy] =useState(null);
  const openMy = Boolean(anchorElMy);
  const handleClickMy = (event) => {
    setAnchorElMy(event.currentTarget);
  };
  const handleCloseMy = () => {
    setAnchorElMy(null);
  }


  const [anchorElLogin, setAnchorElLogin] = useState(null);
  const openLogin = Boolean(anchorElLogin);
  const handleClickLogin = (event) => {
    setAnchorElLogin(event.currentTarget);
  };
  const handleCloseLogin = () => {
    setAnchorElLogin(null);
  };

  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-[#e5e5e5]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[0.875rem] font-[500] transition text-[#666]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className="col2 flex item-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[0.875rem] link font-[500] transition text-[#666]"
                  >
                    Help Center
                  </Link>
                </li>
                <Divider orientation="vertical" variant="middle" flexItem />
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[0.875rem] link font-[500] transition text-[#666]"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-2 border-b-[1px] border-[#e5e5e5]">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[20%]">
            <Link to={"/"}>
              <img src="/img-logo/alawo_logo.webp" className="logo-size" />
            </Link>
          </div>
          <div className="col2 w-[35%]">
            <Search />
          </div>
          <div className="col3 w-[35%] flex items-center">
          <ul className="flex items-center gap-1 w-full">
              <li className="list-none">
                <Link to="/bulk-inquiry">
                  <Button
                    className="h-[40px] text-[#1976d2] !w-[140px]"
                    variant="outlined" 
                  >
                    BULK INQUIRY
                  </Button>
                </Link>
              </li>
            {
              context.isLogin === false ? 
              
              <div className="w-[40%] flex items-center gap-2">
                    <ul className="flex items-center justify-center gap-2 w-full">
                    <li className="list-none ">
                    <Button
                    className="overflow-hidden cursor-pointer !h-[40px] !w-[40px] !rounded-full relative"
                    onClick={handleClickLogin}
                  >
                      {/* <IconButton aria-label="cart">
                            <StyledBadge color="secondary">
                              
                            </StyledBadge>
                          </IconButton> */}
                    <FaRegUser className ="text-[25px] link" />
                    </Button>
                        <Menu
                        anchorEl={anchorElLogin}
                        id="accountLogin-menu"
                        open={openLogin}
                        onClose={handleCloseLogin}
                        onClick={handleCloseLogin}
                        slotProps={{
                          paper: {
                            elevation: 0,
                            sx: {
                              overflow: "visible",
                              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                              mt: 1.5,
                              "& .MuiAvatar-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              "&::before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                              },
                            },
                          },
                        }}
                        transformOrigin={{ horizontal: "right", vertical: "top" }}
                        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                      >

                    
                        <Link to="/login">
                          {/* <div className="btn-menu-bar group"> */}
                            <MenuItem
                              onClick={handleCloseLogin}
                              className="flex gap-2 !py-3">
                              {/* <RiLoginBoxFill className="!text-[20px] !text-[#1976d2]"/> <span className="text-[14px] font-[500]">Login</span> */}
                              <img
                                src="/img-user/login_user.png"
                                className="w-[20px] h-[20px]"
                              />{" "}
                              <span className="text-[15px] font-[500]">Login</span>
                            </MenuItem>
                          {/* </div> */}
                        </Link>
            
                        <Link to="/register">
                          <MenuItem
                            onClick={handleCloseLogin}
                            className="flex gap-2 !py-3">

                            {/* <BiSolidContact className="!text-[20px] !text-[#1976d2]" /> <span className="text-[14px] font-[500]">Register</span> */}
                            <img
                              src="/img-user/register_user.png"
                              className="w-[20px] h-[20px]"
                            />{" "}
                            <span className="text-[15px] font-[500]">Register</span>
                          </MenuItem>
                        </Link>
                      </Menu>
                    </li>
                    </ul>  
                    </div>    
                  :
 
              <>
                  <Button className="myAccountWrap w-full flex items-center justify-evenly gap-2 pr-1 cursor-pointer" onClick={handleClickMy}>
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full " >
                      <FaRegUser className="!text-[20px] link justify-start flex-wrap" />
                    </Button>

                    <div className="info flex flex-col">
                      <h4 className="text-[13px] mb-0 capitalize text-left justify-end font-[600] leading-4 flex-wrap">Jhon Carter</h4>
                      <span className="text-[12px] !text-[#000] capitalize text-left justify-start font-[400] flex-wrap">jhon.c@gmail.com</span>
                    </div>
                  </Button>
                
                  <Menu
                    anchorEl={anchorElMy}
                    id="myAccount-menu"
                    open={openMy}
                    onClose={handleCloseMy}
                    onClick={handleCloseMy}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: 'visible',
                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                          mt: 1.5,
                          '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <Link to='/my-account' className="w-full block">
                      <MenuItem onClick={handleCloseMy} className="flex gap-2 !py-2">
                        <FaUser className="!text-[18px] !text-[#555]" /><span className="text-[14px]">My Account</span>
                      </MenuItem>
                    </Link>
                    {/* <Divider /> */}

                    <Link to='/my-orders' className="w-full block">
                      <MenuItem onClick={handleCloseMy} className="flex gap-2 !py-2">
                      <HiClipboardCheck className="!text-[20px] !text-[#555]" /><span className="text-[14px]">Orders</span> 
                      </MenuItem>
                    </Link>


                    {/* <Divider /> */}

                    <Link to='/my-list' className="w-full block">
                      <MenuItem onClick={handleCloseMy} className="flex gap-2 !py-2">
                      <FaHeart className="!text-[16px] !text-[#555]" /><span className="text-[14px]">My List</span>
                      </MenuItem>
                    </Link>

                    {/* <Divider /> */}
                    <MenuItem onClick={handleCloseMy} className="flex gap-2 !py-2">
                    <RiLogoutBoxRFill className="!text-[20px] !text-[#555]" /><span className="text-[14px]">Logout</span>
                    </MenuItem>

                    {/* <Divider /> */}
                    
                  </Menu>
                </>
 
          }


              <Divider orientation="vertical" variant="middle" flexItem />
            <div className="flex w-full justify-around gap-2">
            <li className="list-none notification-icon">
                <IconButton aria-label="whislist">
                  <StyledBadge badgeContent={4} color="secondary">
                    <FaRegHeart className="text-[25px] link" />
                  </StyledBadge>
                </IconButton>
              </li>

              <li className="list-none notification-icon">
                <IconButton aria-label="compare">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IoGitCompareSharp className="text-[25px] link" />
                  </StyledBadge>
                </IconButton>
              </li>

              <li className="list-none notification-icon">
                <IconButton
                  aria-label="cart"
                  onClick={() => context.setOpenCartPanel(true)}
                >
                  <StyledBadge badgeContent={4} color="secondary">
                    <GrCart className="text-[25px] link" />
                  </StyledBadge>
                </IconButton>
              </li>
            </div>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header
