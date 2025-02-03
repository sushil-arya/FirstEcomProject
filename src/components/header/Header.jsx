import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import "../header/header-styles.css";
import Navigation from "./navigation/Navigation";
import { FaRegUser } from "react-icons/fa";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-strip py-3 border-t-[1px] border-b-[1px] border-[#1976d2]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[0.75rem] font-[500]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className="col2 flex item-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[0.8125rem] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <Divider orientation="vertical" variant="middle" flexItem />
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[0.8125rem] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-b-[1px] border-[#1976d2]">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[20%]">
            <Link to={"/"}>
              <img src="/img-logo/alawo_logo.webp" className="logo-size" />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[35%] flex items-center pl-7">
            <ul className="flex items-center justify-end gap-4 w-full">
              <li className="list-none">
                <Link to="/bulk-inquiry">
                  <Button
                    className="h-[50px] text-[#1976d2]"
                    variant="outlined"
                  >
                    BULK INQUIRY
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/login">
                  <IconButton aria-label="cart">
                    <StyledBadge color="secondary">
                      <FaRegUser className="text-[25px] link" />
                    </StyledBadge>
                  </IconButton>

                  {/* <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button> */}

                  {/* <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
        <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login</Link>
      </li>
      <li>
        <Link to="/register" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Register</Link>
      </li>
      
    </ul>
</div> */}
                </Link>
                {/* <Link
                  to="/login"
                  className="link transition text-[12px] font-[500]"
                >
                  Login
                </Link>{" "}
                &nbsp; | &nbsp;{" "}
                <Link
                  to="/register"
                  className="link transition text-[12px] font-[500]"
                >
                  Register
                </Link> */}
              </li>
              <Divider orientation="vertical" variant="middle" flexItem />
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
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <GrCart className="text-[25px] link" />
                  </StyledBadge>
                </IconButton>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
