import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload, FaArrowRight, FaCode, FaRocket, FaTerminal } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import profileImage from '../assets/WhatsApp Image 2025-09-23 at 09.20.41_636ba955.jpg'
import { useState, useEffect } from 'react'

const Home = () => {
  const { isDark } = useTheme()
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(120)

  const titles = [
    'Full-Stack Developer',
    'React Specialist',
    'UI/UX Designer',
    'Web Architect',
    'JavaScript Expert'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length
      const fullText = titles[i]

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1))
        setTypingSpeed(60)
      } else {
        setText(fullText.substring(0, text.length + 1))
        setTypingSpeed(120)
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(300)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, titles])
  
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub size={18} />, url: 'https://github.com/AnasAli500' },
    { name: 'LinkedIn', icon: <FaLinkedin size={18} />, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: <FaTwitter size={18} />, url: 'https://x.com/AnasAli400000?t=IBAAWA6LrW5g7EuAUGPOvw&s=08' },
    { name: 'Email', icon: <FaEnvelope size={18} />, url: 'mailto:anasalibotan500@gmail.com' },
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Status Pill Badge */}
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide backdrop-blur-md border ${
              isDark 
                ? 'bg-slate-900/80 border-emerald-500/30 text-emerald-300 shadow-lg shadow-emerald-500/5' 
                : 'bg-emerald-50 border-emerald-200 text-emerald-700'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire & Freelance Projects</span>
            </div>

            {/* Main Title Heading */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-mono font-medium tracking-wider text-emerald-400 uppercase">
                Hello I'm
              </p>
              <h1 className={`text-4xl sm:text-6xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Anas <span className="text-gradient">Ali</span>
              </h1>
              <h2 className="text-xl sm:text-3xl font-bold font-mono h-10 flex items-center">
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>I build </span>
                <span className="text-gradient ml-2">
                  {text}
                  <span className="animate-blink text-emerald-400">|</span>
                </span>
              </h2>
            </div>

            {/* Description Subtext */}
            <p className={`text-base sm:text-lg max-w-xl leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Passionate software developer creating high-performance, pixel-perfect, and modern web experiences with React, JavaScript, and modern full-stack architectures.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Explore Work</span>
                <FaArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl font-bold text-sm backdrop-blur-md border transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-700 text-slate-200 hover:border-emerald-500/50 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-emerald-500 hover:bg-emerald-50'
                }`}
              >
                <FaDownload className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center space-x-3 pt-4">
              <span className={`text-xs font-mono font-semibold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Connect:
              </span>
              <div className="flex items-center space-x-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className={`p-2.5 rounded-xl border transition-all duration-300 ${
                      isDark
                        ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800'
                        : 'bg-white border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-400 hover:bg-emerald-50'
                    }`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Image & Orbit Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer Pulsing Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-cyan-500/30 blur-2xl animate-pulse-glow" />

              {/* Outer Spinning Border Ring */}
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-emerald-500/40 animate-spin-slow" />
              
              {/* Inner Glowing Ring */}
              <div className="absolute inset-6 rounded-full border-2 border-cyan-400/30 animate-spin-slow" style={{ animationDirection: 'reverse' }} />

              {/* Profile Image Container */}
              <div className={`relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden p-2 backdrop-blur-xl border-2 shadow-2xl ${
                isDark 
                  ? 'bg-slate-900/80 border-emerald-500/40 shadow-emerald-500/20' 
                  : 'bg-white border-emerald-400 shadow-emerald-500/15'
              }`}>
                <img
                  src={profileImage}
                  alt="Anas Ali"
                  className="w-full h-full object-cover rounded-full filter hover:contrast-105 transition-all duration-500"
                />
              </div>

              {/* Orbiting Badge 1 - Tech Badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute -top-2 right-4 z-20 px-3.5 py-2 rounded-xl border backdrop-blur-xl shadow-xl flex items-center space-x-2 text-xs font-bold font-mono ${
                  isDark ? 'bg-slate-900/90 border-slate-700 text-emerald-400' : 'bg-white/90 border-slate-200 text-emerald-600'
                }`}
              >
                <FaCode className="text-cyan-400" />
                <span>React.js Expert</span>
              </motion.div>

              {/* Orbiting Badge 2 - Full Stack */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className={`absolute -bottom-2 left-4 z-20 px-3.5 py-2 rounded-xl border backdrop-blur-xl shadow-xl flex items-center space-x-2 text-xs font-bold font-mono ${
                  isDark ? 'bg-slate-900/90 border-slate-700 text-teal-300' : 'bg-white/90 border-slate-200 text-teal-700'
                }`}
              >
                <FaRocket className="text-emerald-400" />
                <span>Full-Stack Web</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Home 