import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const ProductTabSingle = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      id: 'description',
      label: 'Description',
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Product Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">MATERIALS & CARE</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Shell: 100% Premium Cotton</li>
                  <li>Lining: 65% Polyester, 35% Cotton</li>
                  <li>Machine wash at 30°C</li>
                  <li>Do not bleach</li>
                  <li>Iron at medium temperature</li>
                  <li>Dry clean allowed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">FEATURES</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Regular fit</li>
                  <li>Crew neck</li>
                  <li>Short sleeves</li>
                  <li>Ribbed neckline</li>
                  <li>Side slits</li>
                  <li>Premium quality fabric</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Size & Fit</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <div key={size} className="border rounded-lg p-4 text-center">
                  <div className="font-medium">{size}</div>
                  <div className="text-sm text-gray-500">Available</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Product Description</h3>
            <p className="text-gray-600 leading-relaxed">
              Crafted from premium materials, this versatile piece combines comfort with style. 
              The regular fit ensures a comfortable wear throughout the day, while the ribbed 
              neckline adds a classic touch. Perfect for casual outings or layering, this 
              essential piece is designed to last.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'reviews',
      label: 'Customer Reviews',
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Customer Reviews</h3>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">4.8 out of 5</span>
              </div>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Write a Review
            </button>
          </div>

          {/* Review Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['All Reviews', '5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 rounded-full border hover:border-black transition-colors whitespace-nowrap"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Review List */}
          <div className="space-y-6">
            {[1, 2, 3].map((review) => (
              <motion.div
                key={review}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-b pb-6"
              >
                <div className="flex justify-between mb-2">
                  <div>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h4 className="font-medium mt-1">Great quality and fit!</h4>
                  </div>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-gray-600">
                  The quality of this product exceeded my expectations. The fit is perfect 
                  and the material feels premium. Would definitely recommend!
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="text-sm text-gray-500 hover:text-black">
                    Helpful (12)
                  </button>
                  <button className="text-sm text-gray-500 hover:text-black">
                    Report
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Shipping Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Standard Shipping</h4>
                  <p className="text-gray-600">
                    3-5 business days
                    <span className="block text-sm">Free for orders over $50</span>
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Express Shipping</h4>
                  <p className="text-gray-600">
                    1-2 business days
                    <span className="block text-sm">$15.00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Returns</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Return Window</h4>
                  <p className="text-gray-600">
                    30 days from delivery
                    <span className="block text-sm">Free returns</span>
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Return Process</h4>
                  <p className="text-gray-600">
                    Initiate return through your account
                    <span className="block text-sm">Print label and drop off</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Shipping Restrictions</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Some locations may have extended delivery times</li>
              <li>P.O. boxes and military addresses are not eligible for express shipping</li>
              <li>International shipping available for select countries</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'policies',
      label: 'Return Policies',
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Return Policy Overview</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                We want you to be completely satisfied with your purchase. If you're not 
                happy with your order, you can return it within 30 days of delivery.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Items must be unworn and in original condition</li>
                <li>Original tags must be attached</li>
                <li>Original packaging must be included</li>
                <li>Proof of purchase is required</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Non-Returnable Items</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Intimate apparel</li>
              <li>Face masks</li>
              <li>Final sale items</li>
              <li>Gift cards</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Refund Process</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                Once we receive your return, we'll inspect the item and process your refund. 
                The refund will be issued to your original payment method within 5-7 
                business days.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="border rounded-lg p-4">
                  <div className="font-medium mb-2">Step 1</div>
                  <div className="text-sm text-gray-600">Initiate return request</div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="font-medium mb-2">Step 2</div>
                  <div className="text-sm text-gray-600">Ship items back</div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="font-medium mb-2">Step 3</div>
                  <div className="text-sm text-gray-600">Receive refund</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
        <TabList className="flex space-x-8 border-b">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              className={({ selected }) =>
                `pb-4 relative focus:outline-none ${
                  selected
                    ? 'text-black'
                    : 'text-gray-500 hover:text-black'
                }`
              }
            >
              {({ selected }) => (
                <>
                  {tab.label}
                  {selected && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                      layoutId="underline"
                    />
                  )}
                </>
              )}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-8">
          <AnimatePresence mode="wait">
            {tabs.map((tab, idx) => (
              <TabPanel
                key={tab.id}
                static
                className={selectedTab === idx ? 'block' : 'hidden'}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {tab.content}
                </motion.div>
              </TabPanel>
            ))}
          </AnimatePresence>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default ProductTabSingle;