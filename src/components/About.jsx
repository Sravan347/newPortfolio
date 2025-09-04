import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import SectionHeading from './SectionHeading';
import { fadeInUp, slideInFromLeft, slideInFromRight, staggerContainer } from '../lib/motion';
import { personalInfo } from '../lib/data';
import { useTilt } from '../hooks/useTilt';
import codeImage from '../assets/coding.jpg';

const About = () => {
  const tiltRef = useTilt();

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Passionate about creating exceptional digital experiences" 
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center lg:justify-start"
          >
            <div
              ref={tiltRef}
              className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-3xl overflow-hidden shadow-elegant hover-glow"
            >
              <div className="absolute inset-0 bg-gradient-gold opacity-20"></div>
              <img
                src={codeImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                industry trends. When I'm not coding, I enjoy contributing to open-source projects 
                and mentoring aspiring developers.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-6 mt-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  custom={index}
                >
                  <Card className="p-6 text-center glass hover-glow cursor-pointer">
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20"
        >
          <Card className="p-8 md:p-12 glass text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
              My Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To bridge the gap between innovative design and robust functionality, creating digital 
              solutions that not only meet business objectives but also provide exceptional user experiences. 
              I'm committed to continuous learning and pushing the boundaries of what's possible with modern web technologies.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
