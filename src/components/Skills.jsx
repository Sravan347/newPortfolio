import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer, scaleIn } from "../lib/motion";
import { skills } from "../lib/data";
import { useTilt } from "../hooks/useTilt";

const SkillCard = ({ skill, index }) => {
  const tiltRef = useTilt();

  return (
    <motion.div variants={scaleIn} custom={index} className="tilt-3d">
      <Card
        ref={tiltRef}
        className="p-6 glass hover-glow cursor-pointer group"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {/* If icon is an image, show it */}
            {typeof skill.icon === "string" && skill.icon.endsWith(".png") ? (
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 object-contain "

              />
            ) : (
              <span className="text-3xl">{skill.icon}</span>
            )}
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {skill.name}
            </h4>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2 mb-2">
          <motion.div
            className="bg-gradient-gold h-2 rounded-full"
            role="progressbar"
            aria-valuenow={skill.level}
            aria-valuemin={0}
            aria-valuemax={100}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
        <div className="text-sm text-muted-foreground text-right">
          {skill.level}%
        </div>
      </Card>
    </motion.div>
  );
};

const CategorySection = ({ category, index }) => {
  return (
    <motion.div variants={fadeInUp} custom={index} className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gradient mb-4">
          {category.category}
        </h3>
        <div className="w-16 h-1 bg-gradient-gold mx-auto rounded-full"></div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {category.technologies.map((skill, skillIndex) => (
          <SkillCard key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies I work with to bring ideas to life"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {skills.map((category, index) => (
            <CategorySection
              key={category.category}
              category={category}
              index={index}
            />
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <Card className="p-8 glass text-center">
            <h3 className="text-2xl font-bold text-gradient mb-6">
              Additional Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {[
                "Responsive Design",
                "REST APIs",
                "Microservices",
                "Testing (Jest, Cypress)",
                "CI/CD",
                "Agile/Scrum",
                "Code Reviews",
                "Performance Optimization",
                "SEO",
                "Accessibility",
                "UI/UX Design",
                "Problem Solving",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="px-4 py-2 border-primary/30 text-foreground hover:bg-primary hover:text-background transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
