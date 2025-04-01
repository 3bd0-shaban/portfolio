import { SocialMedia } from "@/constants/ScocialMedia";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="relative border-white/10 bg-gradient-to-b from-[#141123] via-[#141123] to-[#141123] backdrop-blur-xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Logo & Branding */}
          <div className="group flex flex-col items-center lg:items-start space-y-4">
            <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-500">
              <div className="relative w-14 h-14">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-xl rotate-6 group-hover:rotate-12 transition-all duration-500 animate-pulse" />
                <div className="absolute inset-0.5 bg-black rounded-xl" />
                <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                  A
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-purple-400 hover:to-indigo-400 transition-all duration-500">
                  Abdulrahman
                </h3>
                <p className="text-sm text-gray-400">Full Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center space-y-4">
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Home",
                "What I Provide",
                "Projects",
                "Skills",
                "Contact Me",
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
            <div className="flex space-x-1">
              {SocialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`p-3 group relative sm:p-4 ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-white/5 to-white/10 hover:bg-gradient-to-r hover:scale-110 flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-translate-y-1 transition-transform duration-300" />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent whitespace-nowrap">
                        {social.label}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Abdulrahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
