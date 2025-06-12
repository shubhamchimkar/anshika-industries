import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch('https://formsubmit.co/ajax/anshikaindustries27@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
      });

      setSubmitted(true);
      form.reset(); // clear form after submission
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100">
      {/* Heading & Info */}
      <motion.div
        className="max-w-2xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-blue-700 text-white px-5 py-2 rounded-full font-semibold mb-4"
        >
          GET IN TOUCH
        </motion.button>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us For Any Queries!</h2>
        <p className="text-md text-gray-600">
          Email: <a href="mailto:anshikaindustries27@gmail.com" className="text-blue-500 hover:underline">anshikaindustries27@gmail.com</a><br />
          Phone: <a href="tel:+919022410110" className="text-blue-500 hover:underline">+91 9022410110</a>
        </p>
      </motion.div>

      {/* Alert */}
      {submitted && (
        <motion.div
          className="max-w-xl mx-auto mb-6 p-4 bg-blue-100 text-blue-800 rounded-md shadow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          ✅ Thank you! Your message has been sent successfully.
        </motion.div>
      )}

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <input type="hidden" name="_subject" value="New Contact Submission" />
        <input type="hidden" name="_captcha" value="false" />

        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-blue-700 text-white font-semibold py-3 rounded-full hover:bg-blue-800 transition"
        >
          Submit Now
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
