import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi';
import { Rating } from '@mui/material';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext'; // Assuming you have a cart context
import { useWishlist } from '../../context/WishlistContext'; // Assuming you have a wishlist context

const RelatedProducts = ({ currentProductId }) => {
  const [activeTab, setActiveTab] = useState('related');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Fetch products based on active tab
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        if (activeTab === 'related') {
          // Fetch related products based on currentProductId
          const response = await fetch(`/api/products/related/${currentProductId}`);
          const data = await response.json();
          setProducts(data);
        } else {
          // Get recently viewed products from localStorage
          const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
          const response = await fetch(`/api/products/batch`, {
            method: 'POST',
            body: JSON.stringify({ ids: recentlyViewed }),
          });
          const data = await response.json();
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [activeTab, currentProductId]);

  // Track recently viewed products
  const trackRecentlyViewed = (productId) => {
    const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    const updatedRecentlyViewed = [
      productId,
      ...recentlyViewed.filter(id => id !== productId)
    ].slice(0, 10); // Keep only last 10 items
    localStorage.setItem('recentlyViewed', JSON.stringify(updatedRecentlyViewed));
  };

  // Quick view modal
  const QuickViewModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      >
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto p-6">
          <div className="flex justify-end">
            <button onClick={onClose} className="text-gray-500 hover:text-black">
              ✕
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-4">{product.name}</h2>
              <div className="flex items-center gap-2 mb-4">
                <Rating value={product.rating} readOnly precision={0.5} />
                <span className="text-sm text-gray-500">
                  ({product.reviewCount} reviews)
                </span>
              </div>
              <p className="text-xl font-medium mb-4">${product.price}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <button 
                onClick={() => {
                  addToCart(product);
                  onClose();
                }}
                className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Product Card component
  const ProductCard = ({ product }) => {
    const isWishlisted = isInWishlist(product.id);

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="group relative"
      >
        {/* Sale Tag */}
        {product.sale && (
          <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.saleTag}
          </div>
        )}

        {/* Product Image */}
        <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Quick actions overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <button
              onClick={() => setQuickViewProduct(product)}
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              title="Quick view"
            >
              <FiEye className="w-5 h-5" />
            </button>
            <button
              onClick={() => addToCart(product)}
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              title="Add to cart"
            >
              <FiShoppingCart className="w-5 h-5" />
            </button>
            <button
              onClick={() => isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}
              className={`p-2 bg-white rounded-full hover:bg-gray-100 transition-colors ${
                isWishlisted ? 'text-red-500' : ''
              }`}
              title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <FiHeart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-4">
          <Link 
            to={`/product/${product.id}`}
            onClick={() => trackRecentlyViewed(product.id)}
          >
            <h3 className="text-sm text-gray-700 hover:text-black">
              {product.name}
            </h3>
          </Link>
          
          <div className="flex items-center mt-2">
            <Rating value={product.rating} size="small" readOnly precision={0.5} />
            <span className="ml-2 text-sm text-gray-500">
              ({product.reviewCount})
            </span>
          </div>

          <div className="flex items-center mt-2">
            <span className="text-sm font-medium text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Color Options */}
          <div className="flex gap-1 mt-2">
            {product.colors?.map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
                title={`Color ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  if (loading) {
    return (
      <div className="w-full py-12 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
      </div>
    );
  }

  return (
    <div className="w-full py-12">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        {['related', 'recently'].map((tab) => (
          <button
            key={tab}
            className={`px-8 py-4 text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500 hover:text-black'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'related' ? 'Related Products' : 'Recently Viewed'}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
        />
      )}
    </div>
  );
};

export default RelatedProducts;