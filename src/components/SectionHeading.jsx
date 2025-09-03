import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/motion';

const SectionHeading = ({ title, subtitle, className = '' }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gradient-gold mx-auto mt-8 rounded-full"></div>
    </motion.div>
  );
};

export default SectionHeading;