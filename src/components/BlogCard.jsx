import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiClock, FiEye, FiHeart, FiArrowRight } from 'react-icons/fi'

const BlogCard = ({ blog, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -8 }}
      className="glass-card overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-skyblue text-white px-3 py-1 rounded-full text-sm font-semibold">
          {blog.category}
        </div>
        {blog.featured && (
          <div className="absolute top-4 right-4 bg-gold text-navy px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-navy/60 mb-3">
          <div className="flex items-center space-x-1">
            <FiClock className="text-skyblue" />
            <span>{blog.readTime}</span>
          </div>
          <span>{blog.date}</span>
        </div>

        {/* Title */}
        <Link to={`/blog/${blog.slug}`}>
          <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-skyblue transition-colors line-clamp-2 cursor-pointer">
            {blog.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-navy/70 text-sm mb-4 line-clamp-3">
          {blog.excerpt}
        </p>

        {/* Author */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-navy/10">
          <div className="flex items-center space-x-3">
            <img 
              src={blog.authorImage} 
              alt={blog.author}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="text-sm font-semibold text-navy">{blog.author}</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-sm text-navy/60">
            <div className="flex items-center space-x-1">
              <FiEye />
              <span>{blog.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiHeart />
              <span>{blog.likes}</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-teal/10 text-teal px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <Link to={`/blog/${blog.slug}`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-2 text-skyblue font-semibold text-sm group"
          >
            <span>Read More</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default BlogCard
