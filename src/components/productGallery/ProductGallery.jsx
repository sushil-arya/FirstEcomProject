import { useState } from "react";
import { motion } from "framer-motion";

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

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(productGalleryImages[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleMouseMove = (e) => {
    if (!isZoomed) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({ x, y });
  };

  const handleImageNavigation = (direction) => {
    const currentIndex = productGalleryImages.findIndex(
      (img) => img.id === selectedImage.id
    );

    if (direction === "next") {
      const nextIndex = (currentIndex + 1) % productGalleryImages.length;
      setSelectedImage(productGalleryImages[nextIndex]);
    } else {
      const prevIndex =
        currentIndex === 0 ? productGalleryImages.length - 1 : currentIndex - 1;
      setSelectedImage(productGalleryImages[prevIndex]);
    }
  };

  return (
    <div className="relative">
      {/* Main Gallery Container */}
      <div className="flex gap-4">
        {/* Thumbnails Column */}
        <div className="flex flex-col gap-4">
          {productGalleryImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`w-20 h-20 border rounded-lg overflow-hidden transition-all duration-200 relative
                ${
                  selectedImage.id === image.id
                    ? "border-black ring-1 ring-black"
                    : "border-gray-200 hover:border-gray-400"
                }`}
            >
              <img
                src={image.thumbnail}
                alt={`Product ${image.view} view - ${image.color}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 text-center">
                {image.view}
              </div>
            </button>
          ))}
        </div>

        {/* Main Image Container */}
        <div className="flex-1 relative">
          <div
            className={`aspect-[3/4] rounded-lg overflow-hidden relative ${
              isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setIsZoomed(false)}
          >
            <motion.img
              src={selectedImage.main}
              alt={`Product ${selectedImage.view} view - ${selectedImage.color}`}
              className="w-full h-full object-cover"
              style={
                isZoomed
                  ? {
                      transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    }
                  : undefined
              }
              animate={{
                scale: isZoomed ? 2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => handleImageNavigation("prev")}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all duration-200"
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
            onClick={() => handleImageNavigation("next")}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all duration-200"
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

          {/* Image Info */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-white px-3 py-1 rounded-full text-sm shadow-md">
              {selectedImage.color.charAt(0).toUpperCase() +
                selectedImage.color.slice(1)}
            </span>
            <span className="bg-white px-3 py-1 rounded-full text-sm shadow-md">
              {selectedImage.view}
            </span>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all duration-200"
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
                d="M4 8V4m0 0h4M4 4l5 5m11-5V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <svg
              className="w-8 h-8"
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
          <img
            src={selectedImage.main}
            alt={`Product ${selectedImage.view} view - ${selectedImage.color}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
