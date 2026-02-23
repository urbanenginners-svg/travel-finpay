import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import SearchWidget from '../components/SearchWidget'
import PackageCard from '../components/PackageCard'
import BlogCard from '../components/BlogCard'
import PopularRoutes from '../components/PopularRoutes'
import { getFeaturedTours } from '../data/toursData'
import { getFeaturedBlogs } from '../data/blogsData'
import { FiArrowRight, FiAward, FiUsers, FiGlobe, FiShield } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const Home = () => {
  const featuredTours = getFeaturedTours()
  const featuredBlogs = getFeaturedBlogs()
  const [counts, setCounts] = useState({
    destinations: 0,
    travelers: 0,
    rating: 0,
    years: 0
  })

  // Animated counter
  useEffect(() => {
    const targets = { destinations: 200, travelers: 50000, rating: 4.9, years: 15 }
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let current = { destinations: 0, travelers: 0, rating: 0, years: 0 }
    const increments = {
      destinations: targets.destinations / steps,
      travelers: targets.travelers / steps,
      rating: targets.rating / steps,
      years: targets.years / steps
    }

    const timer = setInterval(() => {
      current.destinations = Math.min(current.destinations + increments.destinations, targets.destinations)
      current.travelers = Math.min(current.travelers + increments.travelers, targets.travelers)
      current.rating = Math.min(current.rating + increments.rating, targets.rating)
      current.years = Math.min(current.years + increments.years, targets.years)

      setCounts({
        destinations: Math.floor(current.destinations),
        travelers: Math.floor(current.travelers),
        rating: current.rating.toFixed(1),
        years: Math.floor(current.years)
      })

      if (current.destinations >= targets.destinations) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Search Widget */}
      <SearchWidget />

      {/* Featured Tours Section */}
      <section className="py-20 bg-pearl">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Featured Tour Packages
            </h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              Handpicked destinations for unforgettable experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredTours.slice(0, 6).map((tour, index) => (
              <PackageCard key={tour.id} tour={tour} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/tours">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 btn-primary"
              >
                <span>View All Packages</span>
                <FiArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Popular Routes */}
      <PopularRoutes />

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-navy/90 text-white relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-skyblue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Fin Holidays?
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                We're not just a travel company – we're your trusted partner in creating 
                extraordinary journeys. From the moment you start planning to the day you 
                return home, we're with you every step of the way.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <FiGlobe />,
                    title: 'Global Reach',
                    description: 'Access to 200+ destinations worldwide with local expertise'
                  },
                  {
                    icon: <FiShield />,
                    title: 'Trusted & Secure',
                    description: 'Fully licensed and insured with comprehensive travel protection'
                  },
                  {
                    icon: <FiAward />,
                    title: 'Award Winning',
                    description: 'Recognized for excellence in travel services and customer satisfaction'
                  },
                  {
                    icon: <FiUsers />,
                    title: '24/7 Support',
                    description: 'Round-the-clock assistance wherever your journey takes you'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-skyblue to-teal flex items-center justify-center flex-shrink-0 text-2xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: counts.destinations + '+', label: 'Destinations', icon: <FiGlobe /> },
                { number: counts.travelers.toLocaleString() + '+', label: 'Happy Travelers', icon: <FiUsers /> },
                { number: counts.rating, label: 'Average Rating', icon: <FiAward /> },
                { number: counts.years + '+', label: 'Years Experience', icon: <FiShield /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl mb-2 text-gold">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2 text-gold">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-white/70 mb-4">Certified & Recognized By</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['IATA', 'ASTA', 'CLIA', 'BBB A+'].map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl font-semibold text-white"
                >
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Travel Inspiration & Tips
            </h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              Expert advice, destination guides, and inspiring stories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredBlogs.slice(0, 3).map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 btn-primary"
              >
                <span>Read More Articles</span>
                <FiArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA + Newsletter Section */}
      <section className="py-28 bg-gradient-to-br from-skyblue via-teal/80 to-skyblue/60 relative overflow-hidden">
        {/* Floating Gradient Blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-teal/40 to-skyblue/40 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-skyblue/30 to-teal/30 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/10 rounded-full blur-2xl" />
        
        {/* Subtle Background Illustrations */}
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute top-20 right-20 w-32 h-32 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
          <svg className="absolute bottom-40 left-20 w-40 h-40 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Top CTA Area */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="backdrop-blur-xl bg-white/20 rounded-3xl p-12 md:p-16 border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center"
            >
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
              >
                Ready to Start Your Adventure?
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                Join thousands of happy travelers who trust Fin Holidays for their dream vacations. 
                Discover extraordinary destinations and create memories that last a lifetime.
              </motion.p>

              {/* Premium Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link to="/tours">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center space-x-2 bg-gradient-to-r from-navy to-navy/90 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-300"
                  >
                    <span>Explore Destinations</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                
                <Link to="/community">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center space-x-2 backdrop-blur-md bg-white/20 text-white px-8 py-4 rounded-full font-semibold border-2 border-white/40 hover:border-white/60 transition-all duration-300 shadow-lg"
                  >
                    <span>Join Community</span>
                    <FiUsers />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Visual Separator */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="my-20 max-w-3xl mx-auto"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-1 blur-sm" />
          </motion.div>

          {/* Newsletter Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="backdrop-blur-xl bg-white/20 rounded-3xl p-8 md:p-12 border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Newsletter Heading */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
              >
                Subscribe to Our Newsletter
              </motion.h3>

              {/* Newsletter Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="text-white/75 text-center mb-8 text-lg"
              >
                Get exclusive travel deals, tips, and destination guides delivered to your inbox
              </motion.p>

              {/* Newsletter Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 0.6 }}
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-4"
              >
                <div className="relative flex-1">
                  <FiUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 text-xl" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-6 py-4 bg-white/30 backdrop-blur-md rounded-full border border-white/40 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal/50 transition-all"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-navy to-navy/90 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe Now
                </motion.button>
              </motion.form>

              {/* Privacy Note */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-white/60 text-sm text-center mt-4"
              >
                🔒 We respect your privacy. Unsubscribe at any time.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
