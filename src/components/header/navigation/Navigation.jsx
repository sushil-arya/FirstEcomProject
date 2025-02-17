import React,{useState} from "react";
import { Button } from "@mui/material";
import { RiMenu2Fill } from "react-icons/ri";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { LiaAngleDownSolid } from "react-icons/lia";
import { BiSolidDiscount } from "react-icons/bi";
import CategoryPanel from "./CategoryPanel";
import '../navigation/navigation-styles.css';


const Navigation = () => {

  const[isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel=()=>{
    setIsOpenCatPanel(true);
  }

  return (
    <>
      <nav className="py-2">
      <div className="container flex item-center justify-end gap-5">
        <div className="col_1 w-[20%]">
          <Button className="!text-black gap-2 w-full" onClick={openCategoryPanel}>
            {" "}
            <RiMenu2Fill className="text-[18px]" />
            SHOP BY CATEGORIES{" "}
            <LiaAngleDownSolid className="text-[14px] ml-auto font-[600]" />
          </Button>
        </div>
        <Divider orientation="vertical" flexItem />
        <div className="col_2 w-[70%]">
          <ul className="flex items-center gap-2 nav">
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[600]">
              <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#1976d2] link">Home</Button>
              </Link>
            </li>
            <li className="list-none relative">
              <Link to="/productlist" className="link transition text-[14px] font-[600]">
              <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#1976d2] link">Watch Boxes</Button>
              </Link>

              <div className='submenu absolute top-[120%] left-[0%] min-w-[250px] bg-white shadow-md mt-3 z-100 opacity-0 transition-all'>
                <ul>
                  <li className="list-none w-full">
                    <Link to='/' className='w-full'>
                    <Button className='!justify-start !rounded-none w-full inline-block'>5 Slots Box</Button>
                    </Link>
                  </li>
                  <li className="list-none w-full">
                    <Link to='/' className='w-full'>
                    <Button className='!justify-start !rounded-none w-full inline-block'>6 Slots Box</Button>
                    </Link>
                  </li>
                  <li className="list-none w-full">
                    <Link to='/' className='w-full'>
                    <Button className=' !justify-start !rounded-none w-full inline-block'>8 Slots Box</Button>
                    </Link>
                  </li>
                  <li className="list-none w-full">
                    <Link to='/' className='w-full'>
                    <Button className='!justify-start !rounded-none w-full inline-block'>10 Slots Box</Button>
                    </Link>
                  </li>
                  <li className="list-none w-full">
                    <Link to='/' className='w-full'>
                    <Button className=' !justify-start !rounded-none w-full inline-block'>12 Slots Box</Button>
                    </Link>
                  </li>
                  <li className="list-none w-full">
                    <Link to='/' className='w-full'>
                    <Button className=' !justify-start !rounded-none w-full inline-block'>48 Slots Box</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="list-none relative">
              <Link to="/product/8526" className="link transition text-[14px] font-[600]">
              <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#1976d2] link">Bangle boxes</Button>

              </Link>

              <div className='submenu absolute top-[120%] left-[0%] min-w-[250px] bg-white shadow-md mt-3 z-100 opacity-0 transition-all'>
                <ul>
                  <li className="list-none w-full relative">
                    <Link to='/' className='w-full'>
                    <Button className=' !justify-start !rounded-none w-full inline-block'>5 Slots Box</Button>
                      <div className='inner-submenu absolute top-[0%] left-[100%] min-w-[250px] bg-white shadow-md mt-3 z-100 opacity-0 transition-all'>
                        <ul>
                          <li className="list-none w-full">
                            <Link to='/' className='w-full'>
                            <Button className=' !justify-start !rounded-none w-full inline-block'>5 Slots Box</Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to='/' className='w-full'>
                            <Button className=' !justify-start !rounded-none w-full inline-block'>6 Slots Box</Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to='/' className='w-full'>
                            <Button className=' !justify-start !rounded-none w-full inline-block'>8 Slots Box</Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to='/' className='w-full'>
                            <Button className=' !justify-start !rounded-none w-full inline-block'>10 Slots Box</Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to='/' className='w-full'>
                            <Button className='!justify-start !rounded-none w-full inline-block'>12 Slots Box</Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to='/' className='w-full'>
                            <Button className='!justify-start !rounded-none w-full inline-block'>48 Slots Box</Button>
                            </Link>
                          </li>
                        </ul>

                      </div>
                    </Link>
                  </li>
                  <li className="list-none w-full">
                    <Link to='/' className='w-full'>
                    <Button className=' !justify-start !rounded-none w-full inline-block'>6 Slots Box</Button>
                    </Link>
                  </li>
                  <li className="list-none w-full">
                    <Link to='/' className='w-full'>
                    <Button className=' !justify-start !rounded-none w-full inline-block'>8 Slots Box</Button>
                    </Link>
                  </li>
                  <li className="list-none w-full">
                    <Link to='/' className='w-full'>
                    <Button className='!justify-start !rounded-none w-full inline-block'>10 Slots Box</Button>
                    </Link>
                  </li>
                  <li className="list-none w-full">
                    <Link to='/' className='w-full'>
                    <Button className=' !justify-start !rounded-none w-full inline-block'>12 Slots Box</Button>
                    </Link>
                  </li>
                  <li className="list-none w-full">
                    <Link to='/' className='w-full'>
                    <Button className='!justify-start !rounded-none w-full inline-block'>48 Slots Box</Button>
                    </Link>
                  </li>
                </ul>

              </div>

            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[600]">
              <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#1976d2] link">Wallets</Button>
              
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[600]">
              <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#1976d2] link">Belts</Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[600]">
                
                <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#1976d2] link">Cheque Books</Button>
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[600]">
              <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#1976d2] link">Watch & Sunglasses Box</Button>
                
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[600]">
              <Button className="!text-[rgba(0,0,0,0.8)] hover:!text-[#1976d2] link">Watch & Sweat Belts</Button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col_3 w-[10%]">
          <Link to="/offers">
            <p className="text-[14px] font-[600] flex items-center gap-2 mb-0 mt-1 py-1 link animate-bounce">
              <BiSolidDiscount className="text-orange-800 text-[20px] font-[600] link transition" />
              Discount Offers
            </p>
          </Link>
        </div>
      </div>
    </nav>

    {/* category panel component */}
    <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>
    </>
  );
};

export default Navigation;
