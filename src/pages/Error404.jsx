import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Link } from 'react-router-dom'
import { FaHome, FaArrowLeft } from 'react-icons/fa'

const Error404 = () => {
  const { isDark } = useTheme()

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className={`text-9xl md:text-[12rem] font-bold 
              ${isDark ? 'text-green-500' : 'text-green-600'} 
              opacity-20 select-none`}>
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4
              ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Oops! Page Not Found
            </h2>
            <p className={`text-lg md:text-xl 
              ${isDark ? 'text-gray-400' : 'text-gray-600'} 
              max-w-2xl mx-auto`}>
              The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/"
              className={`${isDark ? 'bg-green-500 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'} 
                text-white px-8 py-3 rounded-full transition-colors 
                flex items-center gap-2 font-semibold`}
            >
              <FaHome size={18} />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className={`${isDark ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white' : 
                'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'} 
                border-2 px-8 py-3 rounded-full transition-colors 
                flex items-center gap-2 font-semibold`}
            >
              <FaArrowLeft size={18} />
              Go Back
            </button>
          </motion.div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Need help? Check out our{' '}
              <Link 
                to="/contact" 
                className={`${isDark ? 'text-green-500 hover:text-green-400' : 'text-green-600 hover:text-green-700'} 
                  underline transition-colors`}
              >
                contact page
              </Link>
              {' '}or{' '}
              <Link 
                to="/" 
                className={`${isDark ? 'text-green-500 hover:text-green-400' : 'text-green-600 hover:text-green-700'} 
                  underline transition-colors`}
              >
                browse our portfolio
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Error404

