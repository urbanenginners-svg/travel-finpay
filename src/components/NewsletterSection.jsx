import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'

const NewsletterSection = ({ compact = false }) => {
  if (compact) {
    // Compact version for Footer
    return (
      <div className="bg-gradient-to-br from-skyblue via-teal/80 to-skyblue/60 py-12 relative overflow-hidden">
        {/* Floating Gradient Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal/30 to-skyblue/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-skyblue/20 to-teal/20 rounded-full blur-3xl animate-float-slower" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-8 border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              {/* Heading */}
              <h3 className="text-3xl font-bold text-white text-center mb-3">
                Subscribe to Our Newsletter
              </h3>

              {/* Subtext */}
              <p className="text-white/75 text-center mb-6 text-base">
                Get exclusive travel deals, tips, and destination guides delivered to your inbox
              </p>

              {/* Form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="relative flex-1">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 text-lg" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-6 py-3 bg-white/30 backdrop-blur-md rounded-full border border-white/40 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal/50 transition-all"
                  />
                </div>
                
                <button
                  type="submit"
                  className="bg-gradient-to-r from-navy to-navy/90 text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>

              {/* Privacy Note */}
              <p className="text-white/60 text-xs text-center mt-3">
                🔒 We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Full version for standalone sections
  return (
    <section className="py-20 bg-gradient-to-br from-skyblue via-teal/80 to-skyblue/60 relative overflow-hidden">
      {/* Floating Gradient Blobs */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-linear-to-br from-teal/40 to-skyblue/40 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-150 h-150 bg-linear-to-tl from-skyblue/30 to-teal/30 rounded-full blur-3xl animate-float-slower" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-white/10 rounded-full blur-2xl" />
      
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
        {/* Newsletter Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="backdrop-blur-xl bg-white/20 rounded-3xl p-8 md:p-12 border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
          >
            {/* Newsletter Heading */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
            >
              Subscribe to Our Newsletter
            </motion.h3>

            {/* Newsletter Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/75 text-center mb-8 text-lg"
            >
              Get exclusive travel deals, tips, and destination guides delivered to your inbox
            </motion.p>

            {/* Newsletter Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="relative flex-1">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 text-xl" />
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
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-white/60 text-sm text-center mt-4"
            >
              🔒 We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsletterSection
