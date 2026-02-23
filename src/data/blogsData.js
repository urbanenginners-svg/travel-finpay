export const blogsData = [
  {
    id: 1,
    title: "10 Hidden Gems in Southeast Asia You Must Visit",
    slug: "hidden-gems-southeast-asia",
    author: "Sarah Mitchell",
    authorImage: "https://i.pravatar.cc/150?img=1",
    date: "February 15, 2026",
    category: "Travel Tips",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop",
    excerpt: "Discover breathtaking destinations off the beaten path that will make your Southeast Asian adventure unforgettable.",
    content: `Southeast Asia is filled with incredible destinations that often go unnoticed by mainstream tourism. Here are 10 hidden gems that deserve your attention...`,
    featured: true,
    tags: ["Southeast Asia", "Hidden Gems", "Adventure", "Backpacking"],
    views: 12450,
    likes: 328
  },
  {
    id: 2,
    title: "Ultimate Guide to Travel Insurance: What You Need to Know",
    slug: "travel-insurance-guide",
    author: "Michael Chen",
    authorImage: "https://i.pravatar.cc/150?img=2",
    date: "February 12, 2026",
    category: "Insurance",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop",
    excerpt: "Everything you need to know about choosing the right travel insurance for your next adventure.",
    content: `Travel insurance is essential for any trip, but choosing the right coverage can be confusing. Here's what you need to know...`,
    featured: true,
    tags: ["Insurance", "Travel Tips", "Safety", "Planning"],
    views: 9832,
    likes: 267
  },
  {
    id: 3,
    title: "How to Pack Light for a 2-Week European Vacation",
    slug: "pack-light-europe",
    author: "Emma Rodriguez",
    authorImage: "https://i.pravatar.cc/150?img=3",
    date: "February 10, 2026",
    category: "Travel Tips",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=800&auto=format&fit=crop",
    excerpt: "Master the art of minimalist packing with these expert tips for your European getaway.",
    content: `Packing light doesn't mean sacrificing style or comfort. Here's how to do it right...`,
    featured: false,
    tags: ["Packing", "Europe", "Travel Tips", "Minimalism"],
    views: 7621,
    likes: 189
  },
  {
    id: 4,
    title: "Best Time to Visit Maldives: A Month-by-Month Guide",
    slug: "best-time-maldives",
    author: "David Thompson",
    authorImage: "https://i.pravatar.cc/150?img=4",
    date: "February 8, 2026",
    category: "Destination Guide",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1589197331516-5c5d0f2e5f79?w=800&auto=format&fit=crop",
    excerpt: "Plan your perfect Maldives vacation with our comprehensive guide to weather, prices, and activities.",
    content: `The Maldives is a year-round destination, but timing your visit right can make all the difference...`,
    featured: true,
    tags: ["Maldives", "Beach", "Planning", "Weather"],
    views: 15234,
    likes: 412
  },
  {
    id: 5,
    title: "Digital Nomad Life: Working While Traveling the World",
    slug: "digital-nomad-guide",
    author: "Luna Park",
    authorImage: "https://i.pravatar.cc/150?img=5",
    date: "February 5, 2026",
    category: "Lifestyle",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop",
    excerpt: "Learn how to balance work and adventure as a digital nomad with practical tips and insights.",
    content: `The digital nomad lifestyle offers freedom and adventure, but it requires careful planning...`,
    featured: false,
    tags: ["Digital Nomad", "Remote Work", "Travel Tips", "Lifestyle"],
    views: 11087,
    likes: 345
  },
  {
    id: 6,
    title: "Top 15 Instagram-Worthy Destinations in 2026",
    slug: "instagram-destinations-2026",
    author: "Olivia Martinez",
    authorImage: "https://i.pravatar.cc/150?img=6",
    date: "February 1, 2026",
    category: "Travel Inspiration",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop",
    excerpt: "Capture stunning content at these picture-perfect locations around the globe.",
    content: `For travel content creators and Instagram enthusiasts, these destinations offer the perfect backdrop...`,
    featured: true,
    tags: ["Instagram", "Photography", "Travel Inspiration", "Social Media"],
    views: 18765,
    likes: 523
  },
  {
    id: 7,
    title: "Budget Travel: See the World Without Breaking the Bank",
    slug: "budget-travel-tips",
    author: "James Wilson",
    authorImage: "https://i.pravatar.cc/150?img=7",
    date: "January 28, 2026",
    category: "Budget Travel",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop",
    excerpt: "Proven strategies to travel more while spending less on flights, accommodation, and activities.",
    content: `You don't need to be rich to explore the world. Here are the best budget travel strategies...`,
    featured: false,
    tags: ["Budget Travel", "Money Saving", "Travel Tips", "Backpacking"],
    views: 9543,
    likes: 278
  },
  {
    id: 8,
    title: "Solo Female Travel: Safety Tips and Destination Recommendations",
    slug: "solo-female-travel",
    author: "Sofia Anderson",
    authorImage: "https://i.pravatar.cc/150?img=8",
    date: "January 25, 2026",
    category: "Solo Travel",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop",
    excerpt: "Empower your solo travel journey with essential safety tips and the best destinations for women.",
    content: `Solo female travel is an incredible way to discover yourself and the world. Here's how to do it safely...`,
    featured: false,
    tags: ["Solo Travel", "Female Travel", "Safety", "Empowerment"],
    views: 13298,
    likes: 445
  }
]

export const blogCategories = [
  "All",
  "Travel Tips",
  "Destination Guide",
  "Insurance",
  "Budget Travel",
  "Solo Travel",
  "Lifestyle",
  "Travel Inspiration"
]

export const getBlogBySlug = (slug) => blogsData.find(blog => blog.slug === slug)

export const getFeaturedBlogs = () => blogsData.filter(blog => blog.featured)

export const getBlogsByCategory = (category) => {
  if (category === "All") return blogsData
  return blogsData.filter(blog => blog.category === category)
}

export const getRelatedBlogs = (currentBlogId, limit = 3) => {
  return blogsData
    .filter(blog => blog.id !== currentBlogId)
    .slice(0, limit)
}
