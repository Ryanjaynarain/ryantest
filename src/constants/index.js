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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front end  Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IT Support",
    icon: creator,
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
  
];

const experiences = [
  {
    title: "IT Assistant Tutor",
    company_name: "DUT",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2019 - April 2020",
    points: [
      "Teach students how to Develop and maintain web applications using React.js and other related technologies.",
      "Part of IOT team and assisted in design of the student portal ",
      " Teach students about implementing responsive design and ensuring cross-browser compatibility.",
      
    ],
  },
  {
    title: "Web Developer",
    company_name: "Silver Oaks Dental Clinic",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2020 - Dec 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Manage the exact database and perform backups",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Providing feedback and implementing new features for the client.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Nyrai Trucking",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2020 - Jan 2021",
    points: [
      "Develop and maintain web applications",
      "Implement new features and ensure cross browser compatibility ",
      "Create inventory management system, to track stock and equipment  "
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Vw",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but ryan delivered.",
    name: "Matt Despy",
    designation:"Network engineer",
    company:"VW",
    image: "",
  },
  {
    testimonial:
      "The websites design is user friendly and aesthetic.",
    name: "Thaeisha Govender",
    designation: "Head of marketing",
    company: "Silver Oaks Dental Clinic",
    image: "",
  },
  {
    testimonial:
      "After our website was  optimized, our traffic increased by 50%.",
    name: "Pearl Naicker",
    designation: "Owner",
    company: "Nyrai Trucking",
    image: "",
  },
];

const projects = [
  {
    name: "Car Parts Configurator",
    description:
      "Web-based platform that allows users to search  and identify the correct car parts for their vehicle",
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
