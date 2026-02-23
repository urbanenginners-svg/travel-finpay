import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const FiltersSidebar = ({ type = 'tours' }) => {
  const [openSections, setOpenSections] = useState({
    price: true,
    duration: false,
    category: true,
    rating: false
  })

  const [filters, setFilters] = useState({
    priceRange: [0, 5000],
    duration: [],
    categories: [],
    rating: 0
  })

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const tourCategories = ["Beach", "Adventure", "Cultural", "Luxury", "Romance", "City", "Wellness", "Nature"]
  const durations = ["1-3 Days", "4-7 Days", "8-14 Days", "15+ Days"]

  return (
    <div className="glass-card p-6 sticky top-24">
      <h3 className="text-xl font-bold text-navy mb-6">Filters</h3>

      {/* Price Range */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="font-semibold text-navy">Price Range</span>
          {openSections.price ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        
        {openSections.price && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="space-y-3"
          >
            <input
              type="range"
              min="0"
              max="5000"
              value={filters.priceRange[1]}
              onChange={(e) => setFilters({
                ...filters,
                priceRange: [0, parseInt(e.target.value)]
              })}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-navy/70">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Category */}
      {type === 'tours' && (
        <div className="mb-6">
          <button
            onClick={() => toggleSection('category')}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-semibold text-navy">Category</span>
            {openSections.category ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          
          {openSections.category && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="space-y-2"
            >
              {tourCategories.map((category) => (
                <label key={category} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-skyblue rounded focus:ring-skyblue"
                    checked={filters.categories.includes(category)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFilters({
                          ...filters,
                          categories: [...filters.categories, category]
                        })
                      } else {
                        setFilters({
                          ...filters,
                          categories: filters.categories.filter(c => c !== category)
                        })
                      }
                    }}
                  />
                  <span className="text-sm text-navy/70">{category}</span>
                </label>
              ))}
            </motion.div>
          )}
        </div>
      )}

      {/* Duration */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('duration')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="font-semibold text-navy">Duration</span>
          {openSections.duration ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        
        {openSections.duration && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="space-y-2"
          >
            {durations.map((duration) => (
              <label key={duration} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-skyblue rounded focus:ring-skyblue"
                />
                <span className="text-sm text-navy/70">{duration}</span>
              </label>
            ))}
          </motion.div>
        )}
      </div>

      {/* Rating */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('rating')}
          className="flex items-center justify-between w-full mb-3"
        >
          <span className="font-semibold text-navy">Minimum Rating</span>
          {openSections.rating ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        
        {openSections.rating && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="space-y-2"
          >
            {[4.5, 4.0, 3.5, 3.0].map((rating) => (
              <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  className="w-4 h-4 text-skyblue focus:ring-skyblue"
                  checked={filters.rating === rating}
                  onChange={() => setFilters({ ...filters, rating })}
                />
                <span className="text-sm text-navy/70">{rating}+ Stars</span>
              </label>
            ))}
          </motion.div>
        )}
      </div>

      {/* Reset & Apply Buttons */}
      <div className="space-y-2">
        <button className="w-full btn-primary">
          Apply Filters
        </button>
        <button className="w-full btn-outline">
          Reset All
        </button>
      </div>
    </div>
  )
}

export default FiltersSidebar
