import React from "react";

const Footer = () => {
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
};

export default Footer;
