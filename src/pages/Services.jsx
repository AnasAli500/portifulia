import { motion } from 'framer-motion'
import { FaCode, FaMobile, FaPaintBrush, FaServer } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaCode size={40} />,
      title: 'Web Development',
      description: 'Creating responsive and dynamic websites using modern technologies like React.js',
    },
    {
      icon: <FaMobile size={40} />,
      title: 'Responsive Design',
      description: 'Building websites that work seamlessly across all devices and screen sizes',
    },
    {
      icon: <FaPaintBrush size={40} />,
      title: 'UI/UX Design',
      description: 'Designing beautiful and intuitive user interfaces with great user experience',
    },
    {
      icon: <FaServer size={40} />,
      title: 'API Integration',
      description: 'Integrating third-party APIs and building custom API solutions',
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
          <h2 className="text-4xl font-bold mb-8">My Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#112240] p-6 rounded-lg"
              >
                <div className="text-green-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services 