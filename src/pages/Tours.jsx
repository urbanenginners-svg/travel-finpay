import { useState } from 'react'
import { motion } from 'framer-motion'
import PackageCard from '../components/PackageCard'
import FiltersSidebar from '../components/FiltersSidebar'
import { toursData, categories } from '../data/toursData'
import { FiGrid, FiList } from 'react-icons/fi'

const Tours = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [activeCategory, setActiveCategory] = useState('All')
  const [displayedTours, setDisplayedTours] = useState(toursData)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    if (category === 'All') {
      setDisplayedTours(toursData)
    } else {
      setDisplayedTours(toursData.filter(tour => tour.category === category))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-pearl"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-navy to-skyblue text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Explore Tour Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Discover handpicked destinations and create unforgettable memories
          </motion.p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-white shadow-soft py-4 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 flex-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-2 rounded-xl font-medium whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? 'bg-skyblue text-white shadow-lg'
                      : 'bg-pearl text-navy hover:bg-skyblue/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${
                  viewMode === 'grid' ? 'bg-skyblue text-white' : 'bg-pearl text-navy'
                }`}
              >
                <FiGrid className="text-xl" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${
                  viewMode === 'list' ? 'bg-skyblue text-white' : 'bg-pearl text-navy'
                }`}
              >
                <FiList className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <FiltersSidebar type="tours" />
          </div>

          {/* Tours Grid */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-navy/70">
                Showing <span className="font-semibold text-navy">{displayedTours.length}</span> tours
              </p>
              <select className="px-4 py-2 rounded-xl bg-white border-2 border-transparent focus:border-skyblue focus:outline-none">
                <option>Sort by: Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Duration</option>
              </select>
            </div>

            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2' 
                : 'grid-cols-1'
            }`}>
              {displayedTours.map((tour, index) => (
                <PackageCard key={tour.id} tour={tour} delay={index * 0.05} />
              ))}
            </div>

            {displayedTours.length === 0 && (
              <div className="text-center py-20">
                <p className="text-navy/70 text-lg">No tours found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Tours
