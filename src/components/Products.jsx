import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 🔁 Import images
import tape1 from '../assets/tape/tape1.jpeg';
import tape2 from '../assets/tape/tape2.jpeg';
import tape3 from '../assets/tape/tape3.png';

import stripe1 from '../assets/stripe/stripe1.jpeg';
import stripe2 from '../assets/stripe/stripe2.jpeg';
import stripe3 from '../assets/stripe/stripe3.jpeg';
import stripe4 from '../assets/stripe/stripe4.jpeg';
import stripe5 from '../assets/stripe/stripe5.jpeg';
import stripe6 from '../assets/stripe/stripe6.jpeg';

const Products = () => {
  const [activeTab, setActiveTab] = useState('BOPP');

  const products = {
    BOPP: [
      { title: 'Transparent', description: 'Length: 40m–100m | Sizes: 1/2–5 inch', src: tape1 },
      { title: 'Multi-Colour', description: 'Length: 40m–100m | Sizes: 1/2–5 inch', src: tape2 },
      { title: 'Custom Print', description: 'Length: 40m–100m | Sizes: 1/2–5 inch', src: tape3 },
    ],
    STRIP: [
      { title: 'Stripping Roll', description: 'Virgin | Ghatha Patti | 800–2000m | 8mm–12mm', src: stripe1 },
      { title: 'Stripping Roll', description: 'Custom Print | Ghatha Patti | 800–2000m | 8mm–12mm', src: stripe2 },
      { title: 'Stripping Roll', description: '12mm NAT', src: stripe3 },
      { title: 'Stripping Roll', description: '12mm N2V', src: stripe4 },
      { title: 'Stripping Roll', description: '12mm S1', src: stripe5 },
      { title: 'Stripping Roll', description: '12mm Virgin', src: stripe6 },
    ],
  };

  const tabs = [
    { key: 'BOPP', label: 'BOPP Adhesive Tape' },
    { key: 'STRIP', label: 'Stripping Patti' },
  ];

  return (
    <section id="products" className="py-16 px-4 max-w-7xl mx-auto font-mont">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Products
      </motion.h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <motion.button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab.key
                ? 'bg-blue-700 text-white shadow'
                : 'bg-blue-200 text-blue-900 hover:bg-blue-300'
            }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Product Grid with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          {products[activeTab].map((product, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={product.src}
                alt={product.title || `Product ${index + 1}`}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center text-center transition-all duration-300">
                {(product.title || product.description) && (
                  <div className="opacity-0 group-hover:opacity-100 text-white px-4">
                    <p className="font-semibold text-lg">{product.title}</p>
                    <p className="text-sm">{product.description}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Products;
