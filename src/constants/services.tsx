import { BiCodeAlt, BiServer, BiData, BiSupport } from "react-icons/bi";

export const services = [
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
    features: ["GraphQL & REST", "Microservices", "Real-time Sync", "Security"],
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
