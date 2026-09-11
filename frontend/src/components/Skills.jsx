import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaGitAlt, FaNodeJs, FaTools, FaCode, FaJava, FaDatabase, FaBrain } from 'react-icons/fa'
import { SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiMongodb, SiExpress, SiPostgresql, SiSharp, SiPython } from 'react-icons/si'
import { useTheme } from '../context/ThemeContext'

const Skills = () => {
  const { isDark } = useTheme()
  const [activeCategory, setActiveCategory] = useState('all')

  const skills = [
    { 
      name: 'React.js', 
      category: 'frontend',
      icon: <FaReact className="text-cyan-400" />, 
      color: 'from-cyan-500 to-blue-500',
      level: 92 
    },
    { 
      name: 'JavaScript (ES6+)', 
      category: 'frontend',
      icon: <SiJavascript className="text-amber-400" />, 
      color: 'from-amber-400 to-yellow-500',
      level: 90 
    },
    { 
      name: 'Tailwind CSS', 
      category: 'frontend',
      icon: <SiTailwindcss className="text-teal-400" />, 
      color: 'from-teal-400 to-emerald-500',
      level: 95 
    },
    { 
      name: 'HTML5 & Semantics', 
      category: 'frontend',
      icon: <SiHtml5 className="text-orange-500" />, 
      color: 'from-orange-500 to-amber-500',
      level: 95 
    },
    { 
      name: 'CSS3 & Modern Styling', 
      category: 'frontend',
      icon: <SiCss3 className="text-blue-400" />, 
      color: 'from-blue-500 to-cyan-400',
      level: 90 
    },
    { 
      name: 'Node.js', 
      category: 'backend',
      icon: <FaNodeJs className="text-emerald-500" />, 
      color: 'from-emerald-500 to-teal-600',
      level: 82 
    },
    { 
      name: 'Express.js', 
      category: 'backend',
      icon: <SiExpress className="text-slate-300" />, 
      color: 'from-slate-400 to-slate-600',
      level: 78 
    },
    { 
      name: 'MongoDB', 
      category: 'backend',
      icon: <SiMongodb className="text-emerald-500" />, 
      color: 'from-emerald-600 to-green-500',
      level: 75 
    },
    { 
      name: 'Git & GitHub Workflow', 
      category: 'tools',
      icon: <FaGitAlt className="text-rose-500" />, 
      color: 'from-rose-500 to-red-600',
      level: 88 
    },
    { 
      name: 'SQL & Database Design', 
      category: 'backend',
      icon: <FaDatabase className="text-sky-400" />, 
      color: 'from-sky-500 to-blue-600',
      level: 80 
    },
    { 
      name: 'PostgreSQL', 
      category: 'backend',
      icon: <SiPostgresql className="text-sky-500" />, 
      color: 'from-sky-400 to-indigo-500',
      level: 72 
    },
    { 
      name: 'C# Programming', 
      category: 'backend',
      icon: <SiSharp className="text-violet-500" />, 
      color: 'from-violet-500 to-purple-600',
      level: 68 
    },
    { 
      name: 'Java Programming', 
      category: 'backend',
      icon: <FaJava className="text-amber-600" />, 
      color: 'from-amber-600 to-orange-500',
      level: 70 
    },
    { 
      name: 'AI & Machine Learning', 
      category: 'ai',
      icon: <FaBrain className="text-fuchsia-400" />, 
      color: 'from-fuchsia-500 to-pink-500',
      level: 65 
    },
    { 
      name: 'Python (AI/ML)', 
      category: 'ai',
      icon: <SiPython className="text-yellow-400" />, 
      color: 'from-yellow-400 to-blue-500',
      level: 70 
    },
  ]

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & Databases' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'tools', label: 'Tools' },
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <FaTools className="w-3.5 h-3.5" />
            <span>Tech Stack & Capabilities</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Technologies and frameworks I specialize in to craft responsive, scalable, and high-performance applications.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105'
                  : isDark
                  ? 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 group ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10'
                  : 'bg-white border-slate-200 hover:border-emerald-400 shadow-md hover:shadow-xl'
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 ${
                  isDark ? 'bg-slate-800/80 border border-slate-700/80' : 'bg-slate-100 border border-slate-200'
                }`}>
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {skill.name}
                    </h3>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {skill.level}%
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Progress Meter Bar */}
              <div className={`w-full h-2 rounded-full overflow-hidden p-0.5 ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills 