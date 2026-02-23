import { motion } from 'framer-motion'
import { FiDownload, FiPlus, FiMapPin, FiCalendar, FiDollarSign } from 'react-icons/fi'
import { MdFlight, MdHotel, MdRestaurant } from 'react-icons/md'
import { useState } from 'react'

const ItineraryBuilder = () => {
  const [itineraryDays, setItineraryDays] = useState([
    {
      day: 1,
      activities: [
        { time: '09:00 AM', icon: <MdFlight />, title: 'Arrival at JFK Airport', description: 'Flight landing and airport pickup' },
        { time: '12:00 PM', icon: <MdHotel />, title: 'Hotel Check-in', description: 'The Plaza Hotel, Manhattan' },
        { time: '07:00 PM', icon: <MdRestaurant />, title: 'Dinner', description: 'Welcome dinner at local restaurant' }
      ]
    },
    {
      day: 2,
      activities: [
        { time: '09:00 AM', icon: <FiMapPin />, title: 'City Tour', description: 'Guided tour of major landmarks' },
        { time: '02:00 PM', icon: <MdRestaurant />, title: 'Lunch Break', description: 'Local cuisine experience' },
        { time: '05:00 PM', icon: <FiMapPin />, title: 'Museum Visit', description: 'Evening at the art museum' }
      ]
    }
  ])

  const sampleItineraries = [
    {
      title: '7-Day European Adventure',
      destination: 'Paris, Rome, Barcelona',
      days: 7,
      budget: '$2,500',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&auto=format&fit=crop'
    },
    {
      title: '5-Day Beach Paradise',
      destination: 'Maldives',
      days: 5,
      budget: '$1,800',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&auto=format&fit=crop'
    },
    {
      title: '10-Day Asian Explorer',
      destination: 'Tokyo, Bangkok, Singapore',
      days: 10,
      budget: '$3,200',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&auto=format&fit=crop'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-pearl"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-gold to-teal text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Itinerary Builder
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Create your perfect travel plan with our customizable itinerary tool
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customization Form */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 sticky top-24">
              <h3 className="text-xl font-bold text-navy mb-6">Trip Details</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    <FiMapPin className="inline mr-2" />
                    Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-skyblue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    <FiCalendar className="inline mr-2" />
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-skyblue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Number of Days
                  </label>
                  <input
                    type="number"
                    min="1"
                    defaultValue="7"
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-skyblue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    <FiDollarSign className="inline mr-2" />
                    Budget
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-skyblue focus:outline-none">
                    <option>Under $1,000</option>
                    <option>$1,000 - $2,500</option>
                    <option>$2,500 - $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Travel Style
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-skyblue focus:outline-none">
                    <option>Relaxation</option>
                    <option>Adventure</option>
                    <option>Cultural</option>
                    <option>Luxury</option>
                    <option>Budget</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full btn-primary"
                >
                  Generate Itinerary
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center space-x-2 btn-outline"
                >
                  <FiDownload />
                  <span>Download PDF</span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Itinerary Timeline */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy">Your Itinerary</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-skyblue font-semibold"
                >
                  <FiPlus />
                  <span>Add Day</span>
                </motion.button>
              </div>

              {/* Timeline */}
              <div className="space-y-8">
                {itineraryDays.map((dayData) => (
                  <div key={dayData.day} className="relative">
                    {/* Day Header */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-teal text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                        Day {dayData.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-navy">Day {dayData.day} Activities</h3>
                        <p className="text-navy/60 text-sm">Click activities to edit</p>
                      </div>
                      <button className="text-skyblue font-medium hover:text-skyblue/80">
                        Edit
                      </button>
                    </div>

                    {/* Activities */}
                    <div className="ml-8 border-l-2 border-skyblue/30 pl-8 space-y-6">
                      {dayData.activities.map((activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="relative bg-white/50 rounded-xl p-4 cursor-pointer"
                        >
                          <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-skyblue text-white flex items-center justify-center text-lg">
                            {activity.icon}
                          </div>
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="text-sm text-skyblue font-semibold mb-1">
                                {activity.time}
                              </div>
                              <h4 className="font-bold text-navy mb-1">{activity.title}</h4>
                              <p className="text-navy/70 text-sm">{activity.description}</p>
                            </div>
                            <button className="text-navy/40 hover:text-navy">
                              <FiPlus />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sample Itineraries */}
        <section className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Sample Itineraries
            </h2>
            <p className="text-navy/70 text-lg">
              Get inspired by our pre-built travel plans
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleItineraries.map((itinerary, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card overflow-hidden cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={itinerary.image} 
                    alt={itinerary.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2">{itinerary.title}</h3>
                  <p className="text-navy/70 mb-4">{itinerary.destination}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-navy/70">
                      <FiCalendar />
                      <span>{itinerary.days} Days</span>
                    </div>
                    <div className="font-semibold text-skyblue">{itinerary.budget}</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    className="w-full mt-4 btn-primary"
                  >
                    Use This Template
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default ItineraryBuilder
