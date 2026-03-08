import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { MdFlight, MdCardTravel, MdHealthAndSafety } from 'react-icons/md'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'tours', path: '/tours', label: 'Tours', icon: <MdCardTravel /> },
    { id: 'flights', path: '/flights', label: 'Flights', icon: <MdFlight /> },
    { id: 'insurance', path: '/insurance', label: 'Insurance', icon: <MdHealthAndSafety /> },
    { id: 'blog', path: '/blog', label: 'Blog' },
    { id: 'itinerary', path: '/itinerary', label: 'Itinerary Builder', shortLabel: 'Itinerary' },
    { id: 'community', path: '/community', label: 'Community' },

  ]

  const showSolidNavbar = isScrolled || isOpen

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        showSolidNavbar
          ? 'bg-white/95 backdrop-blur-lg shadow-soft py-2 sm:py-3'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="site-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="bg-gradient-to-br from-skyblue to-teal p-1.5 sm:p-2 rounded-lg sm:rounded-xl">
                <MdFlight className="text-white text-xl sm:text-2xl" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-navy">
                fin<span className="text-skyblue">yourtrip</span>
              </span>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 flex-1 justify-center mx-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`flex items-center space-x-3 font-medium text-sm xl:text-base transition-colors hover:text-skyblue whitespace-nowrap ${
                  location.pathname === link.path ? 'text-skyblue' : 'text-navy'
                }`}
              >
                {link.icon && <span className="text-base xl:text-lg">{link.icon}</span>}
                <span className="hidden xl:inline">{link.label}</span>
                <span className="xl:hidden">{link.shortLabel || link.label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:block flex-shrink-0">
            <Link to="/tours">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary bg-gradient-to-r from-skyblue to-teal px-4 py-2.5 xl:px-6 xl:py-3 rounded-lg xl:rounded-xl shadow-md hover:shadow-lg"
              >
                Book Now
              </motion.button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-navy text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-3"
            >
              <div className="mobile-menu-scroll max-h-[calc(100vh-100px)] overflow-y-auto py-4 px-3 space-y-3 rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl border border-gray-200">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={link.path}
                    className={`flex items-center space-x-3 py-3 px-4 rounded-xl font-medium transition-all ${
                      location.pathname === link.path
                        ? 'text-skyblue bg-skyblue/10'
                        : 'text-navy hover:bg-gray-100'
                    }`}
                  >
                    {link.icon && <span className="text-lg shrink-0">{link.icon}</span>}
                    <span>{link.label}</span>
                  </Link>
                ))}

                <Link to="/tours" className="block pt-2">
                  <button className="w-full btn-primary bg-gradient-to-r from-skyblue to-teal shadow-md hover:shadow-lg">
                    Book Now
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar