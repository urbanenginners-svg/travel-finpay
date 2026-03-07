import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSearch, FiCalendar, FiUsers, FiMapPin } from 'react-icons/fi'
import { MdFlight, MdCardTravel, MdHealthAndSafety } from 'react-icons/md'

const SearchWidget = () => {
  const [activeTab, setActiveTab] = useState('flights')
  const [tripType, setTripType] = useState('roundtrip')

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="relative z-20 -mt-5 mx-auto max-w-6xl px-4"
    >
      <div className="glass-card p-6 md:p-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: 'flights', label: 'Flights', icon: <MdFlight /> },
            { id: 'tours', label: 'Tours', icon: <MdCardTravel /> },
            { id: 'insurance', label: 'Insurance', icon: <MdHealthAndSafety /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-skyblue text-white shadow-lg'
                  : 'bg-white/50 text-navy hover:bg-white/70'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Flights Search */}
        {activeTab === 'flights' && (
          <div className="space-y-4">
            {/* Trip Type */}
            <div className="flex gap-4">
              <button
                onClick={() => setTripType('roundtrip')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  tripType === 'roundtrip'
                    ? 'bg-skyblue text-white'
                    : 'bg-white/50 text-navy hover:bg-white/70'
                }`}
              >
                Round Trip
              </button>
              <button
                onClick={() => setTripType('oneway')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  tripType === 'oneway'
                    ? 'bg-skyblue text-white'
                    : 'bg-white/50 text-navy hover:bg-white/70'
                }`}
              >
                One Way
              </button>
            </div>

            {/* Search Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <FiMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy/60" />
                <input
                  type="text"
                  placeholder="From"
                  className="form-control-icon"
                />
              </div>
              <div className="relative">
                <FiMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy/60" />
                <input
                  type="text"
                  placeholder="To"
                  className="form-control-icon"
                />
              </div>
              <div className="relative">
                <FiCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy/60" />
                <input
                  type="date"
                  className="form-control-icon"
                />
              </div>
              {tripType === 'roundtrip' && (
                <div className="relative">
                  <FiCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy/60" />
                  <input
                    type="date"
                    className="form-control-icon"
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <FiUsers className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy/60" />
                <select className="form-control-icon appearance-none">
                  <option>1 Traveler</option>
                  <option>2 Travelers</option>
                  <option>3 Travelers</option>
                  <option>4+ Travelers</option>
                </select>
              </div>
              <div className="relative">
                <select className="form-select">
                  <option>Economy</option>
                  <option>Premium Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 btn-primary"
              >
                <FiSearch />
                <span>Search Flights</span>
              </motion.button>
            </div>
          </div>
        )}

        {/* Tours Search */}
        {activeTab === 'tours' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <FiMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy/60" />
                <input
                  type="text"
                  placeholder="Destination"
                  className="form-control-icon"
                />
              </div>
              <div className="relative">
                <FiCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy/60" />
                <input
                  type="date"
                  placeholder="Travel Date"
                  className="form-control-icon"
                />
              </div>
              <div className="relative">
                <select className="form-select">
                  <option>Tour Type</option>
                  <option>Beach</option>
                  <option>Adventure</option>
                  <option>Cultural</option>
                  <option>Luxury</option>
                </select>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center space-x-2 btn-primary"
            >
              <FiSearch />
              <span>Search Tours</span>
            </motion.button>
          </div>
        )}

        {/* Insurance Search */}
        {activeTab === 'insurance' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <FiMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy/60" />
                <input
                  type="text"
                  placeholder="Destination Country"
                  className="form-control-icon"
                />
              </div>
              <div className="relative">
                <FiCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy/60" />
                <input
                  type="date"
                  placeholder="Trip Start Date"
                  className="form-control-icon"
                />
              </div>
              <div className="relative">
                <FiUsers className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy/60" />
                <select className="form-control-icon appearance-none">
                  <option>Number of Travelers</option>
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>Family (3+)</option>
                </select>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center space-x-2 btn-primary"
            >
              <FiSearch />
              <span>Get Insurance Quote</span>
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default SearchWidget
