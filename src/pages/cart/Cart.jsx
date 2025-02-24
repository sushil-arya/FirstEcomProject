import React, { useEffect } from "react";
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import { BsFillBagCheckFill } from "react-icons/bs";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";



const Cart = () => {

  useEffect(() => {
          AOS.init({
            duration: 700,
            offset: 100,
            easing: "ease-out-cubic",
          });
        }, []);


  return (
    <section className="section py-10 pb-10" data-aos="zoom-out">
      <div className="container w-[80%] max-w-[80%] flex gap-5">

        {/* product or shopping item card left side */}
        <div className="leftPart w-[70%]">


          <div className="shadow-md rounded-md bg-white" data-aos="fade-up">

            <div className="py-3 px-4 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[15px] text-[#444] font-[600]">Your Cart</h2>
              <p className="mt-0 text-[14px]">
                There are <span className="font-bold text-[#1976d2]">2</span>{" "}
                products in your cart
              </p>
            </div>

            {/* CartItems component here  */}
            <CartItems size='5' qty={1} />
            <CartItems size='5' qty={1} />
            <CartItems size='5' qty={1} />
            <CartItems size='5' qty={1} />
            <CartItems size='5' qty={1} />


          </div>
        </div>

        {/* total card right side */}
        
        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md bg-white p-5  sticky top-[10px]">
          
            <h3 className="text-[16px] text-[#666] p-3 font-[600]">Cart Total</h3>

            <Divider variant="middle" />

            <p className="flex items-center justify-between mt-2 text-[15px]">
                <span className="text-[#666] font-[500]">Subtotal</span>
                <span className="text-[#1976d2] font-bold">&#8377; 2999</span>
            </p>

            
            <p className="flex items-center justify-between mt-2 text-[15px] text-[#666]">
                <span className="text-[#666] font-[500]">Shipping</span>
                <span className="font-[500]">Free</span>
            </p>

            <p className="flex items-center justify-between mt-2 text-[15px] text-[#666]">
                <span className="text-[#666] font-[500]">Estimate for</span>
                <span className="font-[500]">Punjab</span>
            </p>

            <p className="flex items-center justify-between mt-2 text-[15px] text-[#666]">
                <span className="text-[#666] font-[500]">Total</span>
                <span className="font-[500]">&#8377; 2999</span>
            </p>


          <div className="flex items-center w-full mt-5 mb-3">
          
              <Link to="/checkout" className='w-full'><Button variant="contained" className="!capitalize w-full btn-lg flex gap-2 items-center justify-between">  <BsFillBagCheckFill  className="text-[20px]"/> Checkout</Button> </Link>

          </div>


          </div>
        </div>

      </div>
    </section>
  );
};

export default Cart;
