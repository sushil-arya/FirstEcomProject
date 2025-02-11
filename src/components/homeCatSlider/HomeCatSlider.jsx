import React,{useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
//animation aos
import AOS from 'aos';
import 'aos/dist/aos.css';



const HomeCatSlider = () => {

  
    useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 700,
        easing: "ease-out-cubic",
      });
    }, []);
  
  return (
    <div className="homeCatSlider my-4" data-aos="fade-up" data-aos-delay="50">
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
          <div className="item pb-2 px-3 bg-white rounded-sm flex items-center flex-col overflow-hidden">
            
              <img
                src="/images_cat/img-cat-1.jpg"
                alt=""
                className="w-full transition-all hover:scale-105"
              />
              <h3 className="text-[15px] font-[500] pb-6">Bangle Box</h3>
          
          </div>
          </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
          <div className="item pb-2 px-3 bg-white rounded-sm flex items-center flex-col overflow-hidden">
            
              <img
                src="/images_cat/img-cat-2.jpg"
                alt=""
                className="w-full transition-all hover:scale-105"
              />
              <h3 className="text-[15px] font-[500] pb-6 ">Wallets</h3>
          
          </div>
          </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
          <div className="item pb-2 px-3 bg-white rounded-sm flex items-center flex-col overflow-hidden">
            
              <img
                src="/images_cat/img-cat-3.jpg"
                alt=""
                className="w-full transition-all hover:scale-105"
              />
              <h3 className="text-[15px] font-[500] pb-6">Belts</h3>
          
          </div>
          </Link>
          </SwiperSlide>


          <SwiperSlide>
            <Link to="/">
          <div className="item pb-2 px-3 bg-white rounded-sm text-center flex items-center flex-col">
            
              <img
                src="/images_cat/img-cat-4.jpg"
                alt=""
                className="w-full transition-all hover:scale-105"
              />
              <h3 className="text-[15px] font-[500]">Watches & Sunglasses Box</h3>
          
          </div>
          </Link>
          </SwiperSlide>


          <SwiperSlide>
            <Link to="/">
          <div className="item pb-2 px-3 bg-white rounded-sm flex items-center flex-col">
            
              <img
                src="/images_cat/img-cat-5.jpg"
                alt=""
                className="w-full transition-all hover:scale-105"
              />
              <h3 className="text-[15px] font-[500] pb-6">Watch Box</h3>
          
          </div>
          </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
          <div className="item pb-2 px-3  bg-white rounded-sm flex items-center flex-col">
            
              <img
                src="/images_cat/img-cat-6.jpg"
                alt=""
                className="w-full transition-all hover:scale-105"
              />
              <h3 className="text-[15px] font-[500] pb-6">Sunglasses Box</h3>
          
          </div>
          </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
          <div className="item pb-2 px-3 bg-white rounded-sm flex items-center flex-col">
            
              <img
                src="/images_cat/img-cat-7.jpg"
                alt=""
                className="w-full transition-all hover:scale-105"
              />
              <h3 className="text-[15px] font-[500] pb-6">Sweat Box</h3>
          
          </div>
          </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
          <div className="item pb-2 px-3 bg-white rounded-sm flex items-center flex-col">
            
              <img
                src="/images_cat/img-cat-8.jpg"
                alt=""
                className="w-full transition-all hover:scale-105"
              />
              <h3 className="text-[15px] font-[500] pb-6">Cheque Book</h3>
          
          </div>
          </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
          <div className="item pb-2 px-3 bg-white rounded-sm flex items-center flex-col">
            
              <img
                src="/images_cat/img-cat-9.jpg"
                alt=""
                className="w-full transition-all hover:scale-105"
              />
              <h3 className="text-[15px] font-[500] pb-6">Extra Box</h3>
          
          </div>
          </Link>
          </SwiperSlide>
          {/* <SwiperSlide>
            <Link to="/">
          <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
            
              <img
                src="/images_cat/img-cat-10.jpg"
                alt=""
                className="h-[150px]"
              />
              <h3 className="text-[15px] font-[500] mt-3">Bangle Box</h3>
          
          </div>
          </Link>
          </SwiperSlide> */}

          
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
