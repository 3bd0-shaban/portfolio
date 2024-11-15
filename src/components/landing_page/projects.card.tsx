import { motion, useScroll, useTransform } from "framer-motion";
import {
  AiFillGithub,
  AiOutlineLink,
  AiFillEye,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Project One",
    description:
      "A modern web application built with Next.js and TypeScript, featuring real-time data synchronization and AI-powered features",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration"],
    github: "https://github.com/username/project-one",
    demo: "https://project-one.demo",
    gradient: "from-[#FF1CF7] to-[#b249f8]",
    stats: { stars: "1.2k", forks: "234", views: "45k" },
  },
  {
    title: "Project Two",
    description:
      "Revolutionary e-commerce platform with AR product visualization and blockchain-based payment system",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "AR.js", "Blockchain"],
    github: "https://github.com/username/project-two",
    demo: "https://project-two.demo",
    gradient: "from-[#00DDEB] to-[#6A98F0]",
    stats: { stars: "856", forks: "156", views: "32k" },
  },
  {
    title: "Project Three",
    description:
      "AI-powered analytics dashboard with predictive modeling and real-time data visualization",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "TensorFlow", "React", "D3.js"],
    github: "https://github.com/username/project-three",
    demo: "https://project-three.demo",
    gradient: "from-[#6A98F0] to-[#FF1CF7]",
    stats: { stars: "2.1k", forks: "342", views: "67k" },
  },
  {
    title: "Project Four",
    description:
      "Social media platform with AI-driven content moderation and personalized feed algorithms",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Firebase", "AI/ML", "Redux"],
    github: "https://github.com/username/project-four",
    demo: "https://project-four.demo",
    gradient: "from-[#FF1CF7] to-[#b249f8]",
    stats: { stars: "943", forks: "167", views: "28k" },
  },
  {
    title: "Project Five",
    description:
      "IoT smart home system with machine learning-based automation and energy optimization",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["IoT", "Python", "TensorFlow", "MQTT"],
    github: "https://github.com/username/project-five",
    demo: "https://project-five.demo",
    gradient: "from-[#00DDEB] to-[#6A98F0]",
    stats: { stars: "1.5k", forks: "276", views: "52k" },
  },
  {
    title: "Project Six",
    description:
      "Augmented reality educational platform with interactive 3D learning experiences",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Unity", "AR Kit", "C#", "WebGL"],
    github: "https://github.com/username/project-six",
    demo: "https://project-six.demo",
    gradient: "from-[#6A98F0] to-[#FF1CF7]",
    stats: { stars: "734", forks: "128", views: "19k" },
  },
  {
    title: "Project Seven",
    description:
      "Blockchain-based supply chain management system with real-time tracking",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Solidity", "Ethereum", "React", "Node.js"],
    github: "https://github.com/username/project-seven",
    demo: "https://project-seven.demo",
    gradient: "from-[#FF1CF7] to-[#b249f8]",
    stats: { stars: "892", forks: "145", views: "31k" },
  },
  {
    title: "Project Eight",
    description:
      "AI-powered virtual assistant for healthcare management and patient monitoring",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "TensorFlow", "React", "GraphQL"],
    github: "https://github.com/username/project-eight",
    demo: "https://project-eight.demo",
    gradient: "from-[#00DDEB] to-[#6A98F0]",
    stats: { stars: "1.3k", forks: "198", views: "44k" },
  },
];

const ProjectsCard = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative container mx-auto max-w-7xl py-32 overflow-hidden "
    >
      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-7xl font-black mb-8">
            <span className="inline-block bg-gradient-to-r from-[#FF1CF7] via-[#00DDEB] to-[#6A98F0] bg-clip-text text-transparent animate-gradient">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover innovative solutions that push the boundaries of technology
            and design
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                className="h-full rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.2] overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(255,28,247,0.2)]"
              >
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <AiFillEye className="w-4 h-4" />{" "}
                            {project.stats.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <AiFillGithub className="w-4 h-4" />{" "}
                            {project.stats.stars}
                          </span>
                        </div>
                        <div className="flex gap-3">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.github}
                            className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                          >
                            <AiFillGithub className="w-5 h-5" />
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.demo}
                            className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                          >
                            <AiOutlineLink className="w-5 h-5" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className={`px-4 py-1.5 text-sm rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white font-medium backdrop-blur-sm`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] rounded-full text-white font-medium shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
            >
              <span>Load More Projects</span>
              <AiOutlineArrowDown className="w-5 h-5 group-hover:animate-bounce" />
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectsCard;
