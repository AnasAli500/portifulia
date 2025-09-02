import { FaReact, FaGitAlt, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si'
import { useTheme } from '../context/ThemeContext'

const Skills = () => {
  const { isDark } = useTheme()

  const skills = [
    { 
      name: 'React.js', 
      icon: <FaReact size={40} className="text-blue-500" />, 
      color: 'from-blue-500 to-blue-400',
      level: 90 
    },
    { 
      name: 'JavaScript', 
      icon: <SiJavascript size={40} className="text-yellow-500" />, 
      color: 'from-yellow-500 to-yellow-400',
      level: 85 
    },
    { 
      name: 'HTML5', 
      icon: <SiHtml5 size={40} className="text-orange-500" />, 
      color: 'from-orange-500 to-orange-400',
      level: 95 
    },
    { 
      name: 'CSS3', 
      icon: <SiCss3 size={40} className="text-blue-500" />, 
      color: 'from-blue-500 to-blue-300',
      level: 90 
    },
    { 
      name: 'Tailwind CSS', 
      icon: <SiTailwindcss size={40} className="text-cyan-500" />, 
      color: 'from-cyan-500 to-cyan-400',
      level: 95 
    },
    { 
      name: 'Node.js', 
      icon: <FaNodeJs size={40} className="text-green-600" />, 
      color: 'from-green-600 to-green-400',
      level: 80 
    },
    { 
      name: 'Express.js', 
      icon: <SiExpress size={40} className="text-gray-500" />, 
      color: 'from-gray-600 to-gray-400',
      level: 75 
    },
    { 
      name: 'MongoDB', 
      icon: <SiMongodb size={40} className="text-green-600" />, 
      color: 'from-green-700 to-green-500',
      level: 70 
    },
    { 
      name: 'Git', 
      icon: <FaGitAlt size={40} className="text-red-600" />, 
      color: 'from-red-600 to-red-400',
      level: 85 
    },
  ]

  return (
    <section id="skills" className={`py-16 ${isDark ? 'bg-[#0a192f]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col p-6 rounded-lg transition-all duration-300 hover:scale-105
                ${isDark ? 'bg-[#112240]' : 'bg-gray-100'}`}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {skill.name}
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div 
                      className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 