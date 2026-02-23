import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiSearch, FiArrowRight } from 'react-icons/fi'
import { MdFlight } from 'react-icons/md'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&auto=format&fit=crop',
      alt: 'Tropical Beach Paradise'
    },
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&auto=format&fit=crop',
      alt: 'Mountain Adventure'
    },
    {
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&auto=format&fit=crop',
      alt: 'City Skyline'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image Slider */}
      {heroImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/50 to-transparent" />

      {/* Floating Animated Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-skyblue/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-teal/30 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">
                Trusted by 10,000+ Happy Travelers
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Explore the World with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-skyblue via-teal to-gold">
                Fin Holidays
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              Flights, Tours & Travel Insurance — All in One Smart Platform.
              <br />
              Your journey to unforgettable adventures starts here.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/tours">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(77, 168, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center space-x-2 bg-skyblue text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all"
                >
                  <FiSearch className="text-xl" />
                  <span>Start Exploring</span>
                  <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link to="/flights">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/30 transition-all"
                >
                  <MdFlight className="text-xl" />
                  <span>Search Flights</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-8 mt-12"
            >
              {[
                { number: '200+', label: 'Destinations' },
                { number: '50K+', label: 'Happy Travelers' },
                { number: '4.9', label: 'Average Rating' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index} className="text-white">
                  <div className="text-3xl font-bold text-gold">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSection
