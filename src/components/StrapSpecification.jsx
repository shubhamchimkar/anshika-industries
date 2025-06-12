import React from 'react';
import { motion } from 'framer-motion';
import tickIcon from '../assets/tick-circle.png';

const specs = [
  { title: 'Available Width', detail: '8mm, 9mm, 12mm, 15mm, 19mm, tolerance +/- 0.6mm' },
  { title: 'Thickness', detail: '0.5 – 1.27 mm ; tolerance +/-0.05mm' },
  { title: 'Standard Core Sizes', detail: '203 ID *188 L, 406 ID * 150 L' },
  { title: 'Use Type', detail: 'Suitable for all high production Fully Automatic power Strapping Machines' },
  { title: 'Packing', detail: 'One or Two rolls in one Corrugated Box / Paper Sheet, stretched film.' },
  { title: 'Surface', detail: 'Plain / Embossed' },
  { title: 'Standard Colors', detail: 'Transparent, White, Golden Yellow, Lemon Yellow, Red, Blue' },
  { title: 'Printing Facility', detail: 'Available as per requirements of quality, sizes & available designs.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const StrapSpecification = () => {
  return (
    <section className="bg-green-700 text-white py-20" id="specifications">
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.span
          className="inline-block bg-green-900 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6"
          variants={itemVariants}
        >
          BEST QUALITY PP STRAP
        </motion.span>

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          variants={itemVariants}
        >
          Best Quality PP / PP Strapping Roll Specification
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {specs.map((spec, idx) => (
            <motion.div
              key={idx}
              className="flex gap-4 items-start"
              variants={itemVariants}
            >
              <img src={tickIcon} alt="check" className="w-10 h-10 mt-1" />
              <div>
                <h4 className="text-xl font-semibold">{spec.title}</h4>
                <p className="text-white/90 border-b border-dashed border-white/50 pb-2 mt-1">
                  {spec.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StrapSpecification;
