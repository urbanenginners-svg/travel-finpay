import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar, FiDollarSign, FiMapPin, FiSend, FiUsers } from 'react-icons/fi'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    destination: '',
    travelDate: '',
    travellers: '2',
    budget: '1000-2500'
  })

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2400&auto=format&fit=crop&q=85',
      alt: 'Bright tropical beach destination'
    },
    {
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=2400&auto=format&fit=crop&q=85',
      alt: 'Sunlit mountain lake and forest landscape'
    },
    {
      url: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=2400&auto=format&fit=crop&q=85',
      alt: 'Vibrant overwater villas destination'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = `New Travel Inquiry - ${formData.destination}`
    const body = [
      'Hello Operations Team,',
      '',
      'Please find my travel inquiry below:',
      `Destination: ${formData.destination}`,
      `Travel Date: ${formData.travelDate}`,
      `Number of Travellers: ${formData.travellers}`,
      `Budget: ${formData.budget}`,
      '',
      'Please contact me with suitable options.',
      '',
      'Thanks,'
    ].join('\n')

    window.location.href = `mailto:operations@finpayremit.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/50 to-navy/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(77,168,255,0.22),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(79,209,197,0.2),transparent_50%)]" />

      {/* Decorative Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-8 -right-20 w-72 h-72 md:w-96 md:h-96 bg-skyblue/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.22, 1],
          opacity: [0.18, 0.3, 0.18]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute -bottom-16 -left-16 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-teal/30 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 site-container pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[78vh]">
          <div className="xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-5"
            >
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">Premium tours, flights and insurance in one place</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-5"
            >
              Explore the world with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-skyblue via-teal to-gold">finyoutrip</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed mb-8"
            >
              Your journey to unforgettable memories starts here.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link to="/tours" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full btn-primary inline-flex items-center justify-center gap-2"
                >
                  Explore Packages
                  <FiArrowRight />
                </motion.button>
              </Link>
              <Link to="/flights" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-6 py-3 rounded-xl font-semibold border-2 border-white/60 text-white hover:bg-white/20 transition-all"
                >
                  Find Flights
                </motion.button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="xl:col-span-5"
          >
            <div className="rounded-2xl border border-white/30 bg-white/85 backdrop-blur-xl shadow-[0_18px_50px_rgba(15,23,42,0.35)] p-6 sm:p-7">
              <h2 className="text-2xl font-bold text-navy mb-1">Plan Your Trip</h2>
              <p className="text-sm text-navy/70 mb-6">Share your preferences and our team will curate options for you.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/60" />
                  <input
                    type="text"
                    required
                    placeholder="Destination"
                    value={formData.destination}
                    onChange={(e) => handleFormChange('destination', e.target.value)}
                    className="form-control-icon"
                  />
                </div>

                <div className="relative">
                  <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/60 pointer-events-none z-10" />
                  <input
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={(e) => handleFormChange('travelDate', e.target.value)}
                    className="form-control-icon pr-3 min-w-0 [color-scheme:light]"
                  />
                  {!formData.travelDate && (
                    <span className="absolute left-12 top-1/2 -translate-y-1/2 text-navy/40 text-sm pointer-events-none select-none">
                      Travel Date
                    </span>
                  )}
                </div>

                <div className="relative">
                  <FiUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/60" />
                  <select
                    value={formData.travellers}
                    onChange={(e) => handleFormChange('travellers', e.target.value)}
                    className="form-control-icon appearance-none"
                  >
                    <option value="1">1 Traveller</option>
                    <option value="2">2 Travellers</option>
                    <option value="3">3 Travellers</option>
                    <option value="4+">4+ Travellers</option>
                  </select>
                </div>

                <div className="relative">
                  <FiDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/60" />
                  <select
                    value={formData.budget}
                    onChange={(e) => handleFormChange('budget', e.target.value)}
                    className="form-control-icon appearance-none"
                  >
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary inline-flex items-center justify-center gap-2"
                >
                  <FiSend />
                  Submit Inquiry
                </motion.button>
              </form>

              <p className="text-xs text-navy/60 mt-4">
                Inquiry email will be sent to <span className="font-semibold text-navy">operations@finpayremit.com</span>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 lg:mt-12"
        >
          {[
            { number: '200+', label: 'Destinations' },
            { number: '50K+', label: 'Happy Travelers' },
            { number: '4.9', label: 'Average Rating' },
            { number: '24/7', label: 'Travel Support' }
          ].map((stat, index) => (
            <div key={index} className="rounded-xl bg-white/15 border border-white/25 px-4 py-3 text-center md:text-left backdrop-blur-sm">
              <div className="text-2xl font-bold text-gold">{stat.number}</div>
              <div className="text-sm text-white/85">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Accessibility helper */}
      <span className="sr-only">{heroImages[currentSlide].alt}</span>
    </section>
  )
}

export default HeroSection
