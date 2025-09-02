import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"


import axios from 'axios'

const Contact = () => {
  const { isDark } = useTheme()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // Add your form submission logic here
  // }

  // const [getData , setData]=useState()

  const [Name, setName] = useState("")
  const [Email, setEmil] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMassege] = useState("")

  const navication = useNavigate();


  const CreateContect = (i)=>{
    i.preventDefault()
    axios.post("http://localhost:5000/create/contect",{
        "Name":Name,
        "Email":Email,
        "phone":phone,
        "message":message
    }).then(()=>{
        alert("✅ SuccessFull")
        navication("/")
    }).catch((error)=> console.log(error));
}




  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Contact Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm interested in freelance opportunities and collaborations. 
                If you have any questions or want to work together, feel free to reach out.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className={isDark ? 'text-green-500' : 'text-green-600'}>
                    <FaEnvelope size={20} />
                  </div>
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    anasalibotan500@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className={isDark ? 'text-green-500' : 'text-green-600'}>
                    <FaPhone size={20} />
                  </div>
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    +252 619094928
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className={isDark ? 'text-green-500' : 'text-green-600'}>
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    Mogadisho
                  </span>
                </div>
              </div>
            </div>
            <div>



              <form     onSubmit={CreateContect}  className="space-y-4">
                <div>
                  <input value={Name} onChange={(e) => setName(e.target.value)}  
                    type="text"
                    placeholder="Your Name"
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 
                      ${isDark ? 'bg-[#112240] focus:ring-green-500' : 'bg-white focus:ring-green-600'} 
                      ${isDark ? 'text-white' : 'text-gray-900'}
                      ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'}
                      transition-colors`}
                    required
                  />
                </div>
                <div>
                  <input value={Email} onChange={(e) => setEmil(e.target.value)}  
                    type="email"
                    placeholder="Your Email"
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 
                      ${isDark ? 'bg-[#112240] focus:ring-green-500' : 'bg-white focus:ring-green-600'} 
                      ${isDark ? 'text-white' : 'text-gray-900'}
                      ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'}
                      transition-colors`}
                    required
                  />
                </div>
                <div>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)}  
                    type="text"
                    placeholder="Phone"
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 
                      ${isDark ? 'bg-[#112240] focus:ring-green-500' : 'bg-white focus:ring-green-600'} 
                      ${isDark ? 'text-white' : 'text-gray-900'}
                      ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'}
                      transition-colors`}
                    required
                  />
                </div>
                <div>
                  <textarea value={message} onChange={(e) => setMassege(e.target.value)}  
                    placeholder="Your Message"
                    rows="5"
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 resize-none
                      ${isDark ? 'bg-[#112240] focus:ring-green-500' : 'bg-white focus:ring-green-600'} 
                      ${isDark ? 'text-white' : 'text-gray-900'}
                      ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'}
                      transition-colors`}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className={`${isDark ? 'bg-green-500 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'} 
                    text-white px-6 py-3 rounded-lg transition-colors`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact 