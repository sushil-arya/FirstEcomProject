import React,{useEffect} from "react";

import HomeSlider from "../../components/homeSlider/HomeSlider";
import ProductTabs from "../../components/productTabs/ProductTabs";
import CustomerReviews from "../../components/customerReviews/CustomerReviews";
import InstagramShop from "../../components/instagramShop/InstagramShop";
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
import BlogItem from "../../components/blogItem/BlogItem";
import HomeSlider2 from "../../components/homeSlider2/HomeSlider2";
import BannerBoxV2 from "../../components/bannerBoxV2/BannerBoxV2";

//animation AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import RelatedProducts from "../../components/relatedProducts/RelatedProducts";


import { CartProvider } from '../../context/CartContext';
import { WishlistProvider } from '../../context/WishlistContext';



const Home = () => {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>

      

      {/* Home Slider Version 1 */}
      {/* <HomeSlider /> */}


      {/* Home Slider Version 2 */}
      <section className="py-6">
        <div className="container flex gap-5 ">
            <div className="part1 w-[70%] rounded-md">
            <HomeSlider2 />
            </div>
            <div className="part2 w-[30%] flex items-center gap-5 flex-col">
              <BannerBoxV2 info = "left" image={'/images1/home-banner-side/img-home-banner-side-1.jpg'} />
              <BannerBoxV2 info = "right" image={'/images1/home-banner-side/img-home-banner-side-2.jpg'} />
            </div>
        </div>
      </section>



      {/* HomeCategorySlider */}
      <HomeCatSlider/>

      {/* Popular */}
      <section className="bg-white py-8" >
        <div className="container" data-aos="fade-up"
    data-aos-duration="3000" >
          <div className="flex items-center justify-between" data-aos="zoom-out">
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
          <div className="freeShipping w-[80%] m-auto py-4 p-4 border-2 border-[#1976d2] flex items-center justify-between rounded-md mb-7"  data-aos="zoom-out-down">
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
        <div className="container" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <h2 className="text-[20px] font-[600]"  data-aos="fade-up"
     data-aos-duration="3000"  >Latest Products</h2>
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

      {/* product tab */}

      {/* <ProductTabs /> */}

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

      {/* <CustomerReviews /> */}

      {/* Instagram Shop */}
      {/* <InstagramShop /> */}

      
{/* 
      <CartProvider>
      <WishlistProvider>
       

        <RelatedProducts />
      </WishlistProvider>
      </CartProvider> */}
      

    </>
  );
};

export default Home;
