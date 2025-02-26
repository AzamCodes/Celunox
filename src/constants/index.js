import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  farhan,
  carrent,
  jobit,
  tripguide,
  threejs,
  bilal,
  dk,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#skills",
    title: "Skills",
  },
  {
    id: `/halal-business`,
    title: "Halal Business",
  },
  {
    id: "#works",
    title: "Works",
  },
  {
    id: "#contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "3D Animation",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Bilal Ahmed",
    company_name: "3D Web Chahiye?",
    icon: bilal,
    iconBg: "#E6DEDD",
    points: [
      "Frontend:- HTML, CSS, Bootstrap, Javascript, JQuerry.",
      "Backend:- Node.js, Express.js, php.",
      "Databases:-  MySql, PL/SQL.",
      "Frameworks:- React.js, Next.js, Three.js, framer-motion, tailwind.",
      "Other:- C, C++, Python.",
    ],
  },
  {
    title: "Dhanraj Kadam",
    company_name: " Aaajao",
    icon: dk,
    iconBg: "#916DB3",
    points: [
      "Frontend:- HTML, CSS, Bootstrap, Javascript, JQuerry.",
      "Backend:- Node.js, php",
      "Databases:-  MySql, PL/SQL.",
      "Frameworks:- React.js, Next.js, Three.js, framer-motion.",
      "Languages:- C, C++,  Python.",
    ],
  },

  {
    title: "Farhan Sultan",
    company_name: "Dikhadunga",
    icon: farhan,
    iconBg: "#E6DEDD",
    points: [
      "Frontend:- HTML, CSS, Bootstrap, Javascript, JQuerry, EJS.",
      "Backend:- Node.js, Express.js, php, postman",
      "Databases:-  MongoDB, MySql, NoSql.",
      "Frameworks:- React.js, Next.js, Three.js, Framer-motion, react-spring, tailwind.",
      "Languages:- C, C++, Python, Kotlin.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I attribute our success building and scaling our startup to this site. It's how we recruit new people, manage payments and track and meet deadlines.",
    name: "John Doe",
    image: "glinthub.jpg",
    color: "#bbd0ff",
    nameColor: "rgba(13, 27, 42, 1)",
    designationColor: "rgba(13, 27, 42, 0.65)",
    testimonialColor: "rgba(13, 27, 42, 0.85)",
    designation: "CEO & Founder",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Brogrammers proved me wrong.",
    name: "Mariyam",
    image: "glinthub.jpg",
    color: "#C77DFF",
    nameColor: "rgba(37, 36, 34, 1)",
    designationColor: "rgba(37, 36, 34, 0.65)",
    testimonialColor: "#10002B",
    designation: "Product Manager",
  },
  {
    testimonial:
      "I've never met web developers who truly care about their clients' success like Brogrammer does.",
    name: "Chris Brown",
    image: "glinthub.jpg",
    color: "rgba(58, 12, 163, 1)",
    nameColor: "rgba(241, 250, 238, 1)",
    designationColor: "rgba(241, 250, 238, 0.75)",
    testimonialColor: "rgba(241, 250, 238, 0.85)",
    designation: "CTO",
  },
  {
    testimonial:
      "After Celunox optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Anna",
    image: "glinthub.jpg",
    color: "#606C38",
    nameColor: "rgba(254, 250, 224, 0.85)",
    designationColor: "rgba(254, 250, 224, 0.65)",
    testimonialColor: "rgba(254, 250, 224, 1)",
    designation: "CTO",
  },
];

const projects = [
  {
    name: "WebfolioX - Interactive Portfolio Website",
    description:
      "WebfolioX is an interactive portfolio website crafted with Next.js 13 and Framer Motion. It features a modern design, smooth animations, and showcases professional projects, case studies, and testimonials. The platform emphasizes responsive design, clean layouts, and seamless navigation, making it ideal for creative professionals to display their work and connect with clients.",
    tags: [
      { name: "portfolio", color: "text-blue-500" },
      { name: "interactive", color: "text-gray-300" },
    ],
    image: "webfoliox.png",
    source_code_link: "https://github.com/azamcodes/webfoliox",
  },
  {
    name: "PrimeAttire - Modern SaaS E-Commerce Platform",
    tags: [
      { name: "e-commerce", color: "text-pink-500" },
      { name: "SaaS", color: "text-green-500" },
    ],
    description:
      "PrimeAttire is a scalable SaaS-based e-commerce platform featuring a dynamic customer-facing storefront and a feature-rich admin dashboard (AdminDesk). Designed for user-friendliness, business scalability, and seamless management, PrimeAttire empowers businesses to create multiple stores and manage products, categories, and promotional billboards. Customers enjoy a hassle-free shopping experience, while store owners benefit from intuitive management tools. Built with modern technologies, PrimeAttire delivers responsive design, real-time synchronization, and efficient state handling for a next-gen e-commerce experience.",
    image: "primeattire.png",
    source_code_link: "https://github.com/AzamCodes/ecommerce-store",
  },
  {
    name: "DevBlog - Next.js Blogging Platform",
    description:
      "DevBlog is a modern blogging platform built with Next.js, Tailwind CSS, and ShadCN UI. It allows users to create, manage, and share their blogs with ease. With a focus on performance and user experience, DevBlog offers an intuitive interface, responsive design, and various advanced features for both users and admins, including user authentication and SEO optimization.",
    tags: [
      { name: "blogging", color: "text-indigo-500" },
      { name: "SEO", color: "text-gray-300" },
    ],
    image: "devbloghub.png",
    source_code_link: "https://github.com/azamcodes/devbloghub",
  },
  {
    name: "Portfolio",
    description:
      "Portfolio website for Azam Shaikh made with Next Js, Acternity UI, Tailwind CSS, Framer Motion.",
    tags: [
      { name: "portfolio", color: "text-orange-500" },
      { name: "showcase", color: "text-cyan-500" },
    ],
    image: "portfolio.png",
    source_code_link: "https://github.com/AzamCodes/Portfolio",
  },
  {
    name: "HSP",
    description:
      "HINDUSTAN SECURE PACK is a remarkable name in the FIBC industry worldwide.",
    tags: [
      {
        name: "FIBC",
        color: "orange-text-gradient",
      },
      {
        name: "packaging",
        color: "yellow-text-gradient",
      },
    ],
    image: "hspacks.png",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
