import { services } from "@/constants/services";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

const ServicesCard = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section
      id="what-i-provide"
      ref={containerRef}
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at center, rgba(255,28,247,0.15), transparent 50%),
              radial-gradient(circle at center, rgba(0,221,235,0.15), transparent 50%)
            `,
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tight">
              <span className="inline-block bg-gradient-to-r from-[#FF1CF7] via-[#00DDEB] to-[#6A98F0] bg-clip-text text-transparent">
                Innovative Solutions
              </span>
            </h2>
            <p className="md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Transforming visions into digital reality with cutting-edge
              technology and unparalleled expertise
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                viewport={{ once: true }}
                className="group h-full p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/[0.05] hover:border-white/[0.1] transition-all duration-500"
              >
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-4">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-white/[0.05] to-transparent hover:from-white/[0.08] transition-colors duration-300"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}
                      />
                      <span className="text-sm text-gray-300 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
