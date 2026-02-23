import { useState } from 'react'
import { motion } from 'framer-motion'
import BlogCard from '../components/BlogCard'
import { blogsData, blogCategories } from '../data/blogsData'

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [displayedBlogs, setDisplayedBlogs] = useState(blogsData)
  const featuredBlog = blogsData.find(blog => blog.featured)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    if (category === 'All') {
      setDisplayedBlogs(blogsData)
    } else {
      setDisplayedBlogs(blogsData.filter(blog => blog.category === category))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-pearl"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-teal via-teal/90 to-purple-600 text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Travel Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Travel tips, destination guides, and inspiring stories
          </motion.p>
        </div>
      </div>

      {/* Featured Article Hero */}
      {featuredBlog && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 glass-card overflow-hidden"
            >
              <div className="relative h-96 lg:h-auto">
                <img 
                  src={featuredBlog.image} 
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gold text-navy px-4 py-2 rounded-full font-semibold">
                  Featured Article
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="text-sm text-skyblue font-semibold mb-2">
                  {featuredBlog.category}
                </div>
                <h2 className="text-3xl font-bold text-navy mb-4">
                  {featuredBlog.title}
                </h2>
                <p className="text-navy/70 mb-6 leading-relaxed">
                  {featuredBlog.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={featuredBlog.authorImage} 
                      alt={featuredBlog.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-navy">{featuredBlog.author}</div>
                      <div className="text-sm text-navy/60">{featuredBlog.date}</div>
                    </div>
                  </div>
                  <div className="text-sm text-navy/60">{featuredBlog.readTime}</div>
                </div>
                <motion.a
                  href={`/blog/${featuredBlog.slug}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary inline-block text-center"
                >
                  Read Full Article
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <div className="bg-white shadow-soft py-4 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-xl font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-teal text-white shadow-lg'
                    : 'bg-pearl text-navy hover:bg-teal/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy">
              {activeCategory === 'All' ? 'All Articles' : activeCategory}
            </h2>
            <p className="text-navy/70">
              <span className="font-semibold text-navy">{displayedBlogs.length}</span> articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} delay={index * 0.05} />
            ))}
          </div>

          {displayedBlogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-navy/70 text-lg">No articles found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-teal to-skyblue text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to get travel tips, destination guides, and exclusive deals
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-navy focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-teal px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Blog
