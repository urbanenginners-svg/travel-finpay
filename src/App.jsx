import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tours from './pages/Tours'
import TourDetails from './pages/TourDetails'
import Flights from './pages/Flights'
import Insurance from './pages/Insurance'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import ItineraryBuilder from './pages/ItineraryBuilder'
import Community from './pages/Community'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/itinerary" element={<ItineraryBuilder />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  )
}

export default App
