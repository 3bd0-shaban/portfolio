"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PracticalEffect = () => {
  const [particles, setParticles] = useState<
    Array<{
      top: number;
      left: number;
      width: number;
      height: number;
      background: string;
    }>
  >([]);

  useEffect(() => {
    const generateParticles = () =>
      Array.from({ length: 50 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        width: Math.random() * 6 + 2,
        height: Math.random() * 6 + 2,
        background: `rgba(${Math.random() * 255}, ${
          Math.random() * 255
        }, 255, 0.4)`,
      }));

    setParticles(generateParticles());
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="absolute w-full h-full">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
              x: Math.sin(i) * 100,
              y: Math.cos(i) * 100,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute rounded-full"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              background: particle.background,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PracticalEffect;
