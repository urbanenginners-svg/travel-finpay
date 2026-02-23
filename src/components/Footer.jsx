import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { MdFlight, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
// import NewsletterSection from './NewsletterSection'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'About Us', path: '/' },
    { label: 'Tours', path: '/tours' },
    { label: 'Flights', path: '/flights' },
    { label: 'Insurance', path: '/insurance' },
    { label: 'Blog', path: '/blog' }
  ]

  const support = [
    { label: 'Contact Us', path: '/' },
    { label: 'FAQs', path: '/' },
    { label: 'Terms & Conditions', path: '/' },
    { label: 'Privacy Policy', path: '/' },
    { label: 'Refund Policy', path: '/' }
  ]

  const destinations = [
    { label: 'Maldives', path: '/tours' },
    { label: 'Switzerland', path: '/tours' },
    { label: 'Japan', path: '/tours' },
    { label: 'Dubai', path: '/tours' },
    { label: 'Greece', path: '/tours' }
  ]

  return (
    <footer className="bg-navy text-white mt-auto">
      {/* Newsletter Section */}
      {/* <NewsletterSection compact /> */}

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-skyblue to-teal p-2 rounded-xl">
                <MdFlight className="text-white text-2xl" />
              </div>
              <span className="text-2xl font-bold">
                Fin <span className="text-skyblue">Holidays</span>
              </span>
            </Link>
            <p className="text-white/70 mb-4 leading-relaxed">
              Your trusted partner for unforgettable travel experiences. 
              We offer the best flight deals, curated tour packages, and 
              comprehensive travel insurance.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/70">
                <MdLocationOn className="text-skyblue" />
                <span>123 Travel Street, Tourism City, TC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <MdPhone className="text-skyblue" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <MdEmail className="text-skyblue" />
                <span>hello@finholidays.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="text-white/70 hover:text-skyblue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="text-white/70 hover:text-skyblue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Top Destinations</h4>
            <ul className="space-y-2">
              {destinations.map((dest) => (
                <li key={dest.label}>
                  <Link 
                    to={dest.path} 
                    className="text-white/70 hover:text-skyblue transition-colors"
                  >
                    {dest.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © {currentYear} Fin Holidays. All rights reserved.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-skyblue transition-colors"
              >
                <FaFacebookF />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-skyblue transition-colors"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-skyblue transition-colors"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-skyblue transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-skyblue transition-colors"
              >
                <FaYoutube />
              </a>
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-3">
              <span className="text-white/70 text-sm">Certified by:</span>
              <div className="flex items-center space-x-2">
                <div className="bg-white/10 px-3 py-1 rounded text-xs">IATA</div>
                <div className="bg-white/10 px-3 py-1 rounded text-xs">ASTA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
