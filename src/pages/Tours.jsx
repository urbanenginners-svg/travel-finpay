import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PackageCard from '../components/PackageCard'
import FiltersSidebar from '../components/FiltersSidebar'
import { toursData, categories } from '../data/toursData'
import { FiGrid, FiList } from 'react-icons/fi'

const Tours = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popular')
  const [filters, setFilters] = useState({
    maxPrice: 5000,
    durations: [],
    categories: [],
    minRating: 0
  })

  const getDurationInDays = (durationText) => {
    const match = durationText.match(/(\d+)\s*Days/i)
    return match ? parseInt(match[1], 10) : 0
  }

  const matchesDurationBucket = (tourDays, bucket) => {
    if (bucket === '1-3 Days') return tourDays >= 1 && tourDays <= 3
    if (bucket === '4-7 Days') return tourDays >= 4 && tourDays <= 7
    if (bucket === '8-14 Days') return tourDays >= 8 && tourDays <= 14
    if (bucket === '15+ Days') return tourDays >= 15
    return true
  }

  const displayedTours = useMemo(() => {
    const filtered = toursData.filter((tour) => {
      const tourDays = getDurationInDays(tour.duration)

      if (activeCategory !== 'All' && tour.category !== activeCategory) {
        return false
      }

      if (filters.categories.length > 0 && !filters.categories.includes(tour.category)) {
        return false
      }

      if (filters.durations.length > 0) {
        const isAnyDurationMatch = filters.durations.some((bucket) => matchesDurationBucket(tourDays, bucket))
        if (!isAnyDurationMatch) return false
      }

      if (filters.minRating > 0 && tour.rating < filters.minRating) {
        return false
      }

      if (tour.price > filters.maxPrice) {
        return false
      }

      return true
    })

    const sorted = [...filtered]
    if (sortBy === 'price-low') sorted.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-high') sorted.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') sorted.sort((a, b) => b.rating - a.rating)
    if (sortBy === 'duration') sorted.sort((a, b) => getDurationInDays(a.duration) - getDurationInDays(b.duration))

    return sorted
  }, [activeCategory, filters, sortBy])

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
  }

  const handleResetFilters = () => {
    setFilters({
      maxPrice: 5000,
      durations: [],
      categories: [],
      minRating: 0
    })
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
        <div className="site-container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-title"
          >
            Explore Tour Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="page-lead"
          >
            Discover handpicked destinations and create unforgettable memories
          </motion.p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-white shadow-soft py-4 sticky top-20 z-40">
        <div className="site-container">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 flex-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`chip-button ${
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
      <div className="site-container py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <FiltersSidebar
              type="tours"
              filters={filters}
              onChange={setFilters}
              onReset={handleResetFilters}
            />
          </div>

          {/* Tours Grid */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-navy/70">
                Showing <span className="font-semibold text-navy">{displayedTours.length}</span> tours
              </p>
              <select
                className="form-select max-w-[220px]"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Sort by: Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="duration">Duration</option>
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
