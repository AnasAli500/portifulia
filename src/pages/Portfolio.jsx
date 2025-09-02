import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import image3 from "../assets/Screenshot 2025-09-02 121523.png"
import image4 from "../assets/Screenshot 2025-09-02 123616.png"
import image5 from "../assets/Screenshot 2025-09-02 123950.png"
const Portfolio = () => {
  const { isDark } = useTheme()

  const projects = [
    {
      title: 'Portifullia Website',
      description: 'A modern e-commerce platform built with React and Node.js',
      image: image3,
      tech: ['React', 'Node.js', 'MongoDB'],
      github:"https://github.com/AnasAli500",
      live:"https://anas-five.vercel.app/"
    },
    {
      title: 'Trusim website',
      description: 'A productivity app for managing daily tasks and projects',
      image: image4,
      tech: ['React', 'Firebase', 'Tailwind'],
      github: 'https://github.com/AnasAli500',
      live: 'https://trusim.vercel.app/'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather information using OpenWeather API',
      image: image5,
      tech: ['React', 'API Integration', 'CSS'],
      github:"https://github.com/AnasAli500",
      live:"https://react-tasbiix.vercel.app/"
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-lg overflow-hidden ${isDark ? 'bg-[#112240]' : 'bg-white shadow-lg'}`}
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-green-500 transition-colors"
                      >
                        <FaGithub size={24} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-green-500 transition-colors"
                      >
                        <FaExternalLinkAlt size={24} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-sm px-3 py-1 rounded-full
                          ${isDark ? 'text-green-500 bg-green-500/10' : 'text-green-600 bg-green-100'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio 