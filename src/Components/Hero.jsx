import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  ShieldCheck,
  Target,
  Radio,
  MoveRight,
  Eye,
  Box,
  Database,
} from "lucide-react";
const Hero = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animate children one after another
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-20">
      {/* Background Visual: Subtle gradient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-brand-cyan/10 blur-[120px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-brand-cyan/10 blur-[120px]" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-black uppercase text-brand-light"
          variants={itemVariants}
        >
          Vyom<span className="text-brand-orange">Garud</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-xl md:text-2xl text-brand-muted max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Precision Autonomy for Critical Missions. We engineer high-reliability
          UAV systems for defense, security, and enterprise operations.
        </motion.p>

        <motion.div className="mt-10" variants={itemVariants}>
          <a
            href="#capabilities"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-md text-brand-dark bg-brand-orange hover:bg-white transition-colors shadow-lg shadow-brand-cyan/20"
          >
            Explore Solutions
            <MoveRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
