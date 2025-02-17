import React, { useRef, useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const ProductZoom = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  }


  return (
    <>
        <div className="flex gap-3">
            <div className="slider w-[15%]">
              <Swiper

                      ref={zoomSliderSml}
                      direction={"vertical"}
                      slidesPerView={5}
                      spaceBetween={0}
                      modules={[Navigation]}
                      navigation={true}
                      className="zoomProductSliderThumbs h-[80vh] overflow-hidden"
                    >
                      <SwiperSlide>
                        <div className={`item rounded-md  overflow-hidden cursor-pointer group border border-[#e5e5e5] ${slideIndex===0 ? '' : 'opacity-80'}`} onClick={() => goto(0)}>
                          <img src="/img-products/img-product-1.webp" className='w-full transition-all overflow-hidden group-hover:scale-105' alt="Product" />

                          
                        </div>
                      </SwiperSlide>
                      
                      <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group border border-[#e5e5e5] ${slideIndex===1 ? '' : 'opacity-80'}`} onClick={() => goto(1)}>
                          <img src="/img-products/img-product-2.webp" className='w-full transition-all group-hover:scale-105' alt="Product" />
                        
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group border border-[#e5e5e5] ${slideIndex===2 ? '' : 'opacity-80'}`} onClick={() => goto(2)}>
                          <img src="/img-products/img-product-3.webp" className='w-full transition-all group-hover:scale-105' alt="Product" />
                      
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group border border-[#e5e5e5] ${slideIndex===3 ? '' : 'opacity-80'}`} onClick={() => goto(3)}>
                          <img src="/img-products/img-product-4.webp" className='w-full transition-all group-hover:scale-105' alt="Product" />

                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group border border-[#e5e5e5] ${slideIndex===4 ? '' : 'opacity-80'}`} onClick={() => goto(4)}>
                          <img src="/img-products/img-product-5.webp" className='w-full transition-all group-hover:scale-105' alt="Product" />
                        

                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group border border-[#e5e5e5] ${slideIndex===5 ? '' : 'opacity-80'}`} onClick={() => goto(5)}>
                          <img src="/img-products/img-product-6.webp" className='w-full transition-all group-hover:scale-105' alt="Product" />

                        </div> 
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group border border-[#e5e5e5] ${slideIndex===6 ? '' : 'opacity-80'} `} onClick={() => goto(6)}>
                          <img src="/img-products/img-product-7.webp" className='w-full transition-all group-hover:scale-105' alt="Product" />

                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group border border-[#e5e5e5] ${slideIndex===7 ? '' : 'opacity-80'}`} onClick={() => goto(7)}>
                          <img src="/img-products/img-product-8.webp" className='w-full transition-all group-hover:scale-105' alt="Product" />

                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group  border border-[#e5e5e5] ${slideIndex===8 ? '' : 'opacity-80'}`} onClick={() => goto(8)}>
                          <img src="/img-products/img-product-9.webp" className='w-full transition-all group-hover:scale-105' alt="Product" />

                        
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group border border-[#e5e5e5] ${slideIndex===9 ? '' : 'opacity-80'}`} onClick={() => goto(9)}>
                          <img src="/img-products/img-product-10.webp" className='w-full transition-all group-hover:scale-105' alt="Product" />

                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group border border-[#e5e5e5] ${slideIndex===10 ? '' : 'opacity-80'}`} onClick={() => goto(10)}>
                          <img src="/img-products/img-product-11.webp" className='w-full transition-all group-hover:scale-105' alt="Product" />

                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group border border-[#e5e5e5] ${slideIndex===11 ? '' : 'opacity-80'}`} onClick={() => goto(11)}>
                          <img src="/img-products/img-product-12.webp" className='w-full transition-all group-hover:scale-105' alt="Product" />

                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group border border-[#e5e5e5] ${slideIndex===12 ? '' : 'opacity-80'}`} onClick={() => goto(12)}>
                          <img src="/img-products/img-product-13.webp" className='w-full transition-all group-hover:scale-105' alt="Product" />

                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden cursor-pointer group border border-[#e5e5e5] ${slideIndex===13 ? '' : 'opacity-80'}`} onClick={() => goto(13)}>
                          <img src="/img-products/img-product-14.webp" className='w-full transition-all group-hover:scale-105' alt="Product" />

                        </div>
                      </SwiperSlide>

                      <SwiperSlide></SwiperSlide>
                    
              </Swiper>
            </div>

            <div className="zoomContainer w-[85%] border border-[#e5e5e5] h-[80vh] overflow-hidden">
              <Swiper
                      ref={zoomSliderBig}
                      slidesPerView={1}
                      spaceBetween={0} 
                      navigation={false}
                    >
                      <SwiperSlide>
                          <InnerImageZoom zoomType='hover' zoomScale={1} src="/img-products/img-product-1.webp"/>
                      </SwiperSlide>

                      
                      <SwiperSlide>
                          <InnerImageZoom zoomType='hover' zoomScale={1} src={'/img-products/img-product-2.webp'}/>
                      </SwiperSlide>

                      
                      <SwiperSlide>
                          <InnerImageZoom zoomType='hover' zoomScale={1} src={'/img-products/img-product-3.webp'}/>
                      </SwiperSlide>

                      
                      <SwiperSlide>
                          <InnerImageZoom zoomType='hover' zoomScale={1} src={'/img-products/img-product-4.webp'}/>
                      </SwiperSlide>

                      
                      <SwiperSlide>
                          <InnerImageZoom zoomType='hover' zoomScale={1} src={'/img-products/img-product-5.webp'}/>
                      </SwiperSlide>

                      
                      <SwiperSlide>
                          <InnerImageZoom zoomType='hover' zoomScale={1} src={'/img-products/img-product-6.webp'}/>
                      </SwiperSlide>

                      
                      <SwiperSlide>
                          <InnerImageZoom zoomType='hover' zoomScale={1} src={'/img-products/img-product-7.webp'}/>
                      </SwiperSlide>

                      
                      <SwiperSlide>
                          <InnerImageZoom zoomType='hover' zoomScale={1} src={'/img-products/img-product-8.webp'}/>
                      </SwiperSlide>

                      
                      <SwiperSlide>
                          <InnerImageZoom zoomType='hover' zoomScale={1} src={'/img-products/img-product-9.webp'}/>
                      </SwiperSlide>

                      
                      <SwiperSlide>
                          <InnerImageZoom zoomType='hover' zoomScale={1} src={'/img-products/img-product-10.webp'}/>
                      </SwiperSlide>

                      
                      <SwiperSlide>
                          <InnerImageZoom zoomType='hover' zoomScale={1} src={'/img-products/img-product-11.webp'}/>
                      </SwiperSlide>

                      
                      <SwiperSlide>
                          <InnerImageZoom zoomType='hover' zoomScale={1} src={'/img-products/img-product-12.webp'}/>
                      </SwiperSlide>

                      
                      <SwiperSlide>
                          <InnerImageZoom zoomType='hover' zoomScale={1} src={'/img-products/img-product-13.webp'}/>
                      </SwiperSlide>


                      <SwiperSlide>
                          <InnerImageZoom zoomType='hover' zoomScale={1} src={'/img-products/img-product-14.webp'}/>
                      </SwiperSlide>

              </Swiper>
            </div>
      </div>
    </>
  )
}

export default ProductZoom;