import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer, cardHover } from "../lib/motion";
import { projects } from "../lib/data";
import { useTilt } from "../hooks/useTilt";

const ProjectCard = ({ project, index }) => {
  const tiltRef = useTilt();

  return (
    <motion.div variants={fadeInUp} custom={index} className="group">
      <motion.div
        ref={tiltRef}
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="h-full"
      >
        <Card className="flex flex-col h-full glass hover-glow overflow-hidden cursor-pointer">
          {/* Project Image */}
          <div className="relative w-full h-64 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>

            {project.featured && (
              <div className="absolute top-4 right-4 z-20">
                <Badge className="bg-primary text-background border-none">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              </div>
            )}
          </div>

          {/* Card Content */}
          <CardContent className="flex flex-col flex-grow p-6 space-y-4">
            {/* Title */}
            <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
              {project.title}
            </h3>

            {/* Description (fills space so cards align) */}
            <p className="text-muted-foreground leading-relaxed flex-grow">
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
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                Code
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-gradient-gold hover:shadow-gold text-background transition-all duration-300 group/btn"
                onClick={() => window.open(project.live, "_blank")}
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
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

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
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 mb-16 items-stretch"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
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
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
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
      </div>
    </section>
  );
};

export default Projects;
