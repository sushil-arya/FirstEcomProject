import React, { useState } from "react";
import SideBar from "../../components/sideBar/SideBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/productItem/ProductItem";
import ProductItemListView from "../../components/productItemListView/ProductItemListView";
import Button from "@mui/material/Button";
import { IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from '@mui/material/Pagination';

const ProductListing = () => {

  const [itemView, setItemView] = useState("grid");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    
    <section className="py-5 pb-0">
      {/* Breadcrumbs */}
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Sunglass boxes
          </Link>
        </Breadcrumbs>
      </div>

      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3">
          {/* side bar - filter bar */}
          <div className="sidebarWrapper w-[20%] h-full bg-white  sticky top-[5px]">
            <SideBar />
          </div>

          {/* product listing */}
          <div className="rightContent w-[80%] py-3">
            <div className="bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between">
              {/* grid view and short by option */}
              <div className="col1 flex items-center itemViewActions">
                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full ${itemView === "list" && 'active'} `} onClick={()=>setItemView('list')}>
                  <FaThList className="text-[#666] " />
                </Button>

                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full ${itemView === "grid" && 'active'} `} onClick={()=>setItemView('grid')}>
                  <IoGridSharp className="text-[#666] " />
                </Button>

                <span className="text-[14px] font-[500] pl-3 text-[#666]">
                  There are 27 products
                </span>
              </div>

              {/* sorting options */}
              {/* <div className="col2 flex items-center gap-2">
                <span className='text-[14px] font-[500]'>Sort by:</span>
                <select className='w-[200px]'>
                  <option value="">Newest</option>
                  <option value="">Oldest</option>
                  <option value="">Price: Low to High</option>
                  <option value="">Price: High to Low</option>
                </select>
              </div> */}

              <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                <span className="text-[14px] font-[500] pl-3 text-[#666]">
                  Sort By
                </span>

                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!bg-white !text-[12px] !text-[#666] !capitalize !border !border-[#e5e5e5]"
                >
                Sales, highest to lowest
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose} className="!text-[13px]">Sales, highest to lowest</MenuItem>
                  <MenuItem onClick={handleClose} className="!text-[13px]">Product, A to Z</MenuItem>
                  <MenuItem onClick={handleClose} className="!text-[13px]">Product, Z to A</MenuItem>
                  <MenuItem onClick={handleClose} className="!text-[13px]">Price, low to high</MenuItem>
                  <MenuItem onClick={handleClose} className="!text-[13px]">Price, high to low</MenuItem>
                </Menu>
              </div>
            </div>

            {/* product items */}
            <div className={`grid ${itemView === 'grid' ? 'grid-cols-4 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-1'} gap-4`}>
              {
                itemView === "grid" ?
                <>
                
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                
                </>
                  :
                  <>
                  
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  </>
                  
              }

            </div>

            <div className="flex items-center justify-center mt-10">
              <Pagination count={10} showFirstButton showLastButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
