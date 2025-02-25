"use client";
import TopCard from "@/components/landing_page/TopCard";
import ServicesCard from "@/components/landing_page/Services.card";
import PortfolioCard from "@/components/landing_page/projects.card";
import Footer from "@/components/landing_page/Footer";
import ContactCard from "@/components/landing_page/contact.card";
import Header from "@/components/landing_page/Header";
import PracticalEffect from "@/components/parts/practicale.effect";
import SkillsCard from "@/components/landing_page/skills.card";
import { motion } from "framer-motion";
import { Suspense, useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative text-white overflow-hidden bg-[#0a0a0a]">
      <PracticalEffect />
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

        {/* Simplified glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl animate-pulse-slow delay-1000" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/[0.02] backdrop-blur-xl border-b border-white/[0.05] shadow-lg"
      >
        <Header />
      </motion.div>

      <main className="relative">
        <TopCard />

        <Suspense fallback={<div className="h-screen" />}>
          <ServicesCard />
          <SkillsCard />
          <PortfolioCard />
          <ContactCard />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
