import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaPaintBrush, FaServer, FaCogs, FaRocket, FaCheck } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const Services = () => {
  const { isDark } = useTheme()

  const services = [
    {
      icon: <FaCode className="w-7 h-7 text-emerald-400" />,
      title: 'Frontend & Web Development',
      description: 'Creating high-performance, interactive, and modern single-page applications utilizing React.js, Tailwind CSS, and modern JavaScript architectures.',
      features: ['React & Component Architecture', 'Interactive State Management', 'Clean & Maintainable Code']
    },
    {
      icon: <FaMobileAlt className="w-7 h-7 text-cyan-400" />,
      title: 'Responsive & Adaptive Design',
      description: 'Designing fluid, mobile-first web experiences that render perfectly across every screen size, desktop monitor, tablet, and mobile device.',
      features: ['Mobile-First Layouts', 'Cross-Browser Compatibility', 'Touch-Friendly Interfaces']
    },
    {
      icon: <FaPaintBrush className="w-7 h-7 text-teal-400" />,
      title: 'UI/UX Interface Design',
      description: 'Engineering visually engaging user interfaces with modern color palettes, crisp micro-interactions, smooth animations, and glassmorphism styling.',
      features: ['Modern Aesthetics & Dark Modes', 'Micro-Animations & Motion', 'User-Centric Workflows']
    },
    {
      icon: <FaServer className="w-7 h-7 text-indigo-400" />,
      title: 'Full-Stack & API Integration',
      description: 'Connecting web frontends seamlessly with backend REST APIs, Node.js services, database structures, and third-party web protocols.',
      features: ['RESTful API Integration', 'Full-Stack Data Flow', 'Secure Endpoints']
    },
  ]

  return (
    <div className="min-h-screen py-24 flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <FaCogs className="w-3.5 h-3.5" />
            <span>High Impact Solutions</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            My Professional <span className="text-gradient">Services</span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Tailored digital development services built to transform your vision into state-of-the-art web products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10'
                  : 'bg-white border-slate-200 hover:border-emerald-400 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                    isDark ? 'bg-slate-800/80 border border-slate-700/80' : 'bg-slate-100 border border-slate-200'
                  }`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {service.title}
                  </h3>
                </div>

                <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {service.description}
                </p>

                <div className="pt-2 border-t border-slate-800/50 space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium">
                      <FaCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Request Service</span>
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Services 