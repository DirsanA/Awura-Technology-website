import {
  BotMessageSquare,
  Briefcase,
  GraduationCap,
  Shield,
  TimerIcon,
} from "lucide-react";
import { GlobeLock } from "lucide-react";
import { Code } from "lucide-react";
import { Laptop } from "lucide-react";
import { HousePlug } from "lucide-react";
import { Layers } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import { Link } from "react-router-dom";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/" },
  { label: "Products", href: "/" },
  { label: "Testimonials", href: "/" },
  { label: "Vacancy", href: "/vacancy" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Software Enginner",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Data Synteist",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Electrical Enginner",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Code />,
    text: " Software Product Development",
    description:
      "We craft cutting-edge software solutions that drive innovation and efficiency. Elevate your business with our powerful, user-centric technology.",
  },
  {
    icon: <BotMessageSquare />,
    text: "Intelligent Infrastructure Solution",
    description:
      "Intelligent Infrastructure Solution enhances infrastructure efficiency with AI, IoT, and data analytics for smart automation and management.",
  },
  {
    icon: <Laptop />,
    text: "Technology Consultancy",
    description:
      "Technology Consultancy provides expert guidance on digital solutions, IT strategy, and innovation to optimize business performance and growth.",
  },
  {
    icon: <Layers />,
    text: "ERP Systems",
    description:
      "ERP Systems streamline business operations by integrating finance, HR, supply chain, and other processes into a unified platform for efficiency and growth.",
  },
  {
    icon: <HousePlug />,
    text: "In-House Product",
    description:
      "In-House Product is a proprietary software solution developed and maintained internally to meet specific business needs and enhance operations.",
  },
  {
    icon: <GlobeLock />,
    text: "Support and Troubleshooting",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Focus on Innovation and Quality",
    description:
      "We prioritize understanding our customers' needs and creating solutions that drive their success.",
  },
  {
    title: "Quality and Excellence",
    description:
      "Our commitment to high-quality software ensures that our solutions are reliable, scalable, and future-proof.",
  },
  {
    title: "Security and Privacy",
    description:
      "We prioritize security and ensure that all software we develop meets the highest standards of privacy and protection",
  },
  {
    title: "Agility and Flexibility",
    description:
      " We follow agile methodologies to adapt quickly to changing requirements and deliver results efficiently ",
  },
];

import product1 from "../assets/product_1.png";
import product2 from "../assets/product_2.png";
import product3 from "../assets/product_3.png";
import product4 from "../assets/product_4.png";

export const products = [
  {
    img: product1,
    title: "Discover OwlEvents",
    desc: "OwlEvents is a digital platform designed to streamline the process of planning, managing, and coordinating events of various types and sizes.",
    href: "https://owlevents.app/",
  },
  {
    img: product2,
    title: "Discover LabExAfrica",
    desc: "LabExAfrica is a project we did to streamline the process of planning, managing and coordinating events of various types and sizes.",
    href: "https://portal.labexafrica.com/",
  },
  {
    img: product3,
    title: "Discover MFS",
    desc: "MFS is a digital platform designed to streamline the process of agricultural management and coordination.",
    href: "https://maed.farm/auth/login",
  },
  {
    img: product4,
    title: "Discover Meklit",
    desc: "Meklit is a digital platform designed to streamline various health conditions regarding women and children.",
    href: "https://meklit.life/",
  },
];

export const whyJoin = [
  {
    icon: <Briefcase />,
    text: "Team work",
    description:
      "At our company, teamwork is at the heart of everything we do. We believe in the power of collaboration and communication, working together to achieve our goals and drive innovation.",
  },
  {
    icon: <Shield />,
    text: "Secured Future",

    description:
      "We are committed to ensuring a secure and stable future for all our employees. Our comprehensive benefits package includes competitive salaries, health and wellness programs, and retirement plans.",
  },
  {
    icon: <GraduationCap />,
    text: "Learning Opportunity",

    description:
      "We foster a culture of continuous learning and professional development. We provide ample opportunities for skill enhancement, training programs, and career growth to help you reach your full potential.",
  },
  {
    icon: <TimerIcon />,
    text: "Timely update",
    description:
      "Staying informed and up-to-date is key to our success. We prioritize regular updates and communication to keep everyone aligned, ensuring that you have the latest information and resources at your fingertips",
  },
];

export const jobPosting = [
  {
    title: "Senior ERPNext Expert",
    Experiance: "4+",
    Requirments: [
      "ERPNext Management:",
      "Customization and Development:",
      "User Support and Training:",
      "System Integration:",
    ],
  },
  {
    title: "Django Backend Developer (API)",
    Experiance: "3+",
    Requirments: [
      "Design RESTful APIs",
      "Optimize database schema",
      "Collaborate with developers",
      "Maintain code quality",
    ],
  },
  {
    title: "Frontend Developer",
    Experiance: "2+",
    Requirments: [
      "Good in Ui/Ux",
      "Responsive website designer",
      "Responsive Mobile App",
      "Collaborate with developers",
    ],
  },
];
