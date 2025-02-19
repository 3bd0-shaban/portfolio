"use client";

import { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = [
        "home",
        "what-i-provide",
        "projects",
        "skills",
        "contact-me",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "What I Provide", href: "#what-i-provide" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-full z-50 transition-all duration-300`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-lg rotate-6 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0.5 bg-black rounded-lg" />
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                A
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Abdulrahman
              </h1>
              <p className="text-xs text-gray-400">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  <span
                    className={`text-sm font-medium ${
                      activeSection === item.href.substring(1)
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                  >
                    {item.name}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[
                {
                  icon: <AiOutlineGithub />,
                  href: "https://github.com/3bd0-shaban",
                },
                {
                  icon: <AiOutlineLinkedin />,
                  href: "https://www.linkedin.com/in/abdelra7man9/",
                },
                {
                  icon: <AiOutlineTwitter />,
                  href: "https://x.com/AbdElra56792253",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2, scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <a href="#contact-me">
                <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-md font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                  Contact Me
                </button>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-2xl text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block text-lg text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="pt-4 flex justify-between items-center">
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <AiOutlineGithub size={24} />,
                      href: "https://github.com/3bd0-shaban",
                    },
                    {
                      icon: <AiOutlineLinkedin size={24} />,
                      href: "https://www.linkedin.com/in/abdelra7man9/",
                    },
                    {
                      icon: <AiOutlineTwitter size={24} />,
                      href: "https://x.com/AbdElra56792253",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                      whileHover={{ scale: 1.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
                <button
                  className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
