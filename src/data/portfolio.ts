import {
  FaPython, FaDatabase, FaChartBar, FaBrain, FaRobot, FaGithub, FaLinkedin,
  FaEnvelope, FaPhone, FaMapMarkerAlt,
} from 'react-icons/fa';
import {
  SiPowerbi, SiTableau, SiOpenai, SiMicrosoftexcel,
} from 'react-icons/si';
import { HiSparkles, HiCode, HiChartPie, HiLightningBolt } from 'react-icons/hi';

// ─── NAV LINKS ───────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', name: 'Home', href: '#home', url: '#home' },
  { label: 'About', name: 'About', href: '#about', url: '#about' },
  { label: 'Skills', name: 'Skills', href: '#skills', url: '#skills' },
  { label: 'Projects', name: 'Projects', href: '#projects', url: '#projects' },
  { label: 'Experience', name: 'Experience', href: '#experience', url: '#experience' },
  { label: 'Certifications', name: 'Certifications', href: '#certifications', url: '#certifications' },
  { label: 'Testimonials', name: 'Testimonials', href: '#testimonials', url: '#testimonials' },
  { label: 'Contact', name: 'Contact', href: '#contact', url: '#contact' },
];

// ─── HERO ────────────────────────────────────────────────────────────────
export const hero = {
  name: 'Udhayakumar P',
  title: 'Data Analytics, Data Science, Generative AI',
  subtitle:
    'Transforming data into actionable insights using Python, SQL, Power BI, machine learning, and large language models.',
  cta: [
    { label: 'View Projects', href: '#projects', variant: 'primary' as const },
    { label: 'Download Resume', href: '/resume.pdf', variant: 'secondary' as const },
    { label: 'Contact Me', href: '#contact', variant: 'outline' as const },
  ],
  typingTexts: [
    'Data Analyst',
    'Data Scientist',
    'AI Engineer',
    'ML Engineer',
    'GenAI Developer',
  ],
};

// ─── ABOUT ───────────────────────────────────────────────────────────────
export const about = {
  description: [
    "I'm a passionate Data Analytics and AI professional with deep expertise in transforming raw data into strategic insights. My journey spans the full data lifecycle — from data wrangling and statistical analysis to building production-grade machine learning models and deploying GenAI-powered applications.",
    "With a strong foundation in Python, SQL, and modern BI tools, I specialize in creating data-driven solutions that empower businesses to make smarter decisions. I'm particularly excited about the intersection of data science and generative AI, where I build intelligent applications using LLMs, RAG architectures, and AI agents.",
  ],
  stats: [
    { label: 'Projects Completed', value: '20+' },
    { label: 'Certifications', value: '8+' },
    { label: 'Tools & Technologies', value: '15+' },
    { label: 'Years Learning', value: '3+' },
  ],
};

