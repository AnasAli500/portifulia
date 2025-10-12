import { Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Skills from './components/Skills'
import Dashbourd from './components/Dashbourd'
import Error404 from './pages/Error404'

const App = () => {
  const { isDark } = useTheme()

  return (
    <div className={`${isDark ? 'dark' : 'light'}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main className="w-full">
            <section id="home" className="min-h-screen">
              <Home />
            </section>
            
            <section id="about" className="min-h-screen">
              <About />
            </section>

            <section id="skills" className="min-h-screen">
              <Skills />
            </section>
            
            <section id="services" className="min-h-screen">
              <Services />
            </section>
            
            <section id="portfolio" className="min-h-screen">
              <Portfolio />
            </section>
            
            <section id="contact" className="min-h-screen">
              <Contact />
            </section>
          </main>
        } />
        <Route path="/dashboard" element={<Dashbourd />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App