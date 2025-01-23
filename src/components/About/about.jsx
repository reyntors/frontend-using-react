import React from 'react';
import './about.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      id="about"
    >
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          <span className="aboutTitle">About Us</span>
          <div className="aboutDesc">
            <p>
              <span className="miyags">Miyags Signtech Services</span>, a Davao-based supplier specializing in
              printing and fabrication services in the Mindanao region.<br/>Our team
              is dedicated to providing high-quality solutions for your
              advertising needs, and we would love the opportunity to become a
              trusted supplier to your company.
            </p>
            <br/>
            <p>Every project will benefit from our creative team of highly experienced professionals who will work one on one with you from the initial concept through completion of your project! Look no farther, we are here for you with expert custom signage and billboard advertising for your business. Let us show you what our team can do for you
            and your brand.</p>
            <h1>WE OFFER  FREE ESTIMATE!</h1>
            <div className="connect-btn-container">
              <button className='connect-btn'>Learn More About Us</button>
            </div>
          </div>
        </motion.div>
      </div>
     
    </motion.section>
  );
};

export default About;
