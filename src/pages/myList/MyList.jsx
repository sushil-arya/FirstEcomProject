import React, { useEffect } from "react";
import MyListItems from "./MyListItems";
import AccountSideBar from "../../components/accountSideBar/AccountSideBar";
import AOS from "aos";
import "aos/dist/aos.css";


const MyList = () => {
    useEffect(() => {
      AOS.init({
        duration: 700,
        offset: 100,
        easing: "ease-out-cubic",
      });
    }, []);


  return (

    <section className='py-10 w-full'>
    <div className="container flex gap-5">
      <div className="col1 w-[20%]">
        {/* Account side bar component */}
        <AccountSideBar />
      </div>

      <div className="col2 w-[78%]" data-aos="zoom-out">

        <div className="shadow-md rounded-md bg-white">

      <div className="py-3 px-4 border-b border-[rgba(0,0,0,0.1)]">
        <h2 className="text-[15px] text-[#444] font-[600]">My List</h2>
        <p className="mt-0 text-[14px]">
          There are <span className="font-bold text-[#1976d2]">2</span>{" "}
          products in your My list
        </p>
      </div>

          {/* CartItems component here  */}
          <MyListItems />
          <MyListItems />
          <MyListItems />
          <MyListItems />
          <MyListItems />
        </div>
      </div>

    </div>
    </section>

  );
};

export default MyList;
