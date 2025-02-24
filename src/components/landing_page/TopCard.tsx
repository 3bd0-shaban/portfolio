import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const TopCard = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-black to-black pt-20 lg:pt-0"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full opacity-20" />
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
            {/* Status Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg"
            >
              <span className="flex items-center gap-2 text-sm font-medium">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Available for New Projects
                </span>
                <AiOutlineArrowRight className="text-pink-400 animate-bounce-x" />
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                Hey! I Am{" "}
                <div className="mt-2 relative">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                    Abdulrahman Shaban
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full transform scale-x-0 animate-expand" />
                </div>
              </h1>

              <div className="h-20">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1500,
                    "Full Stack Developer",
                    1500,
                    "Full Stack Developer",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-xl sm:text-3xl font-light bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="/Abdulrahman_Shaban FullStack.pdf"
                  download
                  className="inline-flex items-center gap-2 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-medium bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-xl hover:shadow-[0_0_2rem_rgba(79,70,229,0.35)] hover:bg-gradient-to-l transition-all duration-300"
                >
                  <span>Download CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="#contact-me"
                  className="inline-flex items-center h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-medium bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              {[
                {
                  icon: AiOutlineGithub,
                  link: "https://github.com/3bd0-shaban",
                  color: "hover:text-purple-400",
                  label: "GitHub",
                },
                {
                  icon: AiOutlineLinkedin,
                  link: "https://www.linkedin.com/in/abdelra7man9/",
                  color: "hover:text-blue-400",
                  label: "LinkedIn",
                },
                {
                  icon: AiOutlineTwitter,
                  link: "https://x.com/AbdElra56792253",
                  color: "hover:text-cyan-400",
                  label: "Twitter",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 ${social.color} transition-all duration-300 group`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-auto lg:flex-1 max-w-lg"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { label: "Years Experience", value: "3+", icon: "🚀" },
                { label: "Projects Completed", value: "10+", icon: "💼" },
                { label: "Client Satisfaction", value: "100%", icon: "⭐" },
                { label: "Technologies", value: "20+", icon: "🛠️" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-2xl mb-2 block">{stat.icon}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TopCard;
