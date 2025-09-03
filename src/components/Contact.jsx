import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Twitter, Send, MapPin, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { fadeInUp, slideInFromLeft, slideInFromRight, staggerContainer } from '../lib/motion';
import { socialLinks, personalInfo } from '../lib/data';
import { useTilt } from '../hooks/useTilt';

const Contact = () => {
  const tiltRef = useTilt();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (you can implement this with a toast)
    alert('Message sent successfully!');
  };

  const iconMap = {
    Github,
    Linkedin,
    Mail,
    Twitter
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Let's discuss your next project and bring your ideas to life" 
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card className="glass hover-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gradient mb-6">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-border/30 text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-border/30 text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="bg-input border-border/30 text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors resize-none"
                      />
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-gold hover:shadow-gold text-background font-semibold py-3 rounded-2xl transition-all duration-300 group"
                  >
                    <Send className={`mr-2 h-5 w-5 ${isSubmitting ? 'animate-pulse' : 'group-hover:animate-bounce'}`} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <Card className="glass p-8">
              <h3 className="text-2xl font-bold text-gradient mb-6">
                Let's connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">{personalInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="glass p-8" ref={tiltRef}>
              <h3 className="text-xl font-bold text-gradient mb-6">
                Follow me
              </h3>
              
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-2 gap-4"
              >
                {socialLinks.map((social, index) => {
                  const IconComponent = iconMap[social.icon];
                  
                  return (
                    <motion.a
                      key={social.name}
                      variants={fadeInUp}
                      custom={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 rounded-2xl bg-card/50 hover:bg-primary/10 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.name}
                      </span>
                    </motion.a>
                  );
                })}
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;