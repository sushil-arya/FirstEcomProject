import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    rating: 5,
    date: "2024-03-15",
    title: "Amazing quality and style!",
    comment:
      "I absolutely love this dress! The fabric quality is excellent, and the fit is perfect. I've received so many compliments wearing it.",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400",
    productName: "Floral Summer Dress",
    verified: true,
    helpful: 24,
    replies: 2,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 4,
    date: "2024-03-12",
    title: "Great casual wear",
    comment:
      "The t-shirt is very comfortable and the material feels premium. Sizing runs a bit large, so I'd recommend going one size down.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    productName: "Essential Cotton T-shirt",
    verified: true,
    helpful: 15,
    replies: 1,
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    rating: 5,
    date: "2024-03-10",
    title: "Perfect accessory!",
    comment:
      "This bag is exactly what I was looking for! The leather quality is outstanding, and it's the perfect size for everyday use.",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400",
    productName: "Leather Tote Bag",
    verified: true,
    helpful: 32,
    replies: 3,
  },
  {
    id: 4,
    name: "David Martinez",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    rating: 4,
    date: "2024-03-08",
    title: "Stylish and comfortable",
    comment:
      "These shoes are not only stylish but also very comfortable for all-day wear. The only minor issue is that they took a few days to break in.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
    productName: "Classic Leather Sneakers",
    verified: true,
    helpful: 18,
    replies: 1,
  },
];

const CustomerReviews = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [expandedReview, setExpandedReview] = useState(null);
  const [helpfulClicks, setHelpfulClicks] = useState({});

  // Filter options
  const filters = [
    { id: "all", label: "All Reviews" },
    { id: "5", label: "5 Stars" },
    { id: "4", label: "4 Stars" },
    { id: "3", label: "3 Stars" },
    { id: "2", label: "2 Stars" },
    { id: "1", label: "1 Star" },
  ];

  // Sort options
  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "helpful", label: "Most Helpful" },
    { value: "rating-high", label: "Highest Rating" },
    { value: "rating-low", label: "Lowest Rating" },
  ];

  // Filter reviews
  const filteredReviews = reviews.filter(
    (review) =>
      activeFilter === "all" || review.rating === parseInt(activeFilter)
  );

  // Sort reviews
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.date) - new Date(a.date);
      case "oldest":
        return new Date(a.date) - new Date(b.date);
      case "helpful":
        return (
          b.helpful +
          (helpfulClicks[b.id] || 0) -
          (a.helpful + (helpfulClicks[a.id] || 0))
        );
      case "rating-high":
        return b.rating - a.rating;
      case "rating-low":
        return a.rating - b.rating;
      default:
        return 0;
    }
  });

  // Handle helpful click
  const handleHelpfulClick = (reviewId) => {
    setHelpfulClicks((prev) => ({
      ...prev,
      [reviewId]: (prev[reviewId] || 0) + 1,
    }));
  };

  // Rating Stars Component
  const RatingStars = ({ rating }) => {
    return (
      <div className="flex gap-1">
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
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Customer Reviews</h2>
            <div className="flex justify-center items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-medium">4.8</span>
                <RatingStars rating={5} />
              </div>
              <span className="text-gray-500">
                Based on {reviews.length} reviews
              </span>
            </div>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    activeFilter === filter.id
                      ? "bg-black text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-white"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Reviews List */}
          <div className="space-y-8">
            <AnimatePresence>
              {sortedReviews.map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  {/* Review Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{review.name}</h3>
                          {review.verified && (
                            <span className="text-green-500 text-sm">
                              ✓ Verified Purchase
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <RatingStars rating={review.rating} />
                          <span>•</span>
                          <time>
                            {new Date(review.date).toLocaleDateString()}
                          </time>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">{review.title}</h4>
                    <p className="text-gray-600">
                      {expandedReview === review.id
                        ? review.comment
                        : review.comment.slice(0, 150) +
                          (review.comment.length > 150 ? "..." : "")}
                    </p>
                    {review.comment.length > 150 && (
                      <button
                        onClick={() =>
                          setExpandedReview(
                            expandedReview === review.id ? null : review.id
                          )
                        }
                        className="text-sm text-gray-500 hover:text-black mt-2"
                      >
                        {expandedReview === review.id
                          ? "Show less"
                          : "Read more"}
                      </button>
                    )}
                  </div>

                  {/* Review Image */}
                  {review.image && (
                    <div className="mb-4">
                      <img
                        src={review.image}
                        alt={`${review.productName} review`}
                        className="w-32 h-32 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => window.open(review.image, "_blank")}
                      />
                    </div>
                  )}

                  {/* Review Actions */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleHelpfulClick(review.id)}
                        className="flex items-center gap-2 hover:text-black"
                      >
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
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                        Helpful (
                        {review.helpful + (helpfulClicks[review.id] || 0)})
                      </button>
                      <button className="hover:text-black">
                        Reply ({review.replies})
                      </button>
                    </div>
                    <span>Product: {review.productName}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
