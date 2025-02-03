import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";


const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider my-6">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center  flex-col ">
            
              <img
                src="/images_cat/img1.jpg"
                alt=""
                className="h-[150px]"
              />
              <h3 className="text-[15px] font-[500] mt-3">Bangle Box</h3>
          
          </div>
          </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            
              <img
                src="/images_cat/img2.jpg"
                alt=""
                className="h-[150px]"
              />
              <h3 className="text-[15px] font-[500] mt-3">Wallets</h3>
          
          </div>
          </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            
              <img
                src="/images_cat/img3.jpg"
                alt=""
                className="h-[150px]"
              />
              <h3 className="text-[15px] font-[500] mt-3">Belts</h3>
          
          </div>
          </Link>
          </SwiperSlide>


          <SwiperSlide>
            <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            
              <img
                src="/images_cat/img4.jpg"
                alt=""
                className="h-[150px]"
              />
              <h3 className="text-[15px] font-[500] mt-3">Watches & Sunglasses Box</h3>
          
          </div>
          </Link>
          </SwiperSlide>


          <SwiperSlide>
            <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            
              <img
                src="/images_cat/img5.jpg"
                alt=""
                className="h-[150px]"
              />
              <h3 className="text-[15px] font-[500] mt-3">Watch Box</h3>
          
          </div>
          </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            
              <img
                src="/images_cat/img6.jpg"
                alt=""
                className="h-[150px]"
              />
              <h3 className="text-[15px] font-[500] mt-3">Sunglasses Box</h3>
          
          </div>
          </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            
              <img
                src="/images_cat/img7.jpg"
                alt=""
                className="h-[150px]"
              />
              <h3 className="text-[15px] font-[500] mt-3">Sweat Box</h3>
          
          </div>
          </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            
              <img
                src="/images_cat/img8.jpg"
                alt=""
                className="h-[150px]"
              />
              <h3 className="text-[15px] font-[500] mt-3">Cheque Book</h3>
          
          </div>
          </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            
              <img
                src="/images_cat/img9.jpg"
                alt=""
                className="h-[150px]"
              />
              <h3 className="text-[15px] font-[500] mt-3">Extra Box</h3>
          
          </div>
          </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            
              <img
                src="/images_cat/img1.jpg"
                alt=""
                className="h-[150px]"
              />
              <h3 className="text-[15px] font-[500] mt-3">Bangle Box</h3>
          
          </div>
          </Link>
          </SwiperSlide>

          
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
