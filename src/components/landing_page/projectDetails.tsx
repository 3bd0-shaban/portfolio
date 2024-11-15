import {
    AiOutlineClose,
    AiFillGithub,
    AiOutlineLink,
    AiOutlineExpandAlt,
} from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback, memo } from "react";

type props = {
  selectedProject: projectTypes;
  setSelectedProject: (project: projectTypes | null) => void;
  currentImageIndex: number;
  projectImages: string[];
  setCurrentImageIndex: (index: number) => void;
};

const ProjectDetails = memo(
  ({
    selectedProject,
    setSelectedProject,
    currentImageIndex,
    setCurrentImageIndex,
    projectImages,
  }: props) => {
    const [isImageMaximized, setIsImageMaximized] = useState(false);
    const [scale, setScale] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 });
    const imageContainerRef = useRef<HTMLDivElement>(null);

    const handleImageDoubleClick = useCallback(() => {
      setIsImageMaximized((prev) => !prev);
      setScale(1);
      setScrollPos({ x: 0, y: 0 });
    }, []);

    const handleMouseDown = useCallback(
      (e: React.MouseEvent) => {
        if (e.button === 1) {
          e.preventDefault();
          setIsDragging(true);
          setStartPos({
            x: e.clientX - scrollPos.x,
            y: e.clientY - scrollPos.y,
          });
        }
      },
      [scrollPos]
    );

    const handleMouseMove = useCallback(
      (e: React.MouseEvent) => {
        if (isDragging) {
          const newX = e.clientX - startPos.x;
          const newY = e.clientY - startPos.y;
          setScrollPos({ x: newX, y: newY });
        }
      },
      [isDragging, startPos]
    );

    const handleMouseUp = useCallback(() => {
      setIsDragging(false);
    }, []);

    const handleWheel = useCallback(
      (e: React.WheelEvent) => {
        if (isImageMaximized) {
          e.preventDefault();
          setScale((prevScale) => {
            const newScale = prevScale + (e.deltaY > 0 ? -0.1 : 0.1);
            return Math.min(Math.max(0.5, newScale), 3);
          });
        }
      },
      [isImageMaximized]
    );

    const openImageInNewTab = useCallback(() => {
      window.open(projectImages[currentImageIndex], "_blank");
    }, [projectImages, currentImageIndex]);

    const handleCloseModal = useCallback(() => {
      setSelectedProject(null);
    }, [setSelectedProject]);

    const handleImageNavigation = useCallback(
      (idx: number) => {
        setCurrentImageIndex(idx);
      },
      [setCurrentImageIndex]
    );

    const modalContentProps = {
      initial: { scale: 0.9, y: 50 },
      animate: { scale: 1, y: 0 },
      exit: { scale: 0.9, y: 50 },
      transition: { type: "spring", bounce: 0.2 },
    };

    const imageProps = {
      key: currentImageIndex,
      src: projectImages[currentImageIndex],
      alt: `${selectedProject.title} - Image ${currentImageIndex + 1}`,
      className: "w-full h-full object-contain",
      style: {
        transform: `scale(${scale}) translate(${scrollPos.x}px, ${scrollPos.y}px)`,
      },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 },
      onDoubleClick: handleImageDoubleClick,
      draggable: false,
    };

    const renderTechnologyTags = useCallback(
      () =>
        selectedProject.tags.map((tag, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`px-4 py-1.5 text-sm rounded-full bg-gradient-to-r ${selectedProject.gradient} bg-opacity-20 backdrop-blur-sm`}
          >
            {tag}
          </motion.span>
        )),
      [selectedProject.tags, selectedProject.gradient]
    );

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        onClick={handleCloseModal}
      >
        <motion.div
          {...modalContentProps}
          className="w-full max-w-7xl bg-gradient-to-br from-gray-800/50 to-black/50 rounded-3xl border border-white/10 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
            onClick={handleCloseModal}
          >
            <AiOutlineClose className="w-6 h-6" />
          </motion.button>

          <div className="flex flex-col lg:flex-row max-h-[90vh]">
            <div className="w-full lg:w-3/5 h-[40vh] lg:h-[90vh] relative bg-black/30">
              <div
                ref={imageContainerRef}
                className="w-full h-full flex items-center justify-center relative group"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onWheel={handleWheel}
              >
                <AnimatePresence mode="wait">
                  <motion.img {...imageProps} />
                </AnimatePresence>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={openImageInNewTab}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <AiOutlineExpandAlt className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm">
                {projectImages.map((_, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.2 }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentImageIndex ? "bg-white" : "bg-white/40"
                    }`}
                    onClick={() => handleImageNavigation(idx)}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 lg:p-8 bg-black/20 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  {selectedProject.title}
                </h2>

                <div className="flex flex-wrap gap-3">
                  {selectedProject.github && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <AiFillGithub className="w-5 h-5" />
                      <span>Source Code</span>
                    </motion.a>
                  )}
                  {selectedProject.demo && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"
                    >
                      <AiOutlineLink className="w-5 h-5" />
                      <span>Live Preview</span>
                    </motion.a>
                  )}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white/90">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {renderTechnologyTags()}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }
);

ProjectDetails.displayName = "ProjectDetails";

export default ProjectDetails;
