import reactImg from "../assets/react.png";
import nodeImg from "../assets/node.png";
import pythonImg from "../assets/python.png";
import jsImg from "../assets/javascript.png";
import figmaImg from "../assets/figma.png";
import gitImg from "../assets/git.png";
import graphqlImg from "../assets/graphql.png";
import reduxImg from "../assets/redux.png";
import typescriptImg from "../assets/typescript.png";
import tailwindImg from "../assets/tailwind.png";
import nextImg from "../assets/nextjs.png";
import mongodbImg from "../assets/mongodb.png";
import postgresImg from "../assets/postgresql.png";
import dockerImg from "../assets/docker.png";
import expressImg from "../assets/express.png";


export const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export const personalInfo = {
  name: 'Sravan Ks',
  role: 'MERN Stack Developer',
  tagline: 'Crafting elegant digital experiences with modern technologies',
  bio: 'Passionate full-stack developer with 5+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud technologies, with a keen eye for design and user experience.',
  email: 'alex@example.com',
  github: 'https://github.com/alexjohnson',
  linkedin: 'https://linkedin.com/in/alexjohnson',
  resume: '/resume.pdf'
};

export const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 90, icon: reactImg },
      { name: "JavaScript", level: 95, icon: jsImg },
      { name: "TypeScript", level: 85, icon: typescriptImg },
      { name: "Tailwind CSS", level: 90, icon: tailwindImg },
      { name: "Next.js", level: 80, icon: nextImg },
      { name: "Redux", level: 85, icon: reduxImg },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 90, icon: nodeImg },
      { name: "Express", level: 85, icon: expressImg },
      { name: "MongoDB", level: 80, icon: mongodbImg },
      { name: "PostgreSQL", level: 75, icon: postgresImg },
      { name: "GraphQL", level: 70, icon: graphqlImg },
      { name: "Python", level: 75, icon: pythonImg },
    ],
  },
  {
    category: "Tools & Cloud",
    technologies: [
      { name: "Git", level: 90, icon: gitImg },
      { name: "Docker", level: 80, icon: dockerImg },

      { name: "Figma", level: 80, icon: figmaImg },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/alexjohnson/ecommerce-platform',
    live: 'https://ecommerce-demo.vercel.app',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL', 'Redux'],
    github: 'https://github.com/alexjohnson/task-manager',
    live: 'https://taskflow-app.vercel.app',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with interactive maps, forecasts, and weather alerts. Built with modern React and weather APIs.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    github: 'https://github.com/alexjohnson/weather-dashboard',
    live: 'https://weather-pro.vercel.app',
    featured: false
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media metrics with data visualization, automated reporting, and performance insights.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/alexjohnson/social-analytics',
    live: 'https://social-insights.vercel.app',
    featured: false
  }
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/alexjohnson',
    icon: 'Github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/alexjohnson',
    icon: 'Linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:alex@example.com',
    icon: 'Mail'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/alexjohnson',
    icon: 'Twitter'
  }
];

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager at TechCorp',
    content: 'Alex delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise made the project a huge success.',
    avatar: '/api/placeholder/80/80'
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO at StartupXYZ',
    content: 'Working with Alex was a game-changer for our team. His full-stack skills and problem-solving abilities are truly impressive.',
    avatar: '/api/placeholder/80/80'
  }
];