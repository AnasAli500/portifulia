import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon, FaCode, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "skills", label: "Skills", path: "/skills" },
    { id: "services", label: "Services", path: "/services" },
    { id: "portfolio", label: "Portfolio", path: "/portfolio" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname === "/") {
        const sections = navItems.map((item) =>
          document.getElementById(item.id)
        );
        const scrollPosition = window.scrollY + 250;

        sections.forEach((section) => {
          if (!section) return;
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath !== "/") {
      const currentItem = navItems.find((item) => item.path === currentPath);
      if (currentItem) {
        setActiveSection(currentItem.id);
      }
    }
  }, [location.pathname]);

  const handleNavigation = (item) => {
    if (location.pathname === "/") {
      const element = document.getElementById(item.id);
      if (element) {
        const offset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          isDark
            ? "bg-[#0b1329]/80 border border-slate-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
            : "bg-white/85 border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
        } backdrop-blur-xl px-5 py-3 flex items-center justify-between`}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => handleNavigation(navItems[0])}
          className="flex items-center space-x-2 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
            <FaCode className="w-5 h-5 text-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-wider font-mono">
              ANAS<span className="text-emerald-400">.</span>DEV
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => handleNavigation(item)}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? isDark
                      ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/30"
                      : "text-emerald-600 bg-emerald-50 border border-emerald-200"
                    : isDark
                    ? "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#10b981]"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Controls & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-2.5 rounded-xl transition-all duration-300 border ${
              isDark
                ? "bg-slate-800/80 border-slate-700 text-amber-400 hover:border-amber-400/50 hover:bg-slate-800"
                : "bg-slate-100 border-slate-200 text-slate-700 hover:border-emerald-400 hover:text-emerald-600"
            }`}
          >
            {isDark ? <FaSun className="w-4 h-4 animate-spin-slow" /> : <FaMoon className="w-4 h-4" />}
          </button>

          <Link
            to="/contact"
            onClick={() => handleNavigation({ id: "contact", path: "/contact" })}
            className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Controls */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-2 rounded-lg ${
              isDark
                ? "bg-slate-800 text-amber-400 border border-slate-700"
                : "bg-slate-100 text-slate-700 border border-slate-200"
            }`}
          >
            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg border ${
              isDark
                ? "bg-slate-800 border-slate-700 text-slate-200"
                : "bg-slate-100 border-slate-200 text-slate-800"
            }`}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2">
          <div
            className={`rounded-2xl p-4 space-y-2 border ${
              isDark
                ? "bg-[#0b1329]/95 border-slate-800 text-white shadow-2xl"
                : "bg-white/95 border-slate-200 text-slate-900 shadow-xl"
            } backdrop-blur-2xl`}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => handleNavigation(item)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  activeSection === item.id
                    ? isDark
                      ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/30"
                      : "text-emerald-600 bg-emerald-50 border border-emerald-200"
                    : isDark
                    ? "text-slate-300 hover:bg-slate-800/50"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => handleNavigation({ id: "contact", path: "/contact" })}
                className="block text-center w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 shadow-md shadow-emerald-500/20"
              >
                Hire Me Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
