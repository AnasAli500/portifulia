import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaHeart } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { isDark } = useTheme()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ]

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub size={18} />, url: 'https://github.com/AnasAli500' },
    { name: 'LinkedIn', icon: <FaLinkedin size={18} />, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: <FaTwitter size={18} />, url: 'https://x.com/AnasAli400000?t=IBAAWA6LrW5g7EuAUGPOvw&s=08' },
    { name: 'Email', icon: <FaEnvelope size={18} />, url: 'mailto:anasalibotan500@gmail.com' },
  ]

  return (
    <footer className={`relative border-t transition-colors duration-300 ${
      isDark 
        ? 'bg-[#070b14]/90 border-slate-800/80 text-slate-300' 
        : 'bg-slate-100 border-slate-200 text-slate-700'
    } pt-16 pb-12 overflow-hidden`}>
      
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/40">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 flex items-center justify-center text-slate-950 font-black">
                <FaCode className="w-4 h-4 text-slate-950" />
              </div>
              <span className="text-xl font-extrabold tracking-wider font-mono">
                ANAS<span className="text-emerald-400">.</span>DEV
              </span>
            </Link>

            <p className={`text-sm max-w-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Full-Stack & Frontend Engineer building modern, scalable, state-of-the-art web applications and digital interfaces.
            </p>

            <div className={`text-xs font-mono space-y-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
              <p>📍 Maka Al-Mukaramah, Hodan, Mogadishu, Somalia</p>
              <p>✉️ anasalibotan500@gmail.com</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className={`text-xs font-mono font-bold uppercase tracking-widest ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.id)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`text-sm transition-colors flex items-center space-x-2 ${
                      isDark ? 'text-slate-400 hover:text-emerald-400' : 'text-slate-600 hover:text-emerald-600'
                    }`}
                  >
                    <span className="text-emerald-400 font-mono">›</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social Links */}
          <div className="md:col-span-4 space-y-4">
            <h3 className={`text-xs font-mono font-bold uppercase tracking-widest ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
              Connect With Me
            </h3>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Follow my code updates, client solutions, and latest developer insights.
            </p>
            
            <div className="flex items-center space-x-3">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={`p-3 rounded-xl border transition-all duration-300 ${
                    isDark
                      ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:scale-105'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-400 hover:scale-105 shadow-sm'
                  }`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className={isDark ? 'text-slate-500' : 'text-slate-500'}>
            © {new Date().getFullYear()} Anas Ali. Built with React & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center space-x-2 px-4 py-2 rounded-xl text-slate-950 font-bold bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-md shadow-emerald-500/20 hover:scale-105 transition-all duration-300"
          >
            <span>Back to top</span>
            <FaArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer 