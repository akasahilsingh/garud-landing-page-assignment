import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0">
            <a href="#">
            <span className="text-2xl font-bold tracking-widest text-brand-light uppercase">
              Vyom<span className="text-brand-orange">Garud</span>
            </span>
            </a>
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
};

export default Navbar;
