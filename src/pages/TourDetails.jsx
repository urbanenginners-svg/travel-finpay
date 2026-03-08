import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getToursById } from '../data/toursData'
import { FiClock, FiStar, FiMapPin, FiCheck, FiX, FiCalendar } from 'react-icons/fi'
import { MdArrowBack } from 'react-icons/md'
import { useState } from 'react'

const TourDetails = () => {
  const { id } = useParams()
  const tour = getToursById(id)
  const [activeTab, setActiveTab] = useState('overview')

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-navy/70">Tour not found</p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-pearl pt-20"
    >
      {/* Back Button */}
      <div className="site-container py-6">
        <Link to="/tours">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-navy hover:text-skyblue transition-colors"
          >
            <MdArrowBack className="text-xl" />
            <span className="font-medium">Back to Tours</span>
          </motion.button>
        </Link>
      </div>

      {/* Hero Image Gallery */}
      <div className="site-container">
        <div className="relative h-72 sm:h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={tour.image} 
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 break-words">{tour.title}</h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm sm:text-base">
              <div className="flex items-center space-x-1">
                <FiMapPin className="text-gold" />
                <span>{tour.destination}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FiStar className="text-gold fill-gold" />
                <span>{tour.rating} ({tour.reviews} reviews)</span>
              </div>
            </div>
          </div>
          {tour.featured && (
            <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-gold text-navy px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              Featured Tour
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="site-container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex space-x-1 sm:space-x-2 mb-6 border-b border-navy/10 overflow-x-auto pb-2">
              {['overview', 'itinerary', 'inclusions'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold capitalize whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? 'text-skyblue border-b-2 border-skyblue'
                      : 'text-navy/60 hover:text-navy'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-5 sm:p-8"
              >
                <h2 className="text-2xl font-bold text-navy mb-4">Tour Overview</h2>
                <p className="text-navy/70 mb-6 leading-relaxed">{tour.description}</p>

                <h3 className="text-xl font-bold text-navy mb-4">Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {tour.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <FiCheck className="text-teal flex-shrink-0" />
                      <span className="text-navy/70">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <div className="text-center p-3 sm:p-4 bg-skyblue/10 rounded-xl">
                    <FiClock className="text-2xl text-skyblue mx-auto mb-2" />
                    <div className="text-sm text-navy/60">Duration</div>
                    <div className="font-semibold text-navy text-sm sm:text-base break-words">{tour.duration}</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-teal/10 rounded-xl">
                    <FiMapPin className="text-2xl text-teal mx-auto mb-2" />
                    <div className="text-sm text-navy/60">Location</div>
                    <div className="font-semibold text-navy text-sm sm:text-base break-words">{tour.destination}</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gold/10 rounded-xl">
                    <FiStar className="text-2xl text-gold mx-auto mb-2" />
                    <div className="text-sm text-navy/60">Rating</div>
                    <div className="font-semibold text-navy">{tour.rating}/5</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-navy/10 rounded-xl">
                    <span className="text-xl sm:text-2xl font-bold text-navy mx-auto mb-2 block">${tour.price}</span>
                    <div className="text-sm text-navy/60">Per Person</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Itinerary Tab */}
            {activeTab === 'itinerary' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-5 sm:p-8"
              >
                <h2 className="text-2xl font-bold text-navy mb-6">Detailed Itinerary</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="flex space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-skyblue to-teal text-white flex items-center justify-center text-sm sm:text-base font-bold">
                          {day.day}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 pb-6 border-b border-navy/10 last:border-0">
                        <h3 className="text-base sm:text-lg font-bold text-navy mb-2 break-words">
                          Day {day.day}: {day.title}
                        </h3>
                        <p className="text-navy/70">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Inclusions Tab */}
            {activeTab === 'inclusions' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-5 sm:p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-navy mb-4">What's Included</h2>
                    <div className="space-y-3">
                      {tour.inclusions.map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <FiCheck className="text-teal mt-1 flex-shrink-0" />
                          <span className="text-navy/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-navy mb-4">What's Excluded</h2>
                    <div className="space-y-3">
                      {tour.exclusions.map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <FiX className="text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-navy/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 sticky top-24">
              <div className="mb-6">
                <div className="text-2xl sm:text-3xl font-bold text-navy mb-2">
                  ${tour.price}
                  <span className="text-base sm:text-lg font-normal text-navy/60"> / person</span>
                </div>
                <div className="flex items-center space-x-1 text-sm">
                  <FiStar className="text-gold fill-gold" />
                  <span className="font-semibold">{tour.rating}</span>
                  <span className="text-navy/60">({tour.reviews} reviews)</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    <FiCalendar className="inline mr-2" />
                    Select Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Number of Travelers
                  </label>
                  <select className="form-select">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4+ People</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full btn-primary mb-3"
              >
                Book Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full btn-outline"
              >
                Request Custom Quote
              </motion.button>

              <div className="mt-6 pt-6 border-t border-navy/10 space-y-3 text-sm text-navy/60">
                <div className="flex items-center space-x-2">
                  <FiCheck className="text-teal" />
                  <span>Free cancellation up to 24 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiCheck className="text-teal" />
                  <span>Reserve now, pay later</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiCheck className="text-teal" />
                  <span>Best price guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TourDetails
