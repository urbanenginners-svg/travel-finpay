import { motion } from 'framer-motion'
import InsuranceCard from '../components/InsuranceCard'
import { insurancePlans, insuranceFAQ, claimProcess } from '../data/insurancePlans'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { MdPhone, MdEmail, MdChat } from 'react-icons/md'
import { useState } from 'react'

const Insurance = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-pearl"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-navy to-skyblue text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Travel with Confidence</h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive travel insurance plans to protect your journey, 
              from unexpected medical expenses to trip cancellations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Insurance Plans */}
      <section className="py-20 bg-pearl">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Choose Your Protection Plan
            </h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              Select the coverage that best fits your travel needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insurancePlans.map((plan, index) => (
              <InsuranceCard key={plan.id} plan={plan} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Quote Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-8">
              <h2 className="text-3xl font-bold text-navy mb-6 text-center">
                Get a Quick Quote
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Where are you traveling?"
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-skyblue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Trip Duration
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-skyblue focus:outline-none">
                    <option>1-7 days</option>
                    <option>8-14 days</option>
                    <option>15-30 days</option>
                    <option>31+ days</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-skyblue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Number of Travelers
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-skyblue focus:outline-none">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>Family (3+)</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary"
              >
                Get My Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Claims Process */}
      <section className="py-20 bg-pearl">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Simple Claims Process
            </h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              Filing a claim is easy and straightforward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {claimProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-skyblue to-teal text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-navy/70">{step.description}</p>
                </div>
                {index < claimProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-skyblue/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              Got questions? We've got answers
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {insuranceFAQ.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-navy pr-4">{faq.question}</span>
                  {openFAQ === index ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-navy/70 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-skyblue to-teal text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-xl text-white/90 mb-8">
              Our insurance experts are here to assist you 24/7
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <MdPhone />, title: 'Call Us', detail: '+1 (555) 123-4567' },
              { icon: <MdEmail />, title: 'Email Us', detail: 'insurance@finholidays.com' },
              { icon: <MdChat />, title: 'Live Chat', detail: 'Available 24/7' }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center cursor-pointer"
              >
                <div className="text-4xl mb-3">{contact.icon}</div>
                <h3 className="font-bold text-xl mb-2">{contact.title}</h3>
                <p className="text-white/90">{contact.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Insurance
