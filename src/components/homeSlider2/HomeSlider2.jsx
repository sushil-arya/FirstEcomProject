import React,{useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AOS from 'aos';
import 'aos/dist/aos.css';


// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import Button from "@mui/material/Button";

const HomeSlider2 = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="homeSliderV2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-lg overflow-hidden relative">
            <img src="/images1/home-banner-jpg/home-1.jpg" />

            {/* banner-1 image information */}
            <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-20 flex items-center flex-col justify-center transition-all duration-700 ">
              <h4 className="text-[18px] font-[500] w-full text-left mb-4 relative -right-[100%] opacity-0">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0" >
                Stylish Boxes for Disciplined People
              </h2>

              <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mb-3 mt-3 relative -right-[100%] opacity-0">
                Statring At Only{" "}
                <span className="text-[#1976d2] text-[30px] font[700] relative -right-[100%] opacity-0">
                  &#8377; 3500.00
                </span>{" "}
              </h3>
              <div className="w-full btn-shop relative -right-[100%] opacity-0">
                <Button variant="contained">shop now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item w-full  rounded-lg overflow-hidden relative">
            <img src="/images1/home-banner-jpg/home-2.jpg" />

            {/* banner-2 image information */}
            <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-20 flex items-center flex-col justify-center transition-all duration-700 ">
              <h4 className="text-[18px] font-[500] w-full text-left mb-4 relative -right-[100%] opacity-0">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-[700] w-full  relative -right-[100%] opacity-0">
                Buy Stylish Watches Box In Black Color
              </h2>

              <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mb-3 mt-3  relative -right-[100%] opacity-0">
                Statring At Only{" "}
                <span className="text-[#1976d2] text-[30px] font[700]  relative -right-[100%] opacity-0">
                &#8377; 4999.00
                </span>{" "}
              </h3>
              <div className="w-full btn-shop relative -right-[100%] opacity-0">
                <Button variant="contained" >shop now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item w-full rounded-lg overflow-hidden relative">
            <img src="/images1/home-banner-jpg/home-3.jpg" />

            {/* banner-1 image information */}
            <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-20 flex items-center flex-col justify-center transition-all duration-700 ">
              <h4 className="text-[18px] font-[500] w-full text-left mb-4 relative -right-[100%] opacity-0">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0" >
                Stylish Boxes for Disciplined People
              </h2>

              <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mb-3 mt-3 relative -right-[100%] opacity-0">
                Statring At Only{" "}
                <span className="text-[#1976d2] text-[30px] font[700] relative -right-[100%] opacity-0">
                  &#8377; 3999.00
                </span>{" "}
              </h3>
              <div className="w-full btn-shop relative -right-[100%] opacity-0">
                <Button variant="contained">shop now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      

        <SwiperSlide>
          <div className="item w-full rounded-lg overflow-hidden relative">
            <img src="/images1/home-banner-jpg/home-4.jpg" />

            {/* banner-1 image information */}
            <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-20 flex items-center flex-col justify-center transition-all duration-700 ">
              <h4 className="text-[18px] font-[500] w-full text-left mb-4 relative -right-[100%] opacity-0">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0" >
                Stylish Boxes for Disciplined People
              </h2>

              <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mb-3 mt-3 relative -right-[100%] opacity-0">
                Statring At Only{" "}
                <span className="text-[#1976d2] text-[30px] font[700] relative -right-[100%] opacity-0">
                  &#8377; 2999.00
                </span>{" "}
              </h3>
              <div className="w-full btn-shop relative -right-[100%] opacity-0">
                <Button variant="contained">shop now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      
        <SwiperSlide>
          <div className="item w-full rounded-lg overflow-hidden relative">
            <img src="/images1/home-banner-jpg/home-5.jpg" />

            {/* banner-1 image information */}
            <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-20 flex items-center flex-col justify-center transition-all duration-700 ">
              <h4 className="text-[18px] font-[500] w-full text-left mb-4 relative -right-[100%] opacity-0">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0" >
                Stylish Boxes for Disciplined People
              </h2>

              <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mb-3 mt-3 relative -right-[100%] opacity-0">
                Statring At Only{" "}
                <span className="text-[#1976d2] text-[30px] font[700] relative -right-[100%] opacity-0">
                  &#8377; 1999.00
                </span>{" "}
              </h3>
              <div className="w-full btn-shop relative -right-[100%] opacity-0">
                <Button variant="contained">shop now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      
        <SwiperSlide>
          <div className="item w-full rounded-lg overflow-hidden relative">
            <img src="/images1/home-banner-jpg/home-6.jpg" />

            {/* banner-1 image information */}
            <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-20 flex items-center flex-col justify-center transition-all duration-700 ">
              <h4 className="text-[18px] font-[500] w-full text-left mb-4 relative -right-[100%] opacity-0">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0" >
                Stylish Boxes for Disciplined People
              </h2>

              <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mb-3 mt-3 relative -right-[100%] opacity-0">
                Statring At Only{" "}
                <span className="text-[#1976d2] text-[30px] font[700] relative -right-[100%] opacity-0">
                  &#8377; 2999.00
                </span>{" "}
              </h3>
              <div className="w-full btn-shop relative -right-[100%] opacity-0">
                <Button variant="contained">shop now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
};

export default HomeSlider2;
