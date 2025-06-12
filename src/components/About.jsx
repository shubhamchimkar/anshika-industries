import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.586l7.879-7.879a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const About = () => {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-6 font-mont">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left - Logo Animation */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={logo} alt="Anshika Industries Logo" className="w-64 md:w-60" />
        </motion.div>

        {/* Right - Text Content Animation */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block bg-blue-700 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            ABOUT US
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Supplier of Self-Adhesive Tapes & Strapping Rolls
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Established in 2025, Anshika Industries is a leading supplier of BOPP Self-Adhesive Tapes and high-quality Strapping Rolls. Our product range includes multi-color and custom-printed packaging tapes, as well as virgin and next virgin grade strapping rolls.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800 text-base font-medium"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {[
              'BOPP Packaging Tapes',
              'Virgin & Printed Strapping Rolls',
              'Custom Printing Options',
              'Reliable Delivery Support',
            ].map((text, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <CheckIcon /> {text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
