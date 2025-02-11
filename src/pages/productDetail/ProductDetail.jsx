import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import ProductGallery from '../../components/productGallery/ProductGallery';

const productGalleryImages = [
  {
    id: 1,
    main: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800",
    thumbnail:
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=150",
    color: "olive",
    view: "Front",
  },
  {
    id: 2,
    main: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800",
    thumbnail:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=150",
    color: "olive",
    view: "Back",
  },
  {
    id: 3,
    main: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=800",
    thumbnail:
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=150",
    color: "olive",
    view: "Side",
  },
  {
    id: 4,
    main: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
    thumbnail:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=150",
    color: "white",
    view: "Front",
  },
  {
    id: 5,
    main: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
    thumbnail:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=150",
    color: "black",
    view: "Front",
  },
  {
    id: 6,
    main: "https://images.unsplash.com/photo-1618354691229-88d47f285158?w=800",
    thumbnail:
      "https://images.unsplash.com/photo-1618354691229-88d47f285158?w=150",
    color: "black",
    view: "Back",
  },
];

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("L");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Gray");
  const [activeTab, setActiveTab] = useState("Description");
  const [mainImage, setMainImage] = useState(null);

  const product = {
    id: "SKS4512",
    name: "V-neck cotton T-shirt",
    category: "CLOTHING",
    price: 59.99,
    rating: 4,
    reviewCount: 154,
    colors: [
      { name: "Beige", code: "bg-[#E8DCCA]" },
      { name: "Gray", code: "bg-gray-500" },
      { name: "Dark Gray", code: "bg-gray-700" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/products/v-neck-1.jpg",
      "/images/products/v-neck-2.jpg",
      "/images/products/v-neck-3.jpg",
      "/images/products/v-neck-4.jpg",
      "/images/products/v-neck-5.jpg",
      "/images/products/v-neck-6.jpg",
    ],
    vendor: "Modave",
    stock: "In Stock",
    discountCodes: [
      { code: "SAVE5", discount: "10% OFF" },
      { code: "SALE25", discount: "25% OFF" },
    ],
  };

  const productGalleryImages = [
    {
      id: 1,
      main: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800",
      thumbnail:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=150",
      color: "olive",
    },
    {
      id: 2,
      main: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800",
      thumbnail:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=150",
      color: "olive",
    },
    {
      id: 3,
      main: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=800",
      thumbnail:
        "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=150",
      color: "olive",
    },
    {
      id: 4,
      main: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
      thumbnail:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=150",
      color: "white",
    },
    {
      id: 5,
      main: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
      thumbnail:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=150",
      color: "black",
    },
    {
      id: 6,
      main: "https://images.unsplash.com/photo-1618354691229-88d47f285158?w=800",
      thumbnail:
        "https://images.unsplash.com/photo-1618354691229-88d47f285158?w=150",
      color: "black",
    },
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "V-neck cotton T-shirt",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=500",
      colors: ["olive", "white", "black"],
      isNew: true,
      sale: false,
    },
    {
      id: 2,
      name: "Polarized sunglasses",
      price: 79.99,
      originalPrice: 99.99,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
      colors: ["brown", "black"],
      isNew: false,
      sale: true,
      salePercentage: 25,
    },
    {
      id: 3,
      name: "Ramie shirt with pockets",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=500",
      colors: ["beige", "white"],
      isNew: false,
      sale: true,
      salePercentage: 33,
    },
    {
      id: 4,
      name: "Ribbed cotton-blend top",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500",
      colors: ["gray", "black", "white"],
      isNew: true,
      sale: false,
    },
  ];

  const recentlyViewed = [
    {
      id: 5,
      name: "Belt wrap dress",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500",
      colors: ["mint", "beige"],
      isNew: false,
      sale: false,
    },
    {
      id: 6,
      name: "Double-button trench coat",
      price: 239.99,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
      colors: ["beige", "black"],
      isNew: false,
      sale: false,
    },
    {
      id: 7,
      name: "Sleeveless ribbed top",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
      colors: ["white", "black", "gray"],
      isNew: false,
      sale: false,
    },
    {
      id: 8,
      name: "Classic sunglasses",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500",
      colors: ["brown", "black"],
      isNew: false,
      sale: false,
    },
  ];

  const productImages = [
    "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=500",
    "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
    "https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=500",
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500",
    "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8">
        <Link to="/" className="hover:text-gray-600">
          Homepage
        </Link>
        <span className="text-gray-400">/</span>
        <span>{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="flex gap-4">
          {/* <ProductGallery /> */}
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <div className="text-sm text-gray-500 mb-2">{product.category}</div>
            <h1 className="text-2xl font-medium mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2">({product.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center text-red-500">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                </svg>
                16 sold in last 32 hours
              </div>
            </div>

            <div className="text-xl font-medium mb-6">${product.price}</div>

            {/* Sustainability Info */}
            <p className="text-sm text-gray-600 mb-6">
              The garments labelled as Committed are products that have been
              produced using sustainable fibres or processes, reducing their
              environmental impact.
            </p>

            {/* Live View Count */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              28 people are viewing this right now
            </div>

            {/* Discount Codes */}
            <div className="mb-6">
              <div className="text-sm mb-2">Useable discount codes:</div>
              <div className="flex gap-2">
                {product.discountCodes.map((discount, index) => (
                  <span
                    key={index}
                    className="inline-block bg-red-500 text-white text-sm px-3 py-1 rounded"
                  >
                    {discount.discount} {discount.code}
                  </span>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <div className="text-sm mb-2">Colors: {selectedColor}</div>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full ${color.code} ${
                      selectedColor === color.name
                        ? "ring-2 ring-black ring-offset-2"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Selected size: {selectedSize}</span>
                <button className="text-sm underline">Size Guide</button>
              </div>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-lg border ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-200 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <div className="text-sm mb-2">Quantity</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <button className="flex-1 bg-black text-white py-3 rounded-full hover:bg-gray-900">
                ADD TO CART - ${product.price}
              </button>
              <button className="w-12 h-12 flex items-center justify-center border rounded-full hover:bg-gray-100">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            <button className="w-full bg-red-500 text-white py-3 rounded-full hover:bg-red-600 mb-6">
              BUY IT NOW
            </button>

            {/* Additional Info */}
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                Guaranteed safe checkout
                <div className="flex gap-2">
                  <img
                    src="/images/payment/visa.png"
                    alt="Visa"
                    className="h-6"
                  />
                  <img
                    src="/images/payment/mastercard.png"
                    alt="Mastercard"
                    className="h-6"
                  />
                  <img
                    src="/images/payment/amex.png"
                    alt="American Express"
                    className="h-6"
                  />
                  <img
                    src="/images/payment/paypal.png"
                    alt="PayPal"
                    className="h-6"
                  />
                  <img
                    src="/images/payment/discover.png"
                    alt="Discover"
                    className="h-6"
                  />
                </div>
              </div>

              <button className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Ask a Question
              </button>

              <button className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-12">
        <div className="border-b mb-8">
          <div className="flex gap-8">
            {[
              "Description",
              "Customer Reviews",
              "Shipping & Returns",
              "Return Policies",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 relative ${
                  activeTab === tab
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="prose max-w-none">
          {activeTab === "Description" && (
            <>
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">STRETCH STRAP TOP</h3>
                <p>
                  Nodding to retro styles, this Hyperbole T-shirt is defined by
                  its off-the- shoulder design. It's spun from a green stretch
                  cotton jersey and adorned with an embroidered AC logo on the
                  front, a brand's signature.
                </p>
              </div>
              <div>
                <p>
                  Thick knitted fabric. Short design. Straight design. Rounded
                  neck. Sleeveless. Straps. Unlined. Cable knit finish. Co-ord.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mt-16">
        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-8">Recently Viewed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recentlyViewed.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 border-t pt-8">
        <div className="flex items-center justify-center gap-4">
          <img src="/images/payment/visa.png" alt="Visa" className="h-8" />
          <img
            src="/images/payment/mastercard.png"
            alt="Mastercard"
            className="h-8"
          />
          <img
            src="/images/payment/amex.png"
            alt="American Express"
            className="h-8"
          />
          <img src="/images/payment/paypal.png" alt="PayPal" className="h-8" />
          <img
            src="/images/payment/discover.png"
            alt="Discover"
            className="h-8"
          />
          <img
            src="/images/payment/diners.png"
            alt="Diners Club"
            className="h-8"
          />
        </div>
      </div>
    </div>
  );
};

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(productGalleryImages[0]);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="flex gap-4">
      {/* Thumbnail Column */}
      <div className="flex flex-col gap-4">
        {productGalleryImages.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`w-20 h-20 border rounded-lg overflow-hidden transition-all duration-200 ${
              selectedImage.id === image.id
                ? "border-black ring-1 ring-black"
                : "border-gray-200 hover:border-gray-400"
            }`}
          >
            <img
              src={image.thumbnail}
              alt={`Product view ${image.id}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 relative">
        <div
          className={`aspect-[3/4] rounded-lg overflow-hidden ${
            isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <motion.img
            src={selectedImage.main}
            alt="Product main view"
            className="w-full h-full object-cover"
            initial={false}
            animate={{
              scale: isZoomed ? 1.5 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            const currentIndex = productGalleryImages.findIndex(
              (img) => img.id === selectedImage.id
            );
            const prevIndex =
              currentIndex === 0
                ? productGalleryImages.length - 1
                : currentIndex - 1;
            setSelectedImage(productGalleryImages[prevIndex]);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            const currentIndex = productGalleryImages.findIndex(
              (img) => img.id === selectedImage.id
            );
            const nextIndex =
              currentIndex === productGalleryImages.length - 1
                ? 0
                : currentIndex + 1;
            setSelectedImage(productGalleryImages[nextIndex]);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Color Indicator */}
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm shadow-md">
          {selectedImage.color.charAt(0).toUpperCase() +
            selectedImage.color.slice(1)}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="group">
      <div className="relative mb-4">
        {product.sale && (
          <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-sm rounded">
            SALE {product.salePercentage}% OFF
          </span>
        )}
        <div className="aspect-[3/4] overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <button className="flex-1 bg-white text-black py-2 rounded-full hover:bg-gray-100">
              Quick View
            </button>
            <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-100">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-sm font-medium mb-1">{product.name}</h3>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">${product.price}</span>
        {product.originalPrice && (
          <span className="text-sm text-gray-500 line-through">
            ${product.originalPrice}
          </span>
        )}
      </div>
      <div className="flex gap-1 mt-2">
        {product.colors.map((color) => (
          <div
            key={color}
            className={`w-4 h-4 rounded-full border ${
              color === "white" ? "bg-white" : `bg-${color}-500`
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
