import { motion } from 'framer-motion'
import { MdFlight } from 'react-icons/md'
import { popularRoutes } from '../data/flightsData'

const PopularRoutes = () => {
  return (
    <section className="section-spacing-tight bg-white">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading-wrap"
        >
          <h2 className="section-title">
            Popular Flight Routes
          </h2>
          <p className="section-subtitle">
            Discover our most traveled destinations with unbeatable prices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRoutes.map((route, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <div className="text-lg font-bold text-navy">{route.from}</div>
                  <div className="text-sm text-navy/60">Origin</div>
                </div>
                
                <div className="flex-shrink-0 mx-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-skyblue to-teal flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MdFlight className="text-white text-xl" />
                  </div>
                </div>

                <div className="flex-1 text-right">
                  <div className="text-lg font-bold text-navy">{route.to}</div>
                  <div className="text-sm text-navy/60">Destination</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-navy/10">
                <div className="text-sm text-navy/70">Starting from</div>
                <div className="text-2xl font-bold text-skyblue">₹{route.basePrice}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularRoutes
