import { motion } from 'framer-motion'
import { FiClock, FiWifi, FiMonitor } from 'react-icons/fi'
import { MdFlight, MdLuggage, MdAirlineSeatReclineExtra } from 'react-icons/md'

const FlightCard = ({ flight, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 hover:shadow-xl transition-all"
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        {/* Airline Logo & Name */}
        <div className="flex items-center space-x-4 lg:w-1/6">
          <img 
            src={flight.logo} 
            alt={flight.airline}
            className="w-16 h-16 object-contain"
          />
          <div className="lg:hidden">
            <div className="font-semibold text-navy">{flight.airline}</div>
            <div className="text-sm text-navy/60">{flight.aircraft}</div>
          </div>
        </div>

        {/* Flight Info */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            {/* Departure */}
            <div>
              <div className="text-2xl font-bold text-navy">{flight.departureTime}</div>
              <div className="text-sm text-navy/60">{flight.from}</div>
            </div>

            {/* Duration & Stops */}
            <div className="flex flex-col items-center flex-1 mx-4">
              <div className="text-sm text-navy/60 mb-1">{flight.duration}</div>
              <div className="relative w-full">
                <div className="h-0.5 bg-navy/20 w-full" />
                <MdFlight className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-skyblue text-xl" />
              </div>
              <div className="text-xs text-navy/60 mt-1">{flight.stops}</div>
            </div>

            {/* Arrival */}
            <div className="text-right">
              <div className="text-2xl font-bold text-navy">{flight.arrivalTime}</div>
              <div className="text-sm text-navy/60">{flight.to}</div>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-3 text-sm text-navy/70">
            {flight.amenities.slice(0, 4).map((amenity, index) => (
              <div key={index} className="flex items-center space-x-1">
                {amenity.includes('Wi-Fi') && <FiWifi className="text-skyblue" />}
                {amenity.includes('Entertainment') && <FiMonitor className="text-skyblue" />}
                {amenity.includes('Meals') && <MdAirlineSeatReclineExtra className="text-skyblue" />}
                <span className="text-xs">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="lg:w-1/6 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 lg:gap-3">
          <div className="text-right">
            <div className="text-sm text-navy/60">{flight.class}</div>
            <div className="text-3xl font-bold text-navy">${flight.price}</div>
            <div className="text-xs text-navy/60">per person</div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-skyblue text-white px-6 py-3 rounded-xl font-semibold hover:bg-skyblue/90 transition-colors whitespace-nowrap"
          >
            Select Flight
          </motion.button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-navy/10 text-sm text-navy/60">
        <div className="flex items-center space-x-2">
          <MdLuggage className="text-skyblue" />
          <span>{flight.baggage}</span>
        </div>
        <div className="flex items-center space-x-1">
          <span>Rating:</span>
          <span className="font-semibold text-gold">{flight.rating}/5</span>
        </div>
      </div>
    </motion.div>
  )
}

export default FlightCard
