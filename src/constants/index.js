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
    color: "#E0E1DD",
    nameColor: "#2b2b2b",
    designationColor: "#666666",
    testimonialColor: "#0D1B2A",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "job search",
        color: "purple-text-gradient",
      },
      {
        name: "employment",
        color: "red-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "travel",
        color: "teal-text-gradient",
      },
      {
        name: "booking",
        color: "cyan-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
