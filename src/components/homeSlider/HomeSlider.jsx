import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {  Autoplay, Navigation } from "swiper/modules";

const HomeSlider = () => {
  return (
    <>
      <div className="homeSliderpt-4 py-8">
        <div className="container">
          <Swiper
            spaceBetween={10}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay,Navigation]}
            
            className="sliderHome"
          >
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="/images1/home-1.jpg"
                  alt="Image 1"
                  className="w-full h-[600px]  object-fit: cover"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="//images1/home-2.jpg"
                  alt="Image 2"
                  className="w-full  h-[600px] object-fit: cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://cdn.pixabay.com/photo/2023/04/28/17/04/wrist-watch-7957073_1280.jpg"
                  alt="Image 3"
                  className="w-full h-[600px] object-fit: cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/941194394/photo/wristwatch-and-watch-case.jpg?s=2048x2048&w=is&k=20&c=-FURhcVc5cDIR7Z1D2fLKtV8X7NJcMuQeriHx8AaeXU="
                  alt="Image 4"
                  className="w-full h-[600px] object-fit: cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/1216635238/photo/storage-box-with-collection-of-men-wrist-watches.jpg?s=2048x2048&w=is&k=20&c=b9eo6TxUeGlNbVeITysvotqklnfV1VLJlZkctn4b-kw="
                  alt="Image 5"
                  className="w-full h-[600px] object-fit: cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/835334510/photo/men-watch-and-accesories-in-a-shop-in-madrid.jpg?s=2048x2048&w=is&k=20&c=R8K6IGy0WHNnj0A9bn-_jHTn2AboBpb8oa77t4LXhuQ="
                  alt="Image 6"
                  className="w-full h-[600px] object-fit: cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://cdn.pixabay.com/photo/2019/03/16/10/13/watches-4058766_1280.jpg"
                  alt="Image 7"
                  className="w-full h-[600px] object-fit: cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/1216635259/photo/storage-box-with-collection-of-men-wrist-watches.jpg?s=2048x2048&w=is&k=20&c=v0moC7d-27Y8tDL1zT9qxooDy8My6z7rIvKzk8Ifbp0="
                  alt="Image 8"
                  className="w-full h-[600px] object-fit: cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
