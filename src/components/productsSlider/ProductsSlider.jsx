import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import ProductItem from '../productItem/ProductItem';

const ProductsSlider = (props) => {
  return (
    <div className='productsSlider py-3'>
      <Swiper
                slidesPerView={props.items}
                spaceBetween={30}
                modules={[Navigation]}
                navigation={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default ProductsSlider;