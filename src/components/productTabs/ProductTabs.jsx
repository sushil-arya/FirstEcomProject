import React, { useState } from 'react'

import ProductsSlider from '../productsSlider/ProductsSlider';

const ProductTabs = () => {

  const [productActiveTab, setProductActiveTab] = useState(0);

  return (
    <>


      <section className="bg-white py-5">
          <div className="container pt-10">
              <div className="flex items-center gap-8 mb-5 justify-center">
                <h2
                  className={`link text-[18px] cursor-pointer font-[500] ${
                    productActiveTab === 0 && "!text-[#1976d2]"
                  }`}
                  onClick={() => setProductActiveTab(0)}
                >
                  Latest Product
                </h2>
                <h2
                  className={`link text-[18px] cursor-pointer font-[500] ${
                    productActiveTab === 1 && "!text-[#1976d2]"
                  }`}
                  onClick={() => setProductActiveTab(1)}
                >
                  Related Products
                </h2>
              </div>

              {/*tab-1 Description tab */}
              {productActiveTab === 0 && (
                //Description starts here

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-full" data-aos="fade-up">
                <ProductsSlider items={5}/>
                </div>

                // <div className="py-5 rounded-md shadow-sm w-full px-8 space-y-6">
                //   <div className="bg-gray-50 p-6 rounded-lg" data-aos="fade-up">
                //     <ProductsSlider items={5}/>

                //   </div>
                
                // </div>
              )}


              {/*tab-1 Description tab */}
              {productActiveTab === 1 && (
                //Description starts here

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-full" data-aos="fade-up">
                <ProductsSlider items={5}/>

              </div>

                // <div className="py-5 rounded-md shadow-sm w-full px-8 space-y-6">

                
                // </div>
              )}
          </div>
      </section>
    </>
  )
}

export default ProductTabs