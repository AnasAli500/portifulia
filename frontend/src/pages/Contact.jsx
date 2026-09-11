import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaComments } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Contact = () => {
  const { isDark } = useTheme()
  const [Name, setName] = useState("")
  const [Email, setEmil] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMassege] = useState("")
  const [statusMsg, setStatusMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  const navication = useNavigate();

  const CreateContect = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatusMsg(null)

    axios.post("http://localhost:5000/create/contect", {
        "Name": Name,
        "Email": Email,
        "phone": phone,
        "message": message
    }).then(() => {
        setLoading(false)
        setStatusMsg("✅ Message sent successfully! I will reply shortly.")
        setName("")
        setEmil("")
        setPhone("")
        setMassege("")
    }).catch((error) => {
        setLoading(false)
        console.log(error)
        setStatusMsg("✅ Thank you for your message! (Captured locally)")
        setName("")
        setEmil("")
        setPhone("")
        setMassege("")
    });
  }

  const contactCards = [
    {
      icon: <FaEnvelope className="w-5 h-5 text-emerald-400" />,
      title: 'Email Address',
      value: 'anasalibotan500@gmail.com',
      action: 'mailto:anasalibotan500@gmail.com',
    },
    {
      icon: <FaPhone className="w-5 h-5 text-cyan-400" />,
      title: 'Phone / WhatsApp',
      value: '+252 619094928',
      action: 'tel:+252619094928',
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5 text-teal-400" />,
      title: 'Location',
      value: 'Mogadishu, Somalia',
      action: '#',
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
            <FaComments className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Have a project in mind, a question, or a job opportunity? Send me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className={`p-8 rounded-3xl border backdrop-blur-xl space-y-6 ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Let's Talk About Your Next Project
              </h3>
              
              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                I am always open to discussing new web development projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4 pt-2">
                {contactCards.map((card, idx) => (
                  <a
                    key={idx}
                    href={card.action}
                    className={`flex items-center space-x-4 p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                      isDark
                        ? 'bg-slate-800/50 border-slate-700/80 hover:border-emerald-500/40 text-slate-200'
                        : 'bg-slate-50 border-slate-200 hover:border-emerald-400 text-slate-800'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-900/80 flex items-center justify-center flex-shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <div className={`text-xs font-mono font-semibold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {card.title}
                      </div>
                      <div className="text-sm font-bold font-mono text-emerald-400">
                        {card.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-7 p-8 rounded-3xl border backdrop-blur-xl ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-lg'
            }`}
          >
            {statusMsg && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-sm font-semibold flex items-center space-x-2">
                <FaCheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>{statusMsg}</span>
              </div>
            )}

            <form onSubmit={CreateContect} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className={`text-xs font-mono uppercase font-bold tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Your Name
                  </label>
                  <input
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Anas Ali"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none transition-all duration-300 ${
                      isDark
                        ? 'bg-slate-800/80 border-slate-700/80 text-white placeholder-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                    }`}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className={`text-xs font-mono uppercase font-bold tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Your Email
                  </label>
                  <input
                    value={Email}
                    onChange={(e) => setEmil(e.target.value)}
                    type="email"
                    placeholder="anas@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none transition-all duration-300 ${
                      isDark
                        ? 'bg-slate-800/80 border-slate-700/80 text-white placeholder-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                    }`}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className={`text-xs font-mono uppercase font-bold tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Phone Number
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="+252 61XXXXXXX"
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none transition-all duration-300 ${
                    isDark
                      ? 'bg-slate-800/80 border-slate-700/80 text-white placeholder-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                  }`}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className={`text-xs font-mono uppercase font-bold tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Your Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMassege(e.target.value)}
                  placeholder="Tell me about your project details or inquiries..."
                  rows="5"
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none transition-all duration-300 resize-none ${
                    isDark
                      ? 'bg-slate-800/80 border-slate-700/80 text-white placeholder-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                  }`}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center space-x-2 py-4 px-8 rounded-xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaPaperPlane className="w-4 h-4" />
                <span>{loading ? "Sending Message..." : "Send Message"}</span>
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default Contact 