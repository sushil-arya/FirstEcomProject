import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import BannerBox from '../bannerBox/BannerBox';

const AdsBannerSlider = (props) => {
 

  return (
    <div className='py-5 w-full'>
      <Swiper
          slidesPerView={props.items}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={true}
          className="smlBtn"
        >

          <SwiperSlide>
            <BannerBox img={'/img-ad-banners/ban1.webp'} link={'/'}/>
          </SwiperSlide>

          
          <SwiperSlide>
            <BannerBox img={'/img-ad-banners/ban2.webp'} link={'/'}/>
          </SwiperSlide>

          
          <SwiperSlide>
            <BannerBox img={'/img-ad-banners/ban3.webp'} link={'/'}/>
          </SwiperSlide>

          
          <SwiperSlide>
            <BannerBox img={'/img-ad-banners/ban4.webp'} link={'/'}/>
          </SwiperSlide>

          
          <SwiperSlide>
            <BannerBox img={'/img-ad-banners/ban1.webp'} link={'/'}/>
          </SwiperSlide>

          
          <SwiperSlide>
            <BannerBox img={'/img-ad-banners/ban2.webp'} link={'/'}/>
          </SwiperSlide>

          

        </Swiper>
        
    </div>
  )
}

export default AdsBannerSlider;