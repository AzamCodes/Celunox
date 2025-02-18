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
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "animation",
    title: "Animations",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
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
      "I thought it was impossible to make a website as beautiful as our product, but Brogrammers proved me wrong.",
    name: "Mariyam",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met web developers who truly cares about their clients' success like Brogrammer does.",
    name: "Chris Brown",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Celunox optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Anna",
    image: "https://randomuser.me/api/portraits/women/95.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
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
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
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
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
