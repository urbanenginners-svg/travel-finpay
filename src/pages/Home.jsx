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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-skyblue to-teal">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of happy travelers who trust Fin Holidays for their dream vacations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tours">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-skyblue px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all"
                >
                  Explore Destinations
                </motion.button>
              </Link>
              <Link to="/insurance">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/30 transition-all"
                >
                  Get Travel Insurance
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
