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
import ecom from "../assets/ecom.webp";
import todo from "../assets/todo.webp";
import netflix from "../assets/netflix.jpg";
import job from "../assets/job.jpg";



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
  bio: 'Passionate full-stack developer with 1+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud technologies, with a keen eye for design and user experience.',
  email: 'sravansreyas3@gmail.com',
  github: 'https://github.com/Sravan347',
  linkedin: 'https://www.linkedin.com/in/sravanks2/',
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
    title: 'HireWave - Job Portal',
    description: 'A full-stack MERN job portal with role-based authentication (Admin, Recruiter, Candidate). Features include job posting, resume upload, applicant tracking, interview scheduling, and offer management.',
    image: job,
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux Toolkit', 'Cloudinary', 'JWT'],
    github: 'https://github.com/Sravan347',
    live: 'https://github.com/Sravan347',
    featured: true
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    image: ecom,
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/Sravan347',
    live: 'https://github.com/Sravan347',
    featured: true
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: todo,
    technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL', 'Redux'],
    github: 'https://github.com/Sravan347',
    live: 'https://github.com/Sravan347',
    featured: false
  },
  {
    id: 4,
    title: 'Netflix Clone',
    description: 'A Netflix-inspired movie streaming platform with user authentication, movie browsing, video playback, and responsive UI.',
    image: netflix,
    technologies: ['React', 'Firebase', 'TMDB API', 'Tailwind CSS'],
    github: 'https://github.com/Sravan347',
    live: 'https://github.com/Sravan347',
    featured: false
  }
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Sravan347',
    icon: 'Github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sravanks2',
    icon: 'Linkedin'
  },
  {
    name: 'Email',
    url: 'sravansreyas3@gmail.com',
    icon: 'Mail'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'Twitter'
  }
];

