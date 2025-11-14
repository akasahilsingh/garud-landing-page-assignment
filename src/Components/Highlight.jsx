import React from "react";
import Drone from "../assets/Drone.webp"
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
const Highlight = () => {
  const highlights = [
    {
      icon: Target,
      title: "AI-Powered Targeting",
      description:
        "On-edge object detection and classification for real-time threat assessment.",
    },
    {
      icon: Radio,
      title: "Multi-Spectrum Comms",
      description:
        "Redundant, anti-jamming communication links for robust connectivity in hostile environments.",
    },
    {
      icon: Box,
      title: "Modular Payload System",
      description:
        "Rapidly swap sensors and equipment (EO/IR, LiDAR, SIGINT) for multi-role capability.",
    },
  ];
  return (
    <section id="highlights" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text */}
          <div>
            <h2 className="text-brand-light">Engineered for the Edge</h2>
            <p className="mt-4 text-xl text-brand-muted">
              Our systems integrate best-in-class hardware and software to
              provide a decisive operational advantage.
            </p>
            <ul className="mt-8 space-y-6">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-cyan/10 text-brand-orange">
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-brand-light">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-brand-muted">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Column: Visual Placeholder */}
          <motion.div
            className="flex items-center justify-center h-96 bg-brand-dark rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={Drone}
              alt="Advanced UAV system with AI targeting and modular payload"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
