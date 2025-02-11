import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dummy product data with realistic images
const products = {
  new: [
    {
      id: 1,
      name: "V-neck cotton T-shirt",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=500",
      colors: ["olive", "white", "black"],
      isNew: true,
      sale: false,
      stock: 15,
    },
    {
      id: 2,
      name: "Polarized sunglasses",
      price: 79.99,
      originalPrice: 99.99,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
      colors: ["brown"],
      isNew: true,
      sale: true,
      salePercentage: 25,
      stock: 8,
    },
    {
      id: 3,
      name: "Ramie shirt with pockets",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
      colors: ["beige", "white"],
      isNew: true,
      sale: false,
      stock: 12,
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
      stock: 20,
    },
  ],
  best: [
    {
      id: 5,
      name: "Belt wrap dress",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500",
      colors: ["mint", "beige"],
      isNew: false,
      sale: false,
      rating: 4.9,
      reviews: 128,
      stock: 18,
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
      rating: 4.8,
      reviews: 95,
      stock: 7,
    },
    {
      id: 7,
      name: "V-neck cotton T-shirt",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
      colors: ["white", "black", "gray"],
      isNew: false,
      sale: false,
      rating: 4.7,
      reviews: 156,
      stock: 25,
    },
    {
      id: 8,
      name: "Polarized sunglasses",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500",
      colors: ["brown", "black"],
      isNew: false,
      sale: false,
      rating: 4.9,
      reviews: 89,
      stock: 10,
    },
  ],
  sale: [
    {
      id: 9,
      name: "Ramie shirt with pockets",
      price: 59.99,
      originalPrice: 89.99,
      image:
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500",
      colors: ["olive", "beige"],
      isNew: false,
      sale: true,
      salePercentage: 33,
      stock: 5,
    },
    {
      id: 10,
      name: "Ribbed cotton-blend top",
      price: 69.99,
      originalPrice: 89.99,
      image:
        "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500",
      colors: ["black", "white"],
      isNew: false,
      sale: true,
      salePercentage: 22,
      stock: 15,
    },
    {
      id: 11,
      name: "Chest pocket cotton over shirt",
      price: 99.25,
      originalPrice: 149.99,
      image:
        "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=500",
      colors: ["black", "olive"],
      isNew: false,
      sale: true,
      salePercentage: 33,
      stock: 8,
    },
    {
      id: 12,
      name: "Cotton shopper bag",
      price: 59.99,
      originalPrice: 89.99,
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500",
      colors: ["white", "navy"],
      isNew: false,
      sale: true,
      salePercentage: 33,
      stock: 12,
    },
  ],
};

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("new");
  const [isLoading, setIsLoading] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const sizes = ["XS", "S", "M", "L", "XL"];

  // Handle tab change with loading state
  const handleTabChange = (tab) => {
    setIsLoading(true);
    setActiveTab(tab);
    setTimeout(() => setIsLoading(false), 500);
  };

  // Toggle wishlist
  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Add to cart
  const addToCart = (product) => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    const cartItem = {
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    };

    setCart((prev) => [...prev, cartItem]);
    setQuickViewProduct(null);
    setSelectedSize("");
    setSelectedColor("");
  };

  // Rating component
  const Rating = ({ rating, reviews }) => (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      {reviews && <span className="text-sm text-gray-500">({reviews})</span>}
    </div>
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg p-1 bg-gray-100">
            {[
              { id: "new", label: "New Arrivals" },
              { id: "best", label: "Best Seller" },
              { id: "sale", label: "On Sale" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            // Loading skeleton
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="animate-pulse">
                  <div className="bg-gray-200 aspect-[3/4] mb-4 rounded-lg" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-1/4" />
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {products[activeTab].map((product) => (
                <div key={product.id} className="group">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[3/4] object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      {product.sale && (
                        <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">
                          -{product.salePercentage}%
                        </span>
                      )}
                      {product.stock <= 10 && (
                        <span className="bg-yellow-500 text-white px-2 py-1 text-xs font-medium rounded">
                          Low Stock
                        </span>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <button
                          onClick={() => setQuickViewProduct(product)}
                          className="flex-1 bg-white text-black py-2 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium"
                        >
                          Quick View
                        </button>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            wishlist.includes(product.id)
                              ? "bg-red-500 text-white"
                              : "bg-white text-black hover:bg-gray-100"
                          }`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <h3 className="text-sm font-medium mb-1">{product.name}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    {product.rating && (
                      <Rating
                        rating={product.rating}
                        reviews={product.reviews}
                      />
                    )}
                  </div>

                  {/* Color Options */}
                  <div className="flex gap-1">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`w-4 h-4 rounded-full border ${
                          color === "white" ? "bg-white" : `bg-${color}-500`
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick View Modal */}
        {quickViewProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setQuickViewProduct(null)}
                    className="text-gray-500 hover:text-black"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div>
                    <img
                      src={quickViewProduct.image}
                      alt={quickViewProduct.name}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div>
                    <h3 className="text-2xl font-medium mb-2">
                      {quickViewProduct.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-medium">
                        ${quickViewProduct.price}
                      </span>
                      {quickViewProduct.originalPrice && (
                        <span className="text-gray-500 line-through">
                          ${quickViewProduct.originalPrice}
                        </span>
                      )}
                    </div>

                    {quickViewProduct.rating && (
                      <div className="mb-6">
                        <Rating
                          rating={quickViewProduct.rating}
                          reviews={quickViewProduct.reviews}
                        />
                      </div>
                    )}

                    {/* Size Selection */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">Size</h4>
                      <div className="flex gap-2">
                        {sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`w-10 h-10 rounded-lg border flex items-center justify-center text-sm ${
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

                    {/* Color Selection */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">Color</h4>
                      <div className="flex gap-2">
                        {quickViewProduct.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-10 h-10 rounded-lg border ${
                              color === "white" ? "bg-white" : `bg-${color}-500`
                            } ${
                              selectedColor === color
                                ? "ring-2 ring-black ring-offset-2"
                                : ""
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Stock Status */}
                    <div className="mb-6">
                      <span
                        className={`text-sm ${
                          quickViewProduct.stock <= 10
                            ? "text-yellow-500"
                            : "text-green-500"
                        }`}
                      >
                        {quickViewProduct.stock} items left in stock
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => addToCart(quickViewProduct)}
                      className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-900 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductTabs;
