import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';
import ParticlesBG from './ParticlesGB';
import { heroVariants, textReveal, fadeInUp } from '../lib/motion';
import { personalInfo } from '../lib/data';

// Three.js Gold Cube Component
const GoldCube = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.8}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[2.1, 2.1, 2.1]} />
        <meshBasicMaterial
          color="#FFD700"
          wireframe={true}
          opacity={0.3}
          transparent={true}
        />
      </mesh>
    </Float>
  );
};

// Three.js Scene
const ThreeScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={Math.min(window.devicePixelRatio, 2)}
      className="absolute inset-0"
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#FFD700" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#FFFFFF" />
      
      <Suspense fallback={null}>
        <GoldCube />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
};

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <ParticlesBG />
      <div className="absolute inset-0 z-10">
        <ThreeScene />
      </div>

      {/* Content */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Greeting */}
        <motion.p
          variants={textReveal}
          custom={0}
          className="text-primary text-lg md:text-xl font-medium mb-4 tracking-wide"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={textReveal}
          custom={1}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient leading-tight"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={textReveal}
          custom={2}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 text-foreground tracking-wide"
        >
          {personalInfo.role}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={textReveal}
          custom={3}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-gradient-gold hover:shadow-gold text-background font-semibold px-8 py-3 rounded-2xl transition-all duration-300 group"
            onClick={() => window.open(personalInfo.resume, '_blank')}
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-background font-semibold px-8 py-3 rounded-2xl transition-all duration-300 group backdrop-blur-sm"
            onClick={scrollToContact}
          >
            <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Get In Touch
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;