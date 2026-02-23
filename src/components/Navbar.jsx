import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
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
    { path: '/', label: 'Home' },
    { path: '/tours', label: 'Tours', icon: <MdCardTravel /> },
    { path: '/flights', label: 'Flights', icon: <MdFlight /> },
    { path: '/insurance', label: 'Insurance', icon: <MdHealthAndSafety /> },
    { path: '/blog', label: 'Blog' },
    { path: '/itinerary', label: 'Itinerary Builder' },
    { path: '/community', label: 'Community' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-soft py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="bg-gradient-to-br from-skyblue to-teal p-2 rounded-xl">
                <MdFlight className="text-white text-2xl" />
              </div>
              <span className="text-2xl font-bold text-navy">
                Fin <span className="text-skyblue">Holidays</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 font-medium transition-colors hover:text-skyblue ${
                  location.pathname === link.path 
                    ? 'text-skyblue' 
                    : 'text-navy'
                }`}
              >
                {link.icon && <span className="text-lg">{link.icon}</span>}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/tours">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Book Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-navy text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center space-x-2 py-2 font-medium transition-colors ${
                      location.pathname === link.path 
                        ? 'text-skyblue' 
                        : 'text-navy'
                    }`}
                  >
                    {link.icon && <span className="text-lg">{link.icon}</span>}
                    <span>{link.label}</span>
                  </Link>
                ))}
                <Link to="/tours">
                  <button className="btn-primary w-full">Book Now</button>
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
