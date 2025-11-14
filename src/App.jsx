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
import Drone from "./assets/Drone.webp"

// Main App Component: This is the container for all other sections
export default function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Capabilities />
        <Highlights />
        <ContactFooter />
      </main>
    </div>
  );
}

// 1. Navbar Component
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-widest text-brand-light uppercase">
              Vyom<span className="text-brand-orange">Garud</span>
            </span>
          </div>
          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium rounded-md text-brand-dark bg-brand-orange hover:bg-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// 2. Hero Section
function Hero() {
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
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-md text-brand-dark bg-brand-cyan hover:bg-white transition-colors shadow-lg shadow-brand-cyan/20"
          >
            Explore Solutions
            <MoveRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

// 3. About Section
function About() {
  return (
    <section id="about" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white">Our Mission</h2>
          <p className="mt-4 text-xl text-brand-muted">
            VyomGarud is dedicated to advancing unmanned aerial technology by
            delivering robust, secure, and autonomous systems. We empower
            organizations with superior situational awareness and operational
            effectiveness, ensuring mission success where reliability is
            non-negotiable.
          </p>
        </div>
      </div>
    </section>
  );
}

// 4. Capabilities Section
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

function Capabilities() {
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
}

// 5. Highlights Section
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

function Highlights() {
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
                  <div className="flex-shrink-0">
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
}

// 6. Contact / Footer Section
function ContactFooter() {
  return (
    <footer
      id="contact"
      className="py-20 bg-brand-dark border-t border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Side: Contact Form */}
          <div>
            <h2 className="text-brand-light">Get in Touch</h2>
            <p className="mt-3 text-lg text-brand-muted">
              Contact our solutions team to discuss your mission requirements.
            </p>
            <form className="mt-8 space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-neutral-700 bg-brand-gray px-4 py-3 text-brand-light placeholder-brand-muted focus:border-brand-cyan focus:ring-brand-cyan"
                  placeholder="Enter your work email"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="block w-full rounded-md border-neutral-700 bg-brand-gray px-4 py-3 text-brand-light placeholder-brand-muted focus:border-brand-cyan focus:ring-brand-cyan"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-base font-medium rounded-md text-brand-dark bg-brand-orange hover:bg-white transition-colors"
                  onClick={(e) => e.preventDefault()} 
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Links & Copyright */}
          <div className="md:mt-12">
            <h3 className="text-2xl font-bold tracking-widest text-brand-light uppercase">
              Vyom<span className="text-brand-orange">Garud</span>
            </h3>
            <p className="mt-4 text-brand-muted">
              Precision Autonomy for Critical Missions.
            </p>
            <div className="mt-8 flex space-x-6">
              <a
                href="#"
                className="text-brand-muted hover:text-brand-light transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-brand-muted hover:text-brand-light transition-colors"
              >
                X (Twitter)
              </a>
              <a
                href="#"
                className="text-brand-muted hover:text-brand-light transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800 text-center">
          <p className="text-sm text-brand-muted">
            &copy; {new Date().getFullYear()} VyomGarud Systems. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
