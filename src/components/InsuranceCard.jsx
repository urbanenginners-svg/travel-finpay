import { motion } from 'framer-motion'
import { FiCheck, FiX } from 'react-icons/fi'
import { MdHealthAndSafety } from 'react-icons/md'

const InsuranceCard = ({ plan, delay = 0 }) => {
  const colorClasses = {
    skyblue: 'border-skyblue bg-skyblue/5',
    teal: 'border-teal bg-teal/5',
    gold: 'border-gold bg-gold/5',
    navy: 'border-navy bg-navy/5'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`glass-card p-8 border-2 ${colorClasses[plan.color]} ${
        plan.popular ? 'ring-4 ring-gold/30 relative' : ''
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gold text-navy px-6 py-1 rounded-full text-sm font-bold">
            Most Popular
          </div>
        </div>
      )}

      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${plan.color} to-${plan.color}/60 flex items-center justify-center`}>
          <MdHealthAndSafety className="text-white text-3xl" />
        </div>
      </div>

      {/* Plan Name */}
      <h3 className="text-2xl font-bold text-navy text-center mb-2">
        {plan.name}
      </h3>

      {/* Description */}
      <p className="text-navy/60 text-center text-sm mb-6">
        {plan.description}
      </p>

      {/* Price */}
      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold text-navy">${plan.price}</span>
          <span className="text-navy/60 ml-2">/ {plan.duration.split('(')[0]}</span>
        </div>
        <div className="text-sm text-navy/60 mt-1">{plan.duration}</div>
      </div>

      {/* Coverage Summary */}
      <div className="bg-white/50 rounded-xl p-4 mb-6 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-navy/70">Medical Coverage:</span>
          <span className="font-semibold text-navy">{plan.coverage.medical}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-navy/70">Evacuation:</span>
          <span className="font-semibold text-navy">{plan.coverage.evacuation}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-navy/70">Trip Cancellation:</span>
          <span className="font-semibold text-navy">{plan.coverage.cancellation}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-navy/70">Baggage Loss:</span>
          <span className="font-semibold text-navy">{plan.coverage.baggage}</span>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-2">
            <FiCheck className="text-teal mt-1 flex-shrink-0" />
            <span className="text-sm text-navy/70">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`w-full py-3 rounded-xl font-semibold transition-all ${
          plan.popular
            ? 'bg-gold text-navy hover:bg-gold/90'
            : 'bg-skyblue text-white hover:bg-skyblue/90'
        }`}
      >
        Get Quote
      </motion.button>

      {/* Exclusions (small text) */}
      <div className="mt-4 text-xs text-navy/50 text-center">
        Some exclusions apply
      </div>
    </motion.div>
  )
}

export default InsuranceCard