// ─── SKILLS ──────────────────────────────────────────────────────────────
export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export const skillCategories = [
  {
    title: 'Languages & Tools',
    icon: 'code',
    skills: [
      { name: 'Python', level: 90, category: 'Languages & Tools' },
      { name: 'SQL', level: 88, category: 'Languages & Tools' },
      { name: 'Excel', level: 85, category: 'Languages & Tools' },
      { name: 'Power BI', level: 82, category: 'Languages & Tools' },
      { name: 'Tableau', level: 70, category: 'Languages & Tools' },
    ],
  },
  {
    title: 'Data Science & ML',
    icon: 'brain',
    skills: [
      { name: 'Machine Learning', level: 85, category: 'Data Science & ML' },
      { name: 'Data Cleaning', level: 92, category: 'Data Science & ML' },
      { name: 'Feature Engineering', level: 83, category: 'Data Science & ML' },
      { name: 'Predictive Analytics', level: 80, category: 'Data Science & ML' },
      { name: 'Data Visualization', level: 88, category: 'Data Science & ML' },
    ],
  },
  {
    title: 'Generative AI',
    icon: 'sparkles',
    skills: [
      { name: 'Prompt Engineering', level: 88, category: 'Generative AI' },
      { name: 'OpenAI API', level: 85, category: 'Generative AI' },
      { name: 'LangChain', level: 82, category: 'Generative AI' },
      { name: 'RAG', level: 80, category: 'Generative AI' },
      { name: 'Vector Databases', level: 78, category: 'Generative AI' },
      { name: 'AI Agents', level: 75, category: 'Generative AI' },
      { name: 'LLM Applications', level: 83, category: 'Generative AI' },
    ],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────
export type ProjectCategory = 'All' | 'Data Analytics' | 'Data Science' | 'Generative AI';

export interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
  featured?: boolean;
}

export const projectCategories: ProjectCategory[] = [
  'All',
  'Data Analytics',
  'Data Science',
  'Generative AI',
];

export const projects: Project[] = [
  {
    title: 'Sales Dashboard — Power BI',
    description:
      'Interactive Power BI dashboard analyzing sales performance, regional trends, and KPI metrics with drill-through capabilities and dynamic filters.',
    category: 'Data Analytics',
    tech: ['Power BI', 'DAX', 'Data Modeling'],
    github: 'https://github.com/udhayakumar',
    demo: '#',
    image: '/projects/sales-dashboard.jpg',
    featured: true,
  },
  {
    title: 'Excel Business Dashboard',
    description:
      'Comprehensive Excel dashboard with pivot tables, conditional formatting, and automated reporting for business performance tracking.',
    category: 'Data Analytics',
    tech: ['Excel', 'Pivot Tables', 'VBA'],
    github: 'https://github.com/udhayakumar',
    image: '/projects/excel-dashboard.jpg',
  },
  {
    title: 'SQL Data Analytics Project',
    description:
      'End-to-end SQL analytics project with complex queries, window functions, CTEs, and stored procedures for business intelligence reporting.',
    category: 'Data Analytics',
    tech: ['SQL', 'PostgreSQL', 'Data Modeling'],
    github: 'https://github.com/udhayakumar',
    image: '/projects/sql-analytics.jpg',
  },
  {
    title: 'Customer Churn Prediction',
    description:
      'ML model predicting customer churn using classification algorithms with feature engineering, model evaluation, and deployment pipeline.',
    category: 'Data Science',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost'],
    github: 'https://github.com/udhayakumar',
    demo: '#',
    image: '/projects/churn-prediction.jpg',
    featured: true,
  },
  {
    title: 'AI Resume Analyzer',
    description:
      'Intelligent resume parsing and scoring system using NLP and GenAI to match resumes with job descriptions and provide improvement suggestions.',
    category: 'Generative AI',
    tech: ['Python', 'OpenAI API', 'Streamlit', 'NLP'],
    github: 'https://github.com/udhayakumar',
    demo: '#',
    image: '/projects/resume-analyzer.jpg',
    featured: true,
  },
  {
    title: 'ChatGPT-Powered Assistant',
    description:
      'Custom AI assistant built with OpenAI API featuring context-aware conversations, memory management, and domain-specific knowledge.',
    category: 'Generative AI',
    tech: ['Python', 'OpenAI API', 'LangChain', 'Streamlit'],
    github: 'https://github.com/udhayakumar',
    demo: '#',
    image: '/projects/chatgpt-assistant.jpg',
  },
  {
    title: 'RAG-Based PDF Q&A System',
    description:
      'Retrieval-Augmented Generation system for intelligent PDF question answering using vector databases, embeddings, and LLM-powered responses.',
    category: 'Generative AI',
    tech: ['LangChain', 'ChromaDB', 'OpenAI', 'Python'],
    github: 'https://github.com/udhayakumar',
    demo: '#',
    image: '/projects/rag-pdf-qa.jpg',
    featured: true,
  },
  {
    title: 'End-to-End Data Science Project',
    description:
      'Complete data science workflow from data collection and EDA to model building, evaluation, and deployment with CI/CD pipeline.',
    category: 'Data Science',
    tech: ['Python', 'ML', 'Flask', 'Docker'],
    github: 'https://github.com/udhayakumar',
    demo: '#',
    image: '/projects/e2e-datascience.jpg',
  },
];

// ─── EXPERIENCE ──────────────────────────────────────────────────────────
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Data Analytics & AI Enthusiast',
    company: 'Self-Learning & Projects',
    period: '2022 — Present',
    description: [
      'Built 20+ end-to-end projects spanning data analytics, data science, and generative AI.',
      'Developed proficiency in Python, SQL, Power BI, and machine learning through hands-on practice.',
      'Created production-ready GenAI applications using LangChain, RAG, and OpenAI APIs.',
      'Earned multiple certifications in data science, AI, and cloud technologies.',
    ],
    tech: ['Python', 'SQL', 'Power BI', 'Machine Learning', 'LangChain', 'OpenAI'],
  },
  {
    role: 'Freelance Data Analyst',
    company: 'Independent Projects',
    period: '2023 — Present',
    description: [
      'Delivered data-driven dashboards and analytics solutions for small businesses.',
      'Performed data cleaning, transformation, and visualization for actionable insights.',
      'Automated reporting workflows reducing manual effort by 60%.',
    ],
    tech: ['Excel', 'Power BI', 'Python', 'SQL'],
  },
];

