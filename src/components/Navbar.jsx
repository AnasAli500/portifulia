import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      sections.forEach(section => {
        if (!section) return
        
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${isDark ? 'bg-[#0a192f]/90 text-white' : 'bg-white/90 text-gray-900'}
      backdrop-blur-sm shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl">
            <span className="text-primary">Portfolio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${activeSection === item.id 
                      ? (isDark ? 'text-green-400 bg-[#112240]' : 'text-green-600 bg-gray-100')
                      : (isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-600 hover:text-green-600')
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors
                  ${isDark ? 'text-yellow-400 hover:bg-[#112240]' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full mr-2 transition-colors
                ${isDark ? 'text-yellow-400 hover:bg-[#112240]' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md
                ${isDark ? 'text-gray-400 hover:text-white hover:bg-[#112240]' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3
              ${isDark ? 'bg-[#0a192f]' : 'bg-white'}`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full px-3 py-2 rounded-md text-base font-medium text-left
                    ${activeSection === item.id
                      ? (isDark ? 'text-green-400 bg-[#112240]' : 'text-green-600 bg-gray-100')
                      : (isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-600 hover:text-green-600')
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 