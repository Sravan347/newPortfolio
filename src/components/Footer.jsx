import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';
import { fadeInUp } from '../lib/motion';
import { personalInfo } from '../lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Logo */}
          <div className="text-3xl font-bold text-gradient">
            AJ
          </div>

          {/* Quote */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
            "Code is like humor. When you have to explain it, it's bad."
          </p>

          {/* Made with love */}
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code2 className="w-4 h-4 text-primary" />
            <span>by {personalInfo.name}</span>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border/20">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;