// ─── CERTIFICATIONS ──────────────────────────────────────────────────────
export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
}

export const certifications: Certification[] = [
  { title: 'Google Data Analytics Professional Certificate', issuer: 'Google / Coursera', date: '2023' },
  { title: 'IBM Data Science Professional Certificate', issuer: 'IBM / Coursera', date: '2023' },
  { title: 'Python for Data Science', issuer: 'NPTEL / Swayam', date: '2023' },
  { title: 'Machine Learning Specialization', issuer: 'DeepLearning.AI / Coursera', date: '2024' },
  { title: 'Generative AI with LLMs', issuer: 'DeepLearning.AI / Coursera', date: '2024' },
  { title: 'SQL for Data Analysis', issuer: 'Udemy', date: '2023' },
  { title: 'Power BI Data Analyst', issuer: 'Microsoft', date: '2024' },
  { title: 'LangChain for LLM Application Development', issuer: 'DeepLearning.AI', date: '2024' },
];

// ─── TESTIMONIALS ────────────────────────────────────────────────────────
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Dr. Ramesh Kumar',
    role: 'Professor, Computer Science',
    content:
      'Udhayakumar demonstrates exceptional analytical skills and a deep understanding of machine learning concepts. His projects showcase both technical excellence and creative problem-solving.',
    avatar: '/avatars/avatar1.jpg',
  },
  {
    name: 'Priya Sharma',
    role: 'Data Science Lead',
    content:
      'Working with Udhayakumar on data analytics projects was a great experience. His attention to detail and ability to extract meaningful insights from complex datasets is impressive.',
    avatar: '/avatars/avatar2.jpg',
  },
  {
    name: 'Arjun Mehta',
    role: 'AI Startup Founder',
    content:
      'Udhayakumar\'s work on our GenAI-powered application was outstanding. He delivered a robust RAG system that exceeded our expectations in both accuracy and performance.',
    avatar: '/avatars/avatar3.jpg',
  },
];

// ─── GITHUB STATS ────────────────────────────────────────────────────────
export const githubStats = {
  username: 'udhayakumar',
  repos: '30+',
  contributions: '500+',
  stars: '50+',
  followers: '20+',
  stats: [
    { label: 'Repositories', value: '30+' },
    { label: 'Contributions', value: '500+' },
    { label: 'Stars', value: '50+' },
    { label: 'Followers', value: '20+' },
  ],
};

// ─── CONTACT ─────────────────────────────────────────────────────────────
export const contact = {
  email: 'udhayavadivel0801@gmail.com',
  phone: '+91 9715405067',
  location: 'Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/udhayakumar',
  github: 'https://github.com/udhayakumar',
  socials: [
    { name: 'GitHub', url: 'https://github.com/udhayakumar', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/udhayakumar', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:udhayavadivel0801@gmail.com', icon: 'email' },
  ],
};

// ─── CHAT RESPONSES ──────────────────────────────────────────────────────
export const chatResponses: Record<string, string> = {
  greeting: "Hello! I'm Udhayakumar's AI assistant. I can tell you about his skills, projects, experience, or help you get in touch. What would you like to know?",
  skills: "Udhayakumar is proficient in Python, SQL, Excel, Power BI, Machine Learning, and Generative AI technologies including LangChain, RAG, and OpenAI APIs.",
  projects: "He has built 20+ projects including Sales Dashboards in Power BI, Customer Churn Prediction models, AI Resume Analyzers, and RAG-based Q&A systems. Check out the Projects section for details!",
  experience: "Udhayakumar has been actively working on data analytics and AI projects since 2022, with experience in building production-ready ML models and GenAI applications.",
  contact: "You can reach Udhayakumar directly via email at udhayavadivel0801@gmail.com, or phone at +91 9715405067. You can also connect on LinkedIn and GitHub or use the contact form below!",
  default: "I'm not sure about that, but I'd recommend reaching out directly through the Contact section. Udhayakumar would love to hear from you!",
};
