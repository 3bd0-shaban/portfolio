import { BiCodeAlt, BiServer, BiData, BiSupport } from "react-icons/bi";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ServicesCard = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const services = [
    {
      icon: <BiCodeAlt className="w-14 h-14" />,
      title: "Full-Stack Development",
      description:
        "End-to-end solutions using cutting-edge technologies. Creating seamless, scalable, and innovative digital experiences.",
      features: [
        "Next.js & React",
        "Modern Architecture",
        "Cloud Solutions",
        "Performance",
      ],
      gradient: "from-[#FF1CF7] to-[#b249f8]",
      delay: 0,
    },
    {
      icon: <BiServer className="w-14 h-14" />,
      title: "API Development",
      description:
        "Building powerful, secure APIs that drive your applications forward. Seamless third-party integrations and microservices.",
      features: [
        "GraphQL & REST",
        "Microservices",
        "Real-time Sync",
        "Security",
      ],
      gradient: "from-[#b249f8] to-[#00DDEB]",
      delay: 0.1,
    },
    {
      icon: <BiData className="w-14 h-14" />,
      title: "Database Solutions",
      description:
        "Architecting high-performance database solutions. Optimized for scale, security, and lightning-fast queries.",
      features: ["SQL & NoSQL", "Data Modeling", "Optimization", "Scaling"],
      gradient: "from-[#00DDEB] to-[#6A98F0]",
      delay: 0.2,
    },
    {
      icon: <BiSupport className="w-14 h-14" />,
      title: "Elite Support",
      description:
        "24/7 premium support and maintenance. Keeping your applications secure, updated, and performing at their peak.",
      features: [
        "24/7 Coverage",
        "Proactive Care",
        "Updates & Patches",
        "Monitoring",
      ],
      gradient: "from-[#6A98F0] to-[#FF1CF7]",
      delay: 0.3,
    },
  ];

  return (
    <section
      id="what-i-provide"
      ref={containerRef}
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,28,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,221,235,0.15),transparent_50%)]" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto max-w-7xl relative z-10 px-4"
      >
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl font-black mb-8 tracking-tight">
              <span className="inline-block bg-gradient-to-r from-[#FF1CF7] via-[#00DDEB] to-[#6A98F0] bg-clip-text text-transparent">
                Innovative Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Transforming visions into digital reality with cutting-edge
              technology and unparalleled expertise
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
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
      </motion.div>
    </section>
  );
};

export default ServicesCard;
