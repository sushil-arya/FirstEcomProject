const InstagramShop = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "/images/instagram/insta-1.jpg",
      likes: 234,
      comments: 12
    },
    {
      id: 2,
      image: "/images/instagram/insta-2.jpg",
      likes: 187,
      comments: 8
    },
    {
      id: 3,
      image: "/images/instagram/insta-3.jpg",
      likes: 342,
      comments: 15
    },
    {
      id: 4,
      image: "/images/instagram/insta-4.jpg",
      likes: 298,
      comments: 21
    },
    {
      id: 5,
      image: "/images/instagram/insta-5.jpg",
      likes: 156,
      comments: 6
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium mb-4">Shop Instagram</h2>
          <p className="text-gray-600">Follow us on Instagram @rhodove</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={`https://instagram.com/p/${post.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="flex gap-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                    {post.likes}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" />
                    </svg>
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramShop; 