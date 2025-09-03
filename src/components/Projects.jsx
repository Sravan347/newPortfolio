import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { fadeInUp, staggerContainer, cardHover } from '../lib/motion';
import { projects } from '../lib/data';
import { useTilt } from '../hooks/useTilt';

const ProjectCard = ({ project, index }) => {
  const tiltRef = useTilt();

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="group"
    >
      <motion.div
        ref={tiltRef}
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <Card className="h-full glass hover-glow overflow-hidden cursor-pointer">
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {project.featured && (
              <div className="absolute top-4 right-4 z-20">
                <Badge className="bg-primary text-background border-none">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              </div>
            )}
          </div>

          <CardContent className="p-6 space-y-4">
            {/* Title */}
            <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs border-primary/30 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-primary/30 text-foreground hover:bg-primary hover:text-background transition-all duration-300 group/btn"
                onClick={() => window.open(project.github, '_blank')}
              >
                <Github className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                Code
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-gradient-gold hover:shadow-gold text-background transition-all duration-300 group/btn"
                onClick={() => window.open(project.live, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A showcase of my recent work and creative solutions" 
        />

        {/* Featured Projects */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </motion.div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-gradient mb-4">
                Other Projects
              </h3>
              <div className="w-16 h-1 bg-gradient-gold mx-auto rounded-full"></div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {otherProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index + featuredProjects.length} 
                />
              ))}
            </motion.div>
          </>
        )}

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mt-16"
        >
          <Card className="p-8 glass max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and contributions to open-source.
            </p>
            <Button
              size="lg"
              className="bg-gradient-gold hover:shadow-gold text-background font-semibold px-8 py-3 rounded-2xl transition-all duration-300 group"
              onClick={() => window.open('https://github.com/alexjohnson', '_blank')}
            >
              <Github className="mr-2 h-5 w-5 group-hover:animate-spin" />
              View GitHub
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
