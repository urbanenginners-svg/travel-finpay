import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiClock, FiStar, FiMapPin } from 'react-icons/fi'
import { MdArrowForward } from 'react-icons/md'

const PackageCard = ({ tour, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -10 }}
      className="glass-card overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-gold text-navy px-3 py-1 rounded-full text-sm font-semibold">
          ₹{tour.price}
        </div>
        {tour.featured && (
          <div className="absolute top-4 right-4 bg-teal text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Location & Rating */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1 text-navy/70">
            <FiMapPin className="text-skyblue" />
            <span className="text-sm font-medium">{tour.destination}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiStar className="text-gold fill-gold" />
            <span className="text-sm font-semibold text-navy">{tour.rating}</span>
            <span className="text-sm text-navy/60">({tour.reviews})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-skyblue transition-colors">
          {tour.title}
        </h3>

        {/* Duration */}
        <div className="flex items-center space-x-2 text-navy/70 mb-4">
          <FiClock className="text-skyblue" />
          <span className="text-sm">{tour.duration}</span>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tour.highlights.slice(0, 3).map((highlight, index) => (
            <span 
              key={index}
              className="text-xs bg-skyblue/10 text-skyblue px-3 py-1 rounded-full"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-navy/70 text-sm mb-4 line-clamp-2">
          {tour.description}
        </p>

        {/* Button */}
        <Link to={`/tours/${tour.id}`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center space-x-2 bg-skyblue text-white py-3 rounded-xl font-semibold hover:bg-skyblue/90 transition-colors group"
          >
            <span>View Details</span>
            <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default PackageCard
