import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const About = () => {
  const { isDark } = useTheme()

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                I am a passionate Frontend Developer with expertise in creating responsive 
                and user-friendly web applications. My journey in web development started
                with a deep curiosity for creating beautiful user interfaces.
              </p>
              <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                I specialize in modern JavaScript frameworks like React, and I'm always
                eager to learn new technologies and best practices in web development.
              </p>
              <div className="mt-6">
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  My Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git'].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 ${isDark ? 'bg-green-500' : 'bg-green-600'} rounded-full`}></div>
                      <span className={isDark ? 'text-white' : 'text-gray-900'}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className={`p-6 rounded-lg ${isDark ? 'bg-[#112240]' : 'bg-white shadow-lg'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className={isDark ? 'text-green-500' : 'text-green-600'}>Frontend Developer</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Company Name • 2022 - Present
                    </p>
                    <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Developing and maintaining modern web applications using React.js
                      and related technologies.
                    </p>
                  </div>
                  <div>
                    <h4 className={isDark ? 'text-green-500' : 'text-green-600'}>Web Developer Intern</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Company Name • 2021 - 2022
                    </p>
                    <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Assisted in developing web applications and learned modern
                      development practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About 