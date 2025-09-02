import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import profileImage from '../assets/WhatsApp Image 2025-03-15 at 06.17.40_d819a60f.jpg'
import { useState, useEffect } from 'react'

const Home = () => {
  const { isDark } = useTheme()
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const titles = [
    'Frontend Developer',
    'React Developer',
    'UI/UX Designer',
    'Web Developer',
    'JavaScript Expert'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length
      const fullText = titles[i]

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1))
        setTypingSpeed(75) // Faster when deleting
      } else {
        setText(fullText.substring(0, text.length + 1))
        setTypingSpeed(150) // Normal speed when typing
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500) // Wait before starting to delete
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(500) // Pause before starting new word
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, titles])
  
  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com' },
    { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com' },
    { icon: <FaTwitter size={20} />, url: 'https://twitter.com' },
    { icon: <FaEnvelope size={20} />, url: 'mailto:your.email@example.com' },
  ]

  return (
    <div className="min-h-screen flex items-center pt-20 md:pt-32">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold">
                  Hi, I'm <span className="text-primary">Anas Ali</span>
                </h1>
                <p className="text-2xl font-semibold">
                  I'm a{" "}
                  <span className="text-primary">
                    {text}
                    <span className="animate-blink">|</span>
                  </span>
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Passionate about creating beautiful and functional web experiences. 
                  Specialized in modern frontend technologies and user interface design.
                </p>
              </div>
              <button className={`${isDark ? 'bg-green-500 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'} 
                text-white px-6 py-3 rounded-full transition-colors`}>
                Download CV
              </button>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDark ? 'text-gray-400 hover:text-green-500' : 'text-gray-600 hover:text-green-600'} 
                      transition-colors`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                border-4 ${isDark ? 'border-green-500' : 'border-green-600'} mx-auto`}>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className={`w-full h-full rounded-full border-4 
                  ${isDark ? 'border-green-500' : 'border-green-600'}
                  border-t-transparent animate-spin-slow`} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 