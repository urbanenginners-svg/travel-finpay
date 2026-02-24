import { useState } from 'react'
import { motion } from 'framer-motion'
import FlightCard from '../components/FlightCard'
import PopularRoutes from '../components/PopularRoutes'
import SearchWidget from '../components/SearchWidget'
import { flightsData, airlines } from '../data/flightsData'
import { FiFilter } from 'react-icons/fi'

const Flights = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    airline: 'All Airlines',
    stops: 'All',
    maxPrice: 2000
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-pearl"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal text-white py-16 pt-28">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Search Flights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Find the best flight deals for your next journey
          </motion.p>
        </div>
      </div>

      {/* Search Widget */}
      <div className="relative z-20 -mt-16">
        <SearchWidget />
      </div>

      {/* Filters & Results */}
      <div className="container mx-auto px-4 py-12">
        {/* Filter Toggle & Sort */}
        <div className="flex items-center justify-between mb-6 glass-card p-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 text-navy font-medium hover:text-skyblue transition-colors"
          >
            <FiFilter />
            <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <span className="text-navy/70">
              <span className="font-semibold text-navy">{flightsData.length}</span> flights found
            </span>
            <select className="px-4 py-2 rounded-xl bg-white border-2 border-transparent focus:border-skyblue focus:outline-none">
              <option>Best Match</option>
              <option>Cheapest First</option>
              <option>Shortest Duration</option>
              <option>Earliest Departure</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="glass-card p-6 sticky top-24">
                <h3 className="text-xl font-bold text-navy mb-6">Filters</h3>

                {/* Airline Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-3">Airline</h4>
                  <select
                    value={filters.airline}
                    onChange={(e) => setFilters({ ...filters, airline: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl bg-white border-2 border-transparent focus:border-skyblue focus:outline-none"
                  >
                    {airlines.map((airline) => (
                      <option key={airline} value={airline}>{airline}</option>
                    ))}
                  </select>
                </div>

                {/* Stops Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-3">Stops</h4>
                  <div className="space-y-2">
                    {['All', 'Non-stop', '1 Stop', '2+ Stops'].map((stop) => (
                      <label key={stop} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="stops"
                          value={stop}
                          checked={filters.stops === stop}
                          onChange={(e) => setFilters({ ...filters, stops: e.target.value })}
                          className="w-4 h-4 text-skyblue focus:ring-skyblue"
                        />
                        <span className="text-sm text-navy/70">{stop}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-3">Max Price</h4>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ ...filters, maxPrice: parseInt(e.target.value) })}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-navy/70 mt-2">
                    <span>₹0</span>
                    <span>₹{filters.maxPrice}</span>
                  </div>
                </div>

                <button className="w-full btn-primary" onClick={handleSearch}>
                  Apply Filters
                </button>
              </div>
            </motion.div>
          )}

          {/* Flight Results */}
          <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
            {/* Loading Shimmer */}
            {isLoading ? (
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="glass-card p-6 animate-pulse">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-navy/10 rounded-lg" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-navy/10 rounded w-3/4" />
                        <div className="h-3 bg-navy/10 rounded w-1/2" />
                      </div>
                    </div>
                    <div className="h-20 bg-navy/10 rounded" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {flightsData.map((flight, index) => (
                  <FlightCard key={flight.id} flight={flight} delay={index * 0.05} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Popular Routes */}
      <PopularRoutes />
    </motion.div>
  )
}

export default Flights
