import React, { useContext } from "react";
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
import { MyContext } from "../../App";

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

      <div className="header py-1 border-b-[1px] border-[#e5e5e5]">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[20%]">
            <Link to={"/"}>
              <img src="/img-logo/alawo_logo.webp"  className="logo-size" />
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
                    className="h-[40px] text-[#1976d2]"
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

                </Link>
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
                <IconButton aria-label="cart" onClick={()=>context.setOpenCartPanel(true)}>
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
