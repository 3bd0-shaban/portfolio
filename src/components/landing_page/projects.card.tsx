import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  AiFillGithub,
  AiOutlineLink,
  AiFillEye,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { useRef, useState, useEffect } from "react";
import ProjectDetails from "./projectDetails";
import { projects } from "@/constants/Projects";
import Image from "next/image";

const ProjectsCard = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedProject, setSelectedProject] = useState<projectTypes | null>(
    null
  );
  const [projectImages, setProjectImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedProject) {
        if (e.key === "Escape") setSelectedProject(null);
        if (e.key === "ArrowRight")
          setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
        if (e.key === "ArrowLeft")
          setCurrentImageIndex(
            (prev) => (prev - 1 + projectImages.length) % projectImages.length
          );
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedProject, projectImages]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      const header = document.querySelector("header");
      if (header) header.style.display = "none";
    } else {
      document.body.style.overflow = "unset";
      const header = document.querySelector("header");
      if (header) header.style.display = "block";
    }

    return () => {
      document.body.style.overflow = "unset";
      const header = document.querySelector("header");
      if (header) header.style.display = "block";
    };
  }, [selectedProject]);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  const handleProjectClick = async (project: projectTypes) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    try {
      const images = Array.from(
        { length: 5 },
        (_, i) => `${project.folderImages}/${i + 1}.png`
      );
      setProjectImages(images);
    } catch (error) {
      console.error("Error loading project images:", error);
    }
  };

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative container mx-auto max-w-7xl py-32 overflow-hidden"
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
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                className="h-full rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.2] overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(255,28,247,0.2)]"
              >
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    height={500}
                    width={500}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center justify-between text-sm">
                        {project.stats && (
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
                        )}
                        <div className="flex gap-3">
                          {project.github && (
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <AiFillGithub className="w-5 h-5" />
                            </motion.a>
                          )}
                          {project.demo && (
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <AiOutlineLink className="w-5 h-5" />
                            </motion.a>
                          )}
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

        <AnimatePresence>
          {selectedProject && (
            <ProjectDetails
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              currentImageIndex={currentImageIndex}
              projectImages={projectImages}
              setCurrentImageIndex={setCurrentImageIndex}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectsCard;
