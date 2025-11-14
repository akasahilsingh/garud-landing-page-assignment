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

const Capabilites = () => {
  const capabilities = [
    {
      icon: Eye,
      title: "Persistent ISR",
      description:
        "Long-endurance platforms for uninterrupted Intelligence, Surveillance, and Reconnaissance.",
    },
    {
      icon: Cpu,
      title: "Autonomous Flight",
      description:
        "On-board AI for complex, GPS-denied navigation and dynamic mission re-tasking.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Data Links",
      description:
        "Hardened, multi-layered encryption for secure real-time data and command links.",
    },
    {
      icon: Database,
      title: "Actionable Analytics",
      description:
        "Real-time data processing and AI-driven insights delivered directly to operators.",
    },
  ];
  // Animation for cards appearing as they scroll into view
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <section id="capabilities" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-light">Core Capabilities</h2>
          <p className="mt-4 text-lg text-brand-muted">
            Advanced systems built for performance and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              className="bg-brand-gray p-8 rounded-lg border border-neutral-800"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible" // Triggers animation when element is in view
              viewport={{ once: true, amount: 0.3 }} // Animation runs once
            >
              <cap.icon className="h-10 w-10 text-brand-orange mb-4" />
              <h3 className="text-brand-light">{cap.title}</h3>
              <p className="mt-2 text-brand-muted">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilites;
