import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white text-black py-10 mt-10 rounded-lg shadow-lg border-t-4 border-yellow-400"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10 px-6">
        {/* Business Info */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start gap-10"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-yellow-500">Anshika Industries</h3>
            <p className="mt-2">
              BOPP tape, strapping Patti rolls,<br />
              All types of Packaging Materials & Machineries Sales available.
            </p>
          </div>

          <motion.div
            className="flex-1"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p><strong className="text-yellow-500">Contact:</strong> <a href="tel:+919022410110" className="hover:underline">+91 90224 10110</a></p>
            <p><strong className="text-yellow-500">Email:</strong> <a href="mailto:anshikaindustries27@gmail.com" className="hover:underline">anshikaindustries27@gmail.com</a></p>
            <p><strong className="text-yellow-500">GST:</strong> 27HSTPK5651M1ZQ</p>
            <p><strong className="text-yellow-500">Address:</strong> Golani Naka, Valiv,<br />Vasai East, Palghar 401208</p>
          </motion.div>
        </motion.div>

        {/* Google Map Embed */}
        <motion.div
          className="w-full rounded-lg overflow-hidden shadow-md"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Anshika Industries Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.877535010089!2d72.85408721488465!3d19.246669186990727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b147bc3d7197%3A0x1a92f2b20957e6f6!2sGolani%20Naka%2C%20Vasai%20East%2C%20Maharashtra%20401208!5e0!3m2!1sen!2sin!4v1684766226206!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        <hr className="border-gray-300 my-4" />
        <motion.p
          className="text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          &copy; 2025 Anshika Industries. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
