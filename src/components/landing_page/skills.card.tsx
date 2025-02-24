import { motion } from "framer-motion";
import { AiFillHtml5, AiFillApi } from "react-icons/ai";
import {
  SiCss3,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithubactions,
  SiJenkins,
  SiDocker,
  SiRedux,
  SiAmazon,
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { HiServer } from "react-icons/hi";

const SkillsCard = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: [
        { icon: SiReact, name: "React.js", color: "text-cyan-400" },
        { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
        { icon: SiRedux, name: "React Redux", color: "text-purple-500" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-300" },
        { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
        { icon: AiFillHtml5, name: "HTML5", color: "text-orange-500" },
        { icon: SiCss3, name: "CSS3", color: "text-blue-500" },
      ],
    },
    {
      title: "Backend Development",
      description: "Creating robust and scalable server-side solutions",
      skills: [
        { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
        { icon: SiExpress, name: "Express.js", color: "text-gray-400" },
        { icon: SiNestjs, name: "Nest.js", color: "text-red-500" },
        { icon: HiServer, name: "Microservices", color: "text-blue-300" },
        { icon: SiGraphql, name: "GraphQL", color: "text-pink-500" },
        { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
        { icon: SiMysql, name: "MySQL", color: "text-blue-400" },
        { icon: AiFillApi, name: "REST API", color: "text-yellow-400" },
        { icon: SiGit, name: "Git", color: "text-orange-600" },
        { icon: VscGithub, name: "GitHub", color: "text-gray-300" },
      ],
    },
    {
      title: "DevOps & Deployment",
      description: "Automating and optimizing deployment workflows",
      skills: [
        {
          icon: SiGithubactions,
          name: "GitHub Actions",
          color: "text-blue-400",
        },
        { icon: SiJenkins, name: "Jenkins", color: "text-red-500" },
        { icon: SiAmazon, name: "AWS EC2", color: "text-orange-400" },
        { icon: SiDocker, name: "Docker", color: "text-blue-500" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-black to-purple-900/20"
    >
      {" "}
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full [mask-image:radial-gradient(white,transparent_70%)] opacity-30" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-pulse animation-delay-2000" />
      </div>
      <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-4 px-6 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm"
            >
              <span className="text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                My Technical Expertise
              </span>
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences through mastery of
            cutting-edge technologies
          </p>
        </motion.div>

        <div className="space-y-32">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="mb-16 max-w-3xl mx-auto text-center">
                <motion.h3
                  className="text-2xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  {category.title}
                </motion.h3>
                <motion.p
                  className="text-xs md:text-xl text-gray-400"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  {category.description}
                </motion.p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.6, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.02,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 15,
                      translateY: -10,
                    }}
                    className="group perspective"
                  >
                    <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.1] to-white/[0.05] border border-white/10 backdrop-blur-xl shadow-2xl transform-gpu transition-all duration-500 group-hover:shadow-purple-500/20">
                      {/* Glowing effect */}
                      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500" />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/30 via-transparent to-pink-600/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                      {/* Content */}
                      <div className="relative flex flex-col items-center">
                        <skill.icon
                          className={`text-6xl ${skill.color} mb-6 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 group-hover:animate-pulse`}
                        />
                        <span className="text-lg font-semibold text-gray-200 text-center group-hover:text-white transition-colors duration-500">
                          {skill.name}
                        </span>
                      </div>

                      {/* Bottom border animation */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCard;
