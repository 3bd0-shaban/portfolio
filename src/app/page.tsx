"use client";
import TopCard from "@/components/landing_page/TopCard";
import ServicesCard from "@/components/landing_page/Services.card";
import PortfolioCard from "@/components/landing_page/projects.card";
import Footer from "@/components/landing_page/Footer";
import ContactCard from "@/components/landing_page/contact.card";
import Header from "@/components/landing_page/Header";
import { motion } from "framer-motion";
import PracticalEffect from "@/components/parts/practicale.effect";
import SkillsCard from "@/components/landing_page/skills.card";

export default function Component() {
  return (
    <div className="relative text-white overflow-hidden bg-[#0a0a0a]">
      <PracticalEffect />
      
      {/* Dynamic background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        
        {/* Moving particles */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-1 h-1 rounded-full
                bg-white/20 blur-[1px]
                animate-particle-float-${i % 5}
                left-[${Math.random() * 100}%]
                top-[${Math.random() * 100}%]
              `}
            >
              <div className="absolute w-full h-12 bg-gradient-to-b from-white/10 to-transparent transform -translate-y-full" />
            </div>
          ))}
        </div>

        {/* Flowing lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute h-[1px] w-[200%] 
                bg-gradient-to-r from-transparent via-white/10 to-transparent
                animate-flow-left-${i % 4}
                top-[${(i + 1) * 12}%]
                -left-full
                opacity-${30 + (i * 10)}
                blur-[2px]
              `}
            />
          ))}
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      {/* Glassmorphic Header */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/[0.02] backdrop-blur-xl border-b border-white/[0.05] shadow-lg"
      >
        <Header />
      </motion.div>

      <main className="relative">
        {/* Hero Section */}
        <TopCard />

        <ServicesCard />
        <SkillsCard />
        <PortfolioCard />

        <ContactCard />

        <Footer />
      </main>
    </div>
  );
}
