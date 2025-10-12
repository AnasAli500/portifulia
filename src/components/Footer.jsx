import { FaArrowUp } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { isDark } = useTheme()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={`${isDark ? 'bg-[#0a192f] text-white' : 'bg-gray-100 text-gray-900'} py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-2">
            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>Portfolio</h2>
            <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'} space-y-1 text-sm`}>
              <p>Maka Al-Mukaramah</p>
              <p>Hodan, Mogadishu</p>
              <p>Somalia</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>Useful Links</h3>
            <ul className="space-y-2">
              {['Home', 'About us', 'Contact us'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase().replace(' ', '-'))
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors flex items-center space-x-2 text-sm`}
                  >
                    <span className="text-green-400">›</span>
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>Our Services</h3>
            <ul className="space-y-2">
              {['Data Plan', 'Unlimited Packages', 'Shop Now'].map((item) => (
                <li key={item}>
                  <button
                    className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors flex items-center space-x-2 text-sm`}
                  >
                    <span className="text-green-400">›</span>
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>Subscribe to see Secret Deals</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-3 text-sm`}>Prices drop the moment you sign up!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-3 py-1 rounded-l ${isDark ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white text-gray-900 border border-gray-300'} focus:outline-none text-sm`}
              />
              <button className="bg-green-500 text-white px-4 py-1 rounded-r hover:bg-green-600 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={`mt-6 pt-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-300'} flex flex-col md:flex-row justify-between items-center`}>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>© Copyright Geenyo. All Rights Reserved</p>
          
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="mt-2 md:mt-0 bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer 