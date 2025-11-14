import React from "react";

import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Capabilites from "./Components/Capabilites.jsx";
import Highlight from "./Components/Highlight.jsx";
import Footer from "./Components/Footer.jsx";

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
