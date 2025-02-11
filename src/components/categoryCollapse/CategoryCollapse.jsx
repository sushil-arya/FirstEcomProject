import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
import Button from "@mui/material/Button";



const CategoryCollapse = () => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);

  const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);

    // toggle sub menu
    const openSubMenu = (index) => {
      if (subMenuIndex === index) {
        setSubMenuIndex(null);
      } else {
        setSubMenuIndex(index);
      }
    };
  
    

    //toggle inner sub menu
    const openInnerSubMenu = (index) => {
      if (innerSubMenuIndex === index) {
        setInnerSubMenuIndex(null);
      } else {
        setInnerSubMenuIndex(index);
        
      }
    };
  
  return (
    <>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !px-3 !text-[#666]">
                Watch Boxes
              </Button>
            </Link>

            {/* condition base plus and minus icons */}

            {subMenuIndex === 0 ? (
              //minus icon
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] text-[16px] text-[#666] cursor-pointer"
                onClick={() => openSubMenu(0)}
              />
            ) : (
              //plus icon
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] text-[16px] text-[#666] cursor-pointer"
                onClick={() => openSubMenu(0)}
              />
            )}

            {subMenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/">
                    <Button className="w-full !justify-start !px-3 !text-[#666]">
                      Watch Boxes Slots
                    </Button>
                  </Link>

                  {/* condition base plus and minus icons */}

                  {innerSubMenuIndex === 0 ? (
                    //minus icon
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] text-[16px] text-[#666] cursor-pointer"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  ) : (
                    //plus icon
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] text-[16px] text-[#666] cursor-pointer"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  )}

                  {innerSubMenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          5 Slots Boxes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          6 Slots Boxes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          8 Slots Boxes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          10 Slots Boxes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          12 Slots Boxes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          48 Slots Boxes
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !px-3 !text-[#666]">
                Watch Boxes
              </Button>
            </Link>

            {/* condition base plus and minus icons */}

            {subMenuIndex === 1 ? (
              //minus icon
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] text-[16px] text-[#666] cursor-pointer"
                onClick={() => openSubMenu(1)}
              />
            ) : (
              //plus icon
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] text-[16px] text-[#666] cursor-pointer"
                onClick={() => openSubMenu(1)}
              />
            )}

            {subMenuIndex === 1 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/">
                    <Button className="w-full !justify-start !px-3 !text-[#666]">
                      Watch Boxes Slots
                    </Button>
                  </Link>

                  {/* condition base plus and minus icons */}

                  {innerSubMenuIndex === 1 ? (
                    //minus icon
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] text-[16px] text-[#666] cursor-pointer"
                      onClick={() => openInnerSubMenu(1)}
                    />
                  ) : (
                    //plus icon
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] text-[16px] text-[#666] cursor-pointer"
                      onClick={() => openInnerSubMenu(1)}
                    />
                  )}

                  {innerSubMenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          5 Slots Boxes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          6 Slots Boxes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          8 Slots Boxes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          10 Slots Boxes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          12 Slots Boxes
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !justify-start !px-3 transition text-[14px]"
                        >
                          48 Slots Boxes
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

        </ul>
      </div>
    </>
  )
}

export default CategoryCollapse;