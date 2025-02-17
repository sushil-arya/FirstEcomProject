import React, { useEffect, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/productZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";

import ProductTabSingle from "../../components/productTabSingle/ProductTabSingle";
import ProductTabs2 from "../../components/productTabs/ProductTabs2";
import Tooltip from "@mui/material/Tooltip";

import ProductTabs from "../../components/productTabs/ProductTabs";
import { motion, AnimatePresence } from "framer-motion";
import TextField from '@mui/material/TextField';

import AOS from "aos";
import "aos/dist/aos.css";


const ProductDetails = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);



  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="py-5">
        {/* Breadcrumbs */}
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transition"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transition"
            >
              product
            </Link>
            <Link underline="hover" color="inherit" className="link transition">
              product detail page
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-8 pb-10 py-5">

          {/* product zoom component here */}
          <div className="productZoomContainer w-[50%]">
            <ProductZoom />
          </div>

          {/* product detail component here */}
          <div className="productContent w-[50%] pl-8 pr-5">
            <ProductDetailsComponent />
          </div>
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5 justify-center">
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 0 && "!text-[#1976d2]"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 1 && "!text-[#1976d2]"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Customer Reviews
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 2 && "!text-[#1976d2]"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Shipping & Returns
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 3 && "!text-[#1976d2]"
              }`}
              onClick={() => setActiveTab(3)}
            >
              Return Policies
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 4 && "!text-[#1976d2]"
              }`}
              onClick={() => setActiveTab(4)}
            >
              Warranty
            </span>
          </div>

              {/*tab-1 Description tab */}
              {activeTab === 0 && (
                //Description starts here

                <div className="py-5 rounded-md shadow-sm w-full px-8 space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg" data-aos="zoom-in">
                    <h3 className="text-lg font-medium mb-4">
                      Product Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Crafted from premium materials, this versatile piece combines
                      comfort with style. The regular fit ensures a comfortable wear
                      throughout the day, while the ribbed neckline adds a classic
                      touch. Perfect for casual outings or layering, this essential
                      piece is designed to last.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg" data-aos="zoom-in">
                    <h3 className="text-lg font-medium mb-4">Product Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">MATERIALS & CARE</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                          <li>Shell: 100% Premium Cotton</li>
                          <li>Lining: 65% Polyester, 35% Cotton</li>
                          <li>Machine wash at 30°C</li>
                          <li>Do not bleach</li>
                          <li>Iron at medium temperature</li>
                          <li>Dry clean allowed</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">FEATURES</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                          <li>Regular fit</li>
                          <li>Crew neck</li>
                          <li>Short sleeves</li>
                          <li>Ribbed neckline</li>
                          <li>Side slits</li>
                          <li>Premium quality fabric</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4" data-aos="zoom-in">
                      Box Slots
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        "5 Slots",
                        "6 Slots",
                        "8 Slots",
                        "10 Slots",
                        "12 Slots",
                        "16 Slots",
                        "18 Slots",
                        "48 Slots",
                      ].map((size) => (
                        <div
                          key={size}
                          className="border rounded-lg p-4 text-center"
                          data-aos="zoom-in"
                        >
                          <div className="font-medium">{size}</div>
                          <div className="text-sm text-gray-500">Available</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg" data-aos="zoom-in">
                    <h3 className="text-lg font-medium mb-4">
                      Product Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Crafted from premium materials, this versatile piece combines
                      comfort with style. The regular fit ensures a comfortable wear
                      throughout the day, while the ribbed neckline adds a classic
                      touch. Perfect for casual outings or layering, this essential
                      piece is designed to last.
                    </p>
                  </div>
                </div>
              )}

              {/*tab-2 Customer Review tab */}
              {activeTab === 1 && (
                //Customer Reviews starts here

                <div className="py-5 rounded-md shadow-sm w-full px-8 space-y-6">
                  <div className="flex items-center justify-between"  data-aos="zoom-in">
                    <div>
                      <h3 className="text-lg font-medium">Customer Reviews</h3>
                      <div className="flex items-center mt-2">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="w-5 h-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-gray-600">4.8 out of 5</span>
                      </div>
                    </div>
                    {/* <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                      Write a Review
                    </button> */}
                  </div>

                  {/* Review Filters */}
                  <div className="flex gap-2 items-center pb-2 flex-wrap"  data-aos="zoom-in">
                    {[
                      "All Reviews",
                      "5 Stars",
                      "4 Stars",
                      "3 Stars",
                      "2 Stars",
                      "1 Star",
                    ].map((filter) => (
                      <button
                        key={filter}
                        className="flex items-center justify-center px-4 py-2 rounded-full border hover:border-black transition-colors overflow-hidden "
                      >
                        {filter}
                      </button>
                    ))}
                  </div>

                {/*
                  <div className="w-full productReviewsContainer bg-gray-50 p-2 rounded-md" data-aos="fade-up">
                    <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5">
                      <div className="review pb-5 w-full flex items-center justify-between border-b ">
                          <div className="info w-full flex items-center gap-3 ">
                            <div className="img w-[80px] h-[80px] overflow-hidden rounded-full border border-[#e5e5e5] shadow-sm">
                              <img src="https://mrpromoters.in/wp-content/uploads/2017/06/ramesh.jpg" alt="user-avatar" className="w-full" />
                            </div>

                            <div className="w-[90%]">
                              <h4 className="!text-[16px] !font-[500]" >Mohit Agarwal</h4>
            
                              <h5 className="!text-[13px]">2025-02-12</h5>
                              <Rating name="size-small" defaultValue={4} size="small" readOnly />

                          
                              <p className="!text-[13px] !mt-0 !mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis culpa, tempore at tempora eius molestias consequatur obcaecati quidem numquam et nihil, quas consequuntur fugit hic dolore fugiat laborum similique?
                              Reprehenderit quae excepturi quod! Tenetur maxime, omnis vitae sed laboriosam nostrum odit dolorem neque fuga voluptates tempore </p>
                              
                            </div>

                            
                          </div>
                      </div>
                    </div> 

                    <div className="review pb-2 w-full flex items-center justify-between shadow-md">
                      <div className="info w-full flex items-center gap-3 ">
                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full border border-[#e5e5e5] shadow-md">
                          <img
                            src="https://mrpromoters.in/wp-content/uploads/2017/06/ramesh.jpg"
                            alt="user-avatar"
                            className="w-full"
                          />
                        </div>

                        <div className="w-[90%]">
                          <h4 className="!text-[16px] !font-[500]">
                            Mohit Agarwal
                          </h4>

                          <h5 className="!text-[13px] pb-1">2025-02-12</h5>
                          <Rating
                            name="size-small"
                            defaultValue={4}
                            size="small"
                            readOnly
                          />

                          <p className="!text-[13px] !mt-0 !mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates perferendis culpa, tempore at tempora eius
                            molestias consequatur obcaecati quidem numquam et nihil,
                            quas consequuntur fugit hic dolore fugiat laborum
                            similique? Reprehenderit quae excepturi quod! Tenetur
                            maxime, omnis vitae sed laboriosam nostrum odit dolorem
                            neque fuga voluptates tempore{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  */}

                  <div className="w-full productReviewsContainer bg-gray-50 p-2 rounded-lg shadow-sm" data-aos="fade-up">
                    <div className="review pb-2 w-full flex items-center justify-between">
                      <div className="info w-full flex items-center gap-3 ">
                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full border border-[#e5e5e5] shadow-md">
                          <img
                            src="https://mrpromoters.in/wp-content/uploads/2017/06/ramesh.jpg"
                            alt="user-avatar"
                            className="w-full"
                          />
                        </div>

                        <div className="w-[90%]">
                          <h4 className="!text-[16px] !font-[500]">
                            Mohit Agarwal
                          </h4>

                          <h5 className="!text-[13px]  pb-1">2025-02-12</h5>
                          <Rating
                            name="size-small"
                            defaultValue={4}
                            size="small"
                            readOnly
                          />

                          <p className="!text-[13px] !mt-0 !mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates perferendis culpa, tempore at tempora eius
                            molestias consequatur obcaecati quidem numquam et nihil,
                            quas consequuntur fugit hic dolore fugiat laborum
                            similique? Reprehenderit quae excepturi quod! Tenetur
                            maxime, omnis vitae sed laboriosam nostrum odit dolorem
                            neque fuga voluptates tempore{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full productReviewsContainer bg-gray-50 p-2 rounded-lg shadow-sm" data-aos="fade-up">
                    <div className="review pb-2 w-full flex items-center justify-between">
                      <div className="info w-full flex items-center gap-3 ">
                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full border border-[#e5e5e5] shadow-md">
                          <img
                            src="https://mrpromoters.in/wp-content/uploads/2017/06/ramesh.jpg"
                            alt="user-avatar"
                            className="w-full"
                          />
                        </div>

                        <div className="w-[90%]">
                          <h4 className="!text-[16px] !font-[500]">
                            Mohit Agarwal
                          </h4>

                          <h5 className="!text-[13px]  pb-1">2025-02-12</h5>
                          <Rating
                            name="size-small"
                            defaultValue={4}
                            size="small"
                            readOnly
                          />

                          <p className="!text-[13px] !mt-0 !mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates perferendis culpa, tempore at tempora eius
                            molestias consequatur obcaecati quidem numquam et nihil,
                            quas consequuntur fugit hic dolore fugiat laborum
                            similique? Reprehenderit quae excepturi quod! Tenetur
                            maxime, omnis vitae sed laboriosam nostrum odit dolorem
                            neque fuga voluptates tempore{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full productReviewsContainer bg-gray-50 p-2 rounded-lg shadow-sm" data-aos="fade-up">
                    <div className="review pb-2 w-full flex items-center justify-between">
                      <div className="info w-full flex items-center gap-3 ">
                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full border border-[#e5e5e5] shadow-md">
                          <img
                            src="https://mrpromoters.in/wp-content/uploads/2017/06/ramesh.jpg"
                            alt="user-avatar"
                            className="w-full"
                          />
                        </div>

                        <div className="w-[90%]">
                          <h4 className="!text-[16px] !font-[500]">
                            Mohit Agarwal
                          </h4>

                          <h5 className="!text-[13px]  pb-1">2025-02-12</h5>
                          <Rating
                            name="size-small"
                            defaultValue={4}
                            size="small"
                            readOnly
                          />

                          <p className="!text-[13px] !mt-0 !mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates perferendis culpa, tempore at tempora eius
                            molestias consequatur obcaecati quidem numquam et nihil,
                            quas consequuntur fugit hic dolore fugiat laborum
                            similique? Reprehenderit quae excepturi quod! Tenetur
                            maxime, omnis vitae sed laboriosam nostrum odit dolorem
                            neque fuga voluptates tempore{" "}
                          </p>
                        </div>
                      </div>
                    </div>
      
                  </div>

                  <br />

                  <div className="reviewForm bg-[#fafafa] p-4 rounded-lg shadow-sm" data-aos="fade-up"
                      data-aos-anchor-placement="center-center">
                    <h2 className="text-[18px]">Add a review</h2>
                    <form  className="w-full mt-5">
                      <TextField
                        id="outlined-multiline-static"
                        label="Write a review"
                        className="w-full mb-5"
                        multiline
                        rows={4}
                        
                      />
                    <div className="mt-5">  
                        <Rating name="size-small" defaultValue={4} />  
                      </div>
                        

                        <div className="flex items-center mt-5">
                          <Button className="link" variant="outlined">Submit Review</Button>
                        </div>
                    </form>
                  </div>

                


                  {/* Review List */}
                  {/* <div className="space-y-6">
                    {[1, 2, 3].map((review) => (
                      <motion.div
                        key={review}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border-b pb-6"
                      >
                        <div className="flex justify-between mb-2">
                          <div>
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                  key={star}
                                  className="w-4 h-4 text-yellow-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <h4 className="font-medium mt-1">
                              Great quality and fit!
                            </h4>
                          </div>
                          <span className="text-sm text-gray-500">2 days ago</span>
                        </div>
                        <p className="text-gray-600">
                          The quality of this product exceeded my expectations. The
                          fit is perfect and the material feels premium. Would
                          definitely recommend!
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                          <button className="text-sm text-gray-500 hover:text-black">
                            Helpful (12)
                          </button>
                          <button className="text-sm text-gray-500 hover:text-black">
                            Report
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div> */}
                </div>
              )}

              {/*tab-3 Shipping & Returns tab */}
              {activeTab === 2 && (
                //Shipping & Returns starts here

                <div className="py-5 rounded-md shadow-sm w-full px-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6" data-aos="zoom-in">
                    <div className="bg-gray-50 p-6 rounded-lg" data-aos="zoom-in">
                      <h3 className="text-lg font-medium mb-4">
                        Shipping Information
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Standard Shipping</h4>
                          <p className="text-gray-600">
                            3-5 business days
                            <span className="block text-sm">
                              Free for orders over $50
                            </span>
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Express Shipping</h4>
                          <p className="text-gray-600">
                            1-2 business days
                            <span className="block text-sm">$15.00</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg" data-aos="zoom-in">
                      <h3 className="text-lg font-medium mb-4">Returns</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Return Window</h4>
                          <p className="text-gray-600">
                            30 days from delivery
                            <span className="block text-sm">Free returns</span>
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Return Process</h4>
                          <p className="text-gray-600">
                            Initiate return through your account
                            <span className="block text-sm">
                              Print label and drop off
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6" data-aos="zoom-in">
                    <h3 className="text-lg font-medium mb-4">
                      Shipping Restrictions
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Some locations may have extended delivery times</li>
                      <li>
                        P.O. boxes and military addresses are not eligible for
                        express shipping
                      </li>
                      <li>International shipping available for select countries</li>
                    </ul>
                  </div>
                </div>
              )}

              {/*tab-3 Returns Policies tab */}
              {activeTab === 3 && (
                //Retrun Policy starts here

                <div className="py-5 rounded-md shadow-sm w-full px-8 space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-down">
                    <h3 className="text-lg font-medium mb-4">
                      Return Policy Overview
                    </h3>
                    <div className="space-y-4 text-gray-600" data-aos="fade-up">
                      <p>
                        We want you to be completely satisfied with your purchase.
                        If you're not happy with your order, you can return it
                        within 30 days of delivery.
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Items must be unworn and in original condition</li>
                        <li>Original tags must be attached</li>
                        <li>Original packaging must be included</li>
                        <li>Proof of purchase is required</li>
                      </ul>
                    </div>
                  </div>

                  <div data-aos="fade-up" data-aos-duration="3000">
                    <h3 className="text-lg font-medium mb-4">
                      Non-Returnable Items
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Intimate apparel</li>
                      <li>Face masks</li>
                      <li>Final sale items</li>
                      <li>Gift cards</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg" data-aos="zoom-in">
                    <h3 className="text-lg font-medium mb-4">Refund Process</h3>
                    <div className="space-y-4" data-aos="fade-up">
                      <p className="text-gray-600">
                        Once we receive your return, we'll inspect the item and
                        process your refund. The refund will be issued to your
                        original payment method within 5-7 business days.
                      </p>
                      <div
                        className="grid md:grid-cols-3 gap-4 mt-4"
                        data-aos="fade-down"
                      >
                        <div
                          className="border rounded-lg p-4"
                          data-aos="fade-up"
                          data-aos-duration="3000"
                        >
                          <div className="font-medium mb-2">Step 1</div>
                          <div className="text-sm text-gray-600">
                            Initiate return request
                          </div>
                        </div>
                        <div
                          className="border rounded-lg p-4"
                          data-aos="fade-up"
                          data-aos-duration="3000"
                        >
                          <div className="font-medium mb-2">Step 2</div>
                          <div className="text-sm text-gray-600">
                            Ship items back
                          </div>
                        </div>
                        <div
                          className="border rounded-lg p-4"
                          data-aos="fade-up"
                          data-aos-duration="3000"
                        >
                          <div className="font-medium mb-2">Step 3</div>
                          <div className="text-sm text-gray-600">
                            Receive refund
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/*tab-3 Warranty  tab */}
              {activeTab === 4 && (
                //Warranty starts here

                <div className="py-5 rounded-md shadow-sm w-full px-8 space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg" data-aos="zoom-in">
                    <h3 className="text-lg font-medium mb-4">
                      Product Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Crafted from premium materials, this versatile piece combines
                      comfort with style. The regular fit ensures a comfortable wear
                      throughout the day, while the ribbed neckline adds a classic
                      touch. Perfect for casual outings or layering, this essential
                      piece is designed to last.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg" data-aos="zoom-in">
                    <h3 className="text-lg font-medium mb-4">Product Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">MATERIALS & CARE</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                          <li>Shell: 100% Premium Cotton</li>
                          <li>Lining: 65% Polyester, 35% Cotton</li>
                          <li>Machine wash at 30°C</li>
                          <li>Do not bleach</li>
                          <li>Iron at medium temperature</li>
                          <li>Dry clean allowed</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">FEATURES</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                          <li>Regular fit</li>
                          <li>Crew neck</li>
                          <li>Short sleeves</li>
                          <li>Ribbed neckline</li>
                          <li>Side slits</li>
                          <li>Premium quality fabric</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4" data-aos="zoom-in">
                      Box Slots
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        "5 Slots",
                        "6 Slots",
                        "8 Slots",
                        "10 Slots",
                        "12 Slots",
                        "16 Slots",
                        "18 Slots",
                        "48 Slots",
                      ].map((size) => (
                        <div
                          key={size}
                          className="border rounded-lg p-4 text-center"
                          data-aos="zoom-in"
                        >
                          <div className="font-medium">{size}</div>
                          <div className="text-sm text-gray-500">Available</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg" data-aos="zoom-in">
                    <h3 className="text-lg font-medium mb-4">
                      Product Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Crafted from premium materials, this versatile piece combines
                      comfort with style. The regular fit ensures a comfortable wear
                      throughout the day, while the ribbed neckline adds a classic
                      touch. Perfect for casual outings or layering, this essential
                      piece is designed to last.
                    </p>
                  </div>
                </div>
              )}

              {/* <div className="py-10 rounded-md space-y-6">
              <div className="flex flex-col bg-gray-50 p-6 rounded-lg ">
                <h4 className="!font-[500] text-[#666]">Lightweight Design</h4>
                  <p>
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laborum sunt ullam, asperiores laudantium labore nostrum cumque maxime officiis odit? Eum culpa quia atque ea vero nostrum neque amet accusantium?
                  </p>

                    <h4 className="!font-[500]">Lightweight Design</h4>
              </div>
              </div> */}
          </div>

         

        <ProductTabs />
        {/*
        <div className="flex items-center gap-4 pt-10">
      

        {/* <ProductTabs /> 

        </div> */}


      </section>
    </>
  );
};

export default ProductDetails;
