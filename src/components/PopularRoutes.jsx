import { motion } from 'framer-motion'
import { MdFlight } from 'react-icons/md'
import { FiArrowRight, FiClock } from 'react-icons/fi'
import { popularRoutes } from '../data/flightsData'

const PopularRoutes = () => {
  const destinationImages = {
    Bali: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&auto=format&fit=crop&q=80',
    Thailand: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&auto=format&fit=crop&q=80',
    Singapore: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&auto=format&fit=crop&q=80',
    Goa: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&auto=format&fit=crop&q=80',
    Kashmir: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&auto=format&fit=crop&q=80',
    Dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop&q=80',
    'New York': 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=1200&auto=format&fit=crop&q=80'
  }

  return (
    <section className="section-spacing-tight bg-gradient-to-b from-white to-skyblue/10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {popularRoutes.map((route, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_14px_32px_rgba(15,23,42,0.08)] hover:shadow-[0_22px_42px_rgba(15,23,42,0.16)] transition-all duration-300"
            >
              <div className="relative h-28 sm:h-32 overflow-hidden">
                <img
                  src={destinationImages[route.to] || destinationImages.Dubai}
                  alt={`${route.to} skyline`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/55 via-navy/30 to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/95 text-navy text-xs font-semibold px-3 py-1 shadow-sm">
                  <FiClock className="text-[11px]" />
                  Fast Booking
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-[0.12em] text-navy/50 mb-1">Origin</div>
                    <div className="text-xl font-bold text-navy truncate">{route.from}</div>
                  </div>

                  <div className="mx-3 sm:mx-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-skyblue to-teal flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                      <MdFlight className="text-white text-xl" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 text-right">
                    <div className="text-xs uppercase tracking-[0.12em] text-navy/50 mb-1">Destination</div>
                    <div className="text-xl font-bold text-navy truncate">{route.to}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-navy/10">
                  <div>
                    <div className="text-xs uppercase tracking-[0.1em] text-navy/50">Starting from</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-skyblue mt-1">₹{route.basePrice}</div>
                  </div>
                  {/* <button className="inline-flex items-center gap-2 rounded-full border border-skyblue/25 bg-skyblue/10 text-skyblue font-semibold text-sm px-4 py-2 hover:bg-skyblue hover:text-white transition-colors">
                    View Fare
                    <FiArrowRight className="text-sm" />
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularRoutes
