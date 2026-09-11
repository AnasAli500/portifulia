import { motion } from 'framer-motion'
import { FaUser, FaBriefcase, FaGraduationCap, FaCheckCircle, FaAward, FaCodeBranch, FaLaptopCode } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const About = () => {
  const { isDark } = useTheme()

  const stats = [
    { label: 'Years Experience', value: '3+', icon: <FaBriefcase className="text-emerald-400" /> },
    { label: 'Projects Built', value: '15+', icon: <FaCodeBranch className="text-cyan-400" /> },
    { label: 'Core Tech Stack', value: '10+', icon: <FaLaptopCode className="text-teal-400" /> },
    { label: 'Client Satisfaction', value: '100%', icon: <FaAward className="text-indigo-400" /> },
  ]

  const experiences = [
    {
      role: 'Full-Stack & Frontend Developer',
      company: 'Dhambaal School & Digital Solutions',
      period: '2024 - Present',
      description: 'Architecting dynamic web portals, school management system dashboards, and interactive user interfaces using React, JavaScript, Node.js, and Tailwind CSS.',
    },
    {
      role: 'Frontend Web Specialist',
      company: 'Freelance & Independent Projects',
      period: '2023 - 2024',
      description: 'Engineered responsive web applications, custom UI components, weather portals, and e-commerce web applications with API integrations.',
    },
  ]

  return (
    <div className="min-h-screen py-24 flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <FaUser className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            About <span className="text-gradient">Anas Ali</span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Combining sleek user interfaces with efficient logic to build state-of-the-art web products.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border backdrop-blur-xl text-center space-y-2 transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? 'bg-slate-900/70 border-slate-800 hover:border-emerald-500/40 shadow-lg'
                  : 'bg-white border-slate-200 hover:border-emerald-400 shadow-md'
              }`}
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-slate-800/50 flex items-center justify-center text-lg mb-1">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient font-mono">
                {stat.value}
              </div>
              <div className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Story & Experience Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-6 p-8 rounded-3xl border backdrop-blur-xl space-y-6 ${
              isDark ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-lg'
            }`}
          >
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Who I Am & What I Do
            </h3>
            
            <p className="leading-relaxed">
              I am a dedicated Frontend & Full-Stack Developer based in Mogadishu. My passion lies in converting complex ideas into seamless, clean, and intuitive web experiences.
            </p>

            <p className="leading-relaxed">
              With deep experience across modern JavaScript frameworks, responsive CSS systems, and RESTful APIs, I take pride in delivering fast, accessible, and visual-first software products.
            </p>

            <div className="pt-2">
              <h4 className={`text-sm font-mono uppercase font-bold tracking-wider mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Key Expertise
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Frontend Architecture',
                  'React & Vite Ecosystem',
                  'REST API Integration',
                  'Tailwind & Custom CSS',
                  'Responsive UX/UI',
                  'Full-Stack JavaScript'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm font-semibold">
                    <FaCheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-6 p-8 rounded-3xl border backdrop-blur-xl space-y-6 ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-lg'
            }`}
          >
            <h3 className={`text-2xl font-bold flex items-center space-x-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <span>Work Experience</span>
            </h3>

            <div className="space-y-6 relative border-l-2 border-emerald-500/30 pl-6 ml-2">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-400 border-4 border-slate-900 group-hover:scale-125 transition-transform" />
                  
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                      {exp.period}
                    </span>
                    <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {exp.role}
                    </h4>
                    <p className="text-xs font-semibold text-teal-400">
                      {exp.company}
                    </p>
                    <p className={`text-sm pt-2 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default About 