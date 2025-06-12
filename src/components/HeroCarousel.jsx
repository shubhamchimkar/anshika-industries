import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import banner1 from '../assets/banner1.jpeg';
import banner2 from '../assets/banner2.jpg';

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      image: banner1,
      title: 'BOPP Self-Adhesive Tapes',
      description: 'Custom printed tapes from 1/2 inch to 5 inch. Perfect for every package.',
    },
    {
      image: banner2,
      title: 'Strapping Rolls Supplier',
      description: 'Virgin, Next Virgin & Ghatha Patti rolls in 8mm–12mm, up to 2000m.',
    },
  ];

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[80vh] md:h-screen" id="home">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="flex flex-col md:flex-row h-full w-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left - Text */}
          <div className="w-full md:w-1/2 bg-green-700 text-white flex flex-col justify-center items-start px-6 md:px-12 py-12">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-black bg-opacity-30 px-4 py-2 rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {slides[index].title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-lg bg-black bg-opacity-20 px-4 py-2 rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {slides[index].description}
            </motion.p>
          </div>

          {/* Right - Image */}
          <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6">
            <motion.div
              className="shadow-xl rounded-lg overflow-hidden"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={slides[index].image}
                alt={slides[index].title}
                className="object-contain h-72 sm:h-96 w-full max-w-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <div className="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2 px-4 z-10">
        <button
          onClick={prevSlide}
          className="bg-black bg-opacity-40 text-white text-2xl p-2 rounded hover:bg-opacity-60 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="bg-black bg-opacity-40 text-white text-2xl p-2 rounded hover:bg-opacity-60 transition"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
