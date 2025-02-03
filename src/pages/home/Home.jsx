import React from "react";
import HomeSlider from "../../components/homeSlider/HomeSlider";
import HomeCatSlider from "../../components/homeCatSlider/HomeCatSlider";
import { TbTruckDelivery } from "react-icons/tb";
import AdsBannerSlider from "../../components/adsBannerSlider/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductsSlider from "../../components/productsSlider/ProductsSlider";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";


import BlogItem from "../../components/BlogItem/BlogItem";
import Footer from "../../components/footer/Footer";


const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSlider />
      {/* HomeCategorySlider */}
      <HomeCatSlider />
      {/* Popular */}
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of February.
              </p>
            </div>
            <div className="rightSec w-[60%]">
            
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="scrollable force tabs example"
                >
                  <Tab label="Bangle Box" />
                  <Tab label="Wallets" />
                  <Tab label="Belts" />
                  <Tab label="Watch & Sunglasses Box" />
                  <Tab label="Watch Box" />
                  <Tab label="Sunglasses Box" />
                  <Tab label="Sweat Box" />
                  <Tab label="Cheque Box" />
                  <Tab label="Extra Box" />
                </Tabs>

            </div>
          </div>
          <ProductsSlider items={5}/>
        </div>

        
      </section>
      {/* freeshipping band & ads banner */}
      <section className="py-4 pt-2 bg-white">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto py-4 p-4 border-2 border-[#1976d2] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <TbTruckDelivery className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>

            <p className="font-bold text-[25px]">- Only $200*</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>

      {/* latest products */}
      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductsSlider items={6} />

          <AdsBannerSlider items={3} />
        </div>
      </section>

    {/* featured products */}
      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>
          <ProductsSlider items={6} />

          <AdsBannerSlider items={2} />
        
        </div>
      </section>


      {/* Blog section */}

      <section className="blogSection py-5 pt-0 pb-8 bg-white">
        <div className="container">
        <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>

          <Swiper
          slidesPerView={5}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={true}
          className="blogSlider"
        >
          <SwiperSlide>
            <BlogItem />
          </SwiperSlide>

          <SwiperSlide>
            <BlogItem />
          </SwiperSlide>

          <SwiperSlide>
            <BlogItem />
          </SwiperSlide>

          <SwiperSlide>
            <BlogItem />
          </SwiperSlide>

          <SwiperSlide>
            <BlogItem />
          </SwiperSlide>

          <SwiperSlide>
            <BlogItem />
          </SwiperSlide>

          <SwiperSlide>
            <BlogItem />
          </SwiperSlide>

          
          </Swiper>
        </div>
      </section>

      <Footer />

    </>
  );
};

export default Home;
