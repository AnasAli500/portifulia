import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaCode } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import image3 from "../assets/Screenshot 2025-09-02 121523.png"
import image4 from "../assets/Screenshot 2025-09-02 123616.png"
import image5 from "../assets/Screenshot 2025-09-02 123950.png"
import image6 from "../assets/image.png"

const Portfolio = () => {
  const { isDark } = useTheme()
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      title: "System School Management Dashboard",
      category: "fullstack",
      description: "Comprehensive enterprise school management platform with frontend dashboards and backend student tracking.",
      image: image6,
      tech: ["Full Stack", "React", "Node.js", "Tailwind CSS"],
      github: "https://github.com/AnasAli500",
      live: "https://www.dhambaalschool.com",
    },
    {
      title: "Personal Portfolio Platform",
      category: "frontend",
      description: "State-of-the-art, high-performance developer portfolio with responsive design and glassmorphism styling.",
      image: image3,
      tech: ["React", "Node.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/AnasAli500",
      live: "https://anas-five.vercel.app/",
    },
    {
      title: "Trusim Web Platform",
      category: "frontend",
      description: "Modern web solution for managing daily workflows, productivity metrics, and user interactions.",
      image: image4,
      tech: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/AnasAli500",
      live: "https://trusim.vercel.app/",
    },
    {
      title: "Weather & Utility Dashboard",
      category: "frontend",
      description: "Real-time interactive application featuring live weather telemetry and daily digital tools.",
      image: image5,
      tech: ["React", "API Integration", "CSS3"],
      github: "https://github.com/AnasAli500",
      live: "https://react-tasbiix.vercel.app/",
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Frontend Apps' },
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="min-h-screen py-24 flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <FaFolderOpen className="w-3.5 h-3.5" />
            <span>Featured Showcase</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore my latest web applications, dashboards, and client platforms.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105'
                  : isDark
                  ? 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl overflow-hidden border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 group ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10'
                  : 'bg-white border-slate-200 hover:border-emerald-400 shadow-lg hover:shadow-2xl'
              }`}
            >
              {/* Image Preview Container */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Code"
                    className="p-3.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-emerald-400 hover:border-emerald-400 transition-all duration-300 hover:scale-110"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Live Site"
                    className="p-3.5 rounded-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all duration-300 hover:scale-110 shadow-lg shadow-emerald-500/30"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-7 space-y-4">
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${
                        isDark 
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300' 
                          : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Portfolio 