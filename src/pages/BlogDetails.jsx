import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getBlogBySlug, getRelatedBlogs } from '../data/blogsData'
import BlogCard from '../components/BlogCard'
import { MdArrowBack } from 'react-icons/md'
import { FiClock, FiEye, FiHeart, FiShare2 } from 'react-icons/fi'

const BlogDetails = () => {
  const { slug } = useParams()
  const blog = getBlogBySlug(slug)
  const relatedBlogs = blog ? getRelatedBlogs(blog.id) : []

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-navy/70">Article not found</p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-pearl pt-20"
    >
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/blog">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-navy hover:text-skyblue transition-colors"
          >
            <MdArrowBack className="text-xl" />
            <span className="font-medium">Back to Blog</span>
          </motion.button>
        </Link>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-teal text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {blog.title}
            </h1>
          </div>

          {/* Author & Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-navy/10">
            <div className="flex items-center space-x-4">
              <img 
                src={blog.authorImage} 
                alt={blog.author}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <div className="font-semibold text-navy text-lg">{blog.author}</div>
                <div className="text-navy/60">{blog.date}</div>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-navy/70">
              <div className="flex items-center space-x-2">
                <FiClock />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiEye />
                <span>{blog.views.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiHeart />
                <span>{blog.likes}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-xl">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-navy/80 leading-relaxed mb-6">
              {blog.excerpt}
            </p>
            <p className="text-navy/70 leading-relaxed mb-6">
              {blog.content}
            </p>

            {/* Sample article content */}
            <h2 className="text-3xl font-bold text-navy mt-12 mb-4">Introduction</h2>
            <p className="text-navy/70 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 className="text-3xl font-bold text-navy mt-12 mb-4">Key Takeaways</h2>
            <ul className="space-y-3 mb-6">
              <li className="text-navy/70">Plan your trip well in advance for better deals</li>
              <li className="text-navy/70">Research local customs and traditions</li>
              <li className="text-navy/70">Pack light but don't forget essentials</li>
              <li className="text-navy/70">Stay flexible with your itinerary</li>
              <li className="text-navy/70">Immerse yourself in local experiences</li>
            </ul>

            <h2 className="text-3xl font-bold text-navy mt-12 mb-4">Conclusion</h2>
            <p className="text-navy/70 leading-relaxed mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-12">
            {blog.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="glass-card p-6 mb-12">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-navy">Share this article</h3>
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-skyblue text-white flex items-center justify-center"
                >
                  <FiShare2 />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center"
                >
                  <FiHeart />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Related Articles
            </h2>
            <p className="text-navy/70 text-lg">
              Continue exploring travel inspiration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedBlogs.map((relatedBlog, index) => (
              <BlogCard key={relatedBlog.id} blog={relatedBlog} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default BlogDetails
