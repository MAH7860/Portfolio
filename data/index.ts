import { link } from "fs";
import { FcLeftDown } from "react-icons/fc";
import { text } from "stream/consumers";
import { BrowserRouter, BrowserRouterProps, createBrowserRouter } from "react-router-dom"
import App from "next/app";
import ReactDOM from "react-dom";



export const navItems = [
  { name: "Home", link: "#home" },
  { name: "Recent Projects", link: "#recentprojects" },
  { name: "Work Experience", link: "#workexperience" },
  { name: "about", link: "#contact" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I stay up to date with the world of Technology and all new Revolutions ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I aim to Learn Skills taught around the World",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Computing Skills",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for Technology.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning a new Programming language",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Download A Copy Of My CV !",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MMU Guide Website",
    des: "I developed the game Lunch Box Frenzy as part of my academic project using the Java programming language. This project allowed me to improve my understanding of key programming concepts such as Object-Oriented Programming (OOP) and procedural programming. During the development process, I implemented a range of techniques to structure the game effectively, applying various design principles from my programming unit. The project helped me hone my skills in creating dynamic, interactive gameplay while also balancing game mechanics and user interface design. In Lunch Box Frenzy, players must drag a burger to a moving lunchbox on a conveyor belt, all while avoiding red enemies that present obstacles along the way. Each successful delivery increases the player's score by 1 point. The objective is to reach a score of 3 before the health bar is depleted, which decreases when enemies are encountered or when the burger fails to reach the lunchbox. The game encourages strategic thinking and quick reflexes, as the challenge intensifies over time. Overall, this project provided valuable hands-on experience in game development, reinforcing my programming knowledge and practical skills.",
    img: "/mmuGuide.png",
    iconLists: [],
    link: "http://localhost:3000/dashboard",
  },
  {
    id: 2,
    title: "Security Fundementals Blog",
    des: "I developed the game Lunch Box Frenzy as part of my academic project using the Java programming language. This project allowed me to improve my understanding of key programming concepts such as Object-Oriented Programming (OOP) and procedural programming. During the development process, I implemented a range of techniques to structure the game effectively, applying various design principles from my programming unit. The project helped me hone my skills in creating dynamic, interactive gameplay while also balancing game mechanics and user interface design. In Lunch Box Frenzy, players must drag a burger to a moving lunchbox on a conveyor belt, all while avoiding red enemies that present obstacles along the way. Each successful delivery increases the player's score by 1 point. The objective is to reach a score of 3 before the health bar is depleted, which decreases when enemies are encountered or when the burger fails to reach the lunchbox. The game encourages strategic thinking and quick reflexes, as the challenge intensifies over time. Overall, this project provided valuable hands-on experience in game development, reinforcing my programming knowledge and practical skills.",
    img: "/blog.jpg",
    iconLists: [],
    link: "http://localhost:3000/dashboard",
  },
  {
    id: 3,
    title: "Programing With Processing",
    des: "I developed the game Lunch Box Frenzy as part of my academic project using the Java programming language. This project allowed me to improve my understanding of key programming concepts such as Object-Oriented Programming (OOP) and procedural programming. During the development process, I implemented a range of techniques to structure the game effectively, applying various design principles from my programming unit. The project helped me hone my skills in creating dynamic, interactive gameplay while also balancing game mechanics and user interface design. In Lunch Box Frenzy, players must drag a burger to a moving lunchbox on a conveyor belt, all while avoiding red enemies that present obstacles along the way. Each successful delivery increases the player's score by 1 point. The objective is to reach a score of 3 before the health bar is depleted, which decreases when enemies are encountered or when the burger fails to reach the lunchbox. The game encourages strategic thinking and quick reflexes, as the challenge intensifies over time. Overall, this project provided valuable hands-on experience in game development, reinforcing my programming knowledge and practical skills.",
    img: "/game.png ",
    iconLists: [],
    link: "http://localhost:3000/dashboard",
  },
  {
    id: 4,
    title: "Forensics Report with Autopsy",
    des: "I developed the game Lunch Box Frenzy as part of my academic project using the Java programming language. This project allowed me to improve my understanding of key programming concepts such as Object-Oriented Programming (OOP) and procedural programming. During the development process, I implemented a range of techniques to structure the game effectively, applying various design principles from my programming unit. The project helped me hone my skills in creating dynamic, interactive gameplay while also balancing game mechanics and user interface design. In Lunch Box Frenzy, players must drag a burger to a moving lunchbox on a conveyor belt, all while avoiding red enemies that present obstacles along the way. Each successful delivery increases the player's score by 1 point. The objective is to reach a score of 3 before the health bar is depleted, which decreases when enemies are encountered or when the burger fails to reach the lunchbox. The game encourages strategic thinking and quick reflexes, as the challenge intensifies over time. Overall, this project provided valuable hands-on experience in game development, reinforcing my programming knowledge and practical skills.", 
    img: "/autopsy.jpg",
    iconLists: [],
    link: "http://localhost:3000/dashboard",
  },
];



export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Various Coding Prodjects",
    desc: "Created Various projects using coding platforms such as Java and Python, Including a calculator app and a 2D game.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Cyber Security Experience ",
    desc: "I am Currently Learning About the Various elements that exsist within CyberSecurity such as Forensics and Hacking.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Team Leader ",
    desc: "Led the dev of a website for a university project, from an initial concept to development resulting in a fully functioning webpage.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Developer",
    desc: "Developed User Friendly Websites using various different coding languages to stand out including html and react.js",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [

 
  {
    id: 2,
    img: "/twit.svg",
    url: "https://twitter.com", 
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/ArsalanHussain786/" 
    
    , 
  },
  {
    id: 4,
    img: "/insta.svg",
    url: "https://instagram.com", 
  },

];