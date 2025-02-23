import React from "react";
import MyListItems from "./MyListItems";
import AccountSideBar from "../../components/accountSideBar/AccountSideBar";


const MyList = () => {

  return (

    <section className='py-10 w-full'>
    <div className="container flex gap-5">
      <div className="col1 w-[20%]">
        {/* Account side bar component */}
        <AccountSideBar />
      </div>

      <div className="col2 w-[78%]">

        <div className="shadow-md rounded-md bg-white">

      <div className="py-3 px-4 border-b border-[rgba(0,0,0,0.1)]">
        <h2 className="text-[15px] text-[#444] font-[600]">My List</h2>
        <p className="mt-0 text-[14px]">
          There are <span className="font-bold text-[#1976d2]">2</span>{" "}
          products in your My list
        </p>
      </div>

      {/* CartItems component here  */}
      <MyListItems  />
      <MyListItems  />
      <MyListItems  />
      <MyListItems  />
      <MyListItems  />
        </div>
      </div>

    </div>
    </section>

  );
};

export default MyList;
