



// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's

import skillteck from './assets/company_logo/images.png';


// Education Section Logo's
import bbdlogo from './assets/education_logo/bbdlogo.png';
import logo from './assets/education_logo/10logo.jpg';
import iti from './assets/education_logo/iti.png';

// Project Section Logo's

import imagetrip from './assets/work_logo/imagetrip.png';
import imageFood from './assets/work_logo/imageFood.png';
import imagefy from './assets/work_logo/imagefy.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [

  {
    id: 1,
    img: skillteck,
    role: "Fullstack developer",
    company: "Skilltack Training Institute",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT",
      "REDUX",
      "NODE.JS",
      "NOSQL"
    ],
  },
 
];

export const education = [
 
  {
    id: 1,
     img: bbdlogo,
    school: "BBD college , Lucknow",
    date: "Sept 2022 - Aug 2025",
    grade: "72%",
    desc: "I completed my Bachelor of computer application (BCA) from BBD College, Lucknow. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of computer application - BCA (Computer Science)",
   },
   {
    id: 2,
    img: iti,
    school: "Government Industrial Training Institute",
    date: "Sept 2018 - Aug 2021",
    grade: "75%",
    desc: "I completed my Industrial Training Institute (ITI) training in the Fitter trade from Ghaziabad. During my training, I gained practical experience in mechanical operations, fitting tools, machine handling, and reading technical drawings. This hands-on experience helped me build a strong foundation in industrial skills and prepared me to handle real-world mechanical challenges effectively.",
    degree: "Industrial Training Institute",
  },
  {
    id: 2,
     img: logo ,
    school: "Inter collage , Kushinagar",
    date: "may 2016 - may 2018",
    grade: "60%",
    desc: "I completed my class 12 education from Inter collage, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
    degree: "UP BOARD(XII) - PCM ",
  },
  {
    id: 3,
     img: logo,
    // school: "Inter c",
    date: "Apr 2014 - March 2016",
    grade: "87.5%",
    desc: "I completed my class 10 education Inter collage, under the UP board, where I studied Science .",
    degree: "UP BOARD(X), Science ",
  },
];

export const projects = [
  
  {
    id: 1,
    title: "Trip World",
    description:
    "TripWorld is a full-stack travel platform designed for adventure lovers and explorers. Built using React and SASS, the website helps users discover beautiful destinations across the globe, plan their trips, and explore stunning locations. With curated travel guides, inspiring visuals, and easy navigation, TripWorld is perfect for anyone looking to explore the world in a smarter and more exciting way.",
    image: imagetrip,
    tags: ["React JS",  "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Rajan875514/tripwebsite1.git",
    webapp: "https://tripwebsite1-joup.vercel.app/",
  },
  {
    id: 2,
    title: "Food Hungry",
    description:
      "FoodHungry is a responsive real-time restaurant web application built using React. It allows users to browse multiple restaurants, explore diverse menus, place orders seamlessly, and complete payments through integrated online payment gateways. The platform offers a smooth and intuitive user experience, making it an ideal solution for food lovers looking to explore and order from their favorite local or global restaurants in one place.",
    image: imageFood,
    tags: ["React JS","Node.js","NoSql", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Rajan875514/food-app.git",
    webapp: "https://hungryfoo.netlify.app/",
  },
  {
    id: 3,
    title: "Imagify",
    description:
      "AI ImageCraft is a responsive AI-powered web application built using React.js and Node.js, designed to generate high-quality images based on user input. It leverages advanced AI models to create unique visuals, making it an ideal tool for designers, content creators, and developers. The platform offers a customizable and intuitive interface, enabling users to generate, preview, and download images efficiently.",
    image: imagefy,
    tags: ["React JS", "Html", "Css", "javascript"],
    github: "https://github.com/Rajan875514/Imagify.git",
    webapp: "https://comforting-starship-ebd2aa.netlify.app/",
  }
  
];