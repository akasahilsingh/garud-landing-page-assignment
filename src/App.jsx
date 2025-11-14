import React from "react";

import Navbar from "./assets/Components/Navbar.jsx";
import Hero from "./assets/Components/Hero.jsx";
import About from "./assets/Components/About.jsx";
import Capabilites from "./assets/Components/Capabilites.jsx";
import Highlight from "./assets/Components/Highlight.jsx";
import Footer from "./assets/Components/Footer.jsx";

// Main App Component: This is the container for all other sections
export default function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="grow">
        <Hero />
        <About />
        <Capabilites />
        <Highlight />
        <Footer />
      </main>
    </div>
  );
}
