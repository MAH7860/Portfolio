"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/components/ui/UseOutsideClicks";
import clsx from "clsx"; // Assuming you are using clsx for conditional class names

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] overflow-auto">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[700px] max-h-[90%] h-full md:h-fit flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-y-auto"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={600}
                  height={600}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-[450px] object-cover object-center sm:rounded-tr-lg sm:rounded-tl-lg transition-all duration-300"
                />
              </motion.div>

              <div className="flex flex-col flex-grow p-4 overflow-auto">
                <div className="flex justify-between items-start">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative overflow-auto">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-auto pb-10 flex flex-col items-start gap-4 dark:text-neutral-400"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Main card list with responsive layout */}
      <ul className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        {cards.map((card, index) => (
          <motion.li
            key={card.title}
            layoutId={`card-${card.title}-${id}`}
            className="relative z-50 cursor-pointer"
            onClick={() => setActive(card)}
            whileHover={{
              scale: 1.05, // Scale up the card slightly
              rotateY: index % 2 === 0 ? 10 : -10, // Tilt based on index
              transition: { duration: 0.3 },
            }}
          >
            <div style={{ perspective: "1000px" }} className="relative">
              <motion.div
                className="flex flex-col justify-start items-start rounded-2xl shadow-lg border border-white/[0.1]  relative bg-black-100 overflow-hidden h-[400px] w-full" // Set fixed size for all cards
                whileHover={{
                  rotateY: index % 2 === 0 ? 10 : -10, // Tilt towards the center
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div layoutId={`image-${card.title}-${id}`} className="h-[250px] w-full"> {/* Fixed size for images */}
                  <Image
                    width={600}
                    height={400}
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover object-center transition-all duration-300"
                  />
                </motion.div>
                <div className="flex justify-center items-center flex-col p-4 h-[150px] w-full">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center text-base"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center text-base"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};



const cards = [
  {
    description: "Discover the surrounding Area Of manchester and all the activities the univeristy has to offer whilst you partake in your Studies",
    title: "Manchester University Website",
    src: "/mmuGuide1.jpg",

    content: () => {
      return (
        <p>
          I contributed to designing MMUGuide, a website produced as part of a group project for first-year university students that uses HTML, CSS, and JavaScript. This project allowed me to develop a better grasp of fundamental web development ideas including front-end design, responsive layout, and user-centred design principles. Throughout the development process, I used a variety of web design strategies and worked with team members to efficiently structure the site, including concepts from my coursework to produce a unified and engaging user experience. <br /> <br /> The MMUGuide website provides first-year students with important information, campus services, and an interactive map to help them navigate their new surroundings. Users can access a range of features, such as activities in Manchester, available transport, student discount programs and a FAQ area. Working on MMUGuide provided valuable hands-on experience in web development and team cooperation, which helped me improve my coding, design, and project coordinating skills. This project helped me reinforce my practical knowledge and ability to apply technical abilities in the real-worl,
        </p>
      );
    },
  },
  {
    description: "Firewall Security Blog and a setup guide on Metasploitable",
    title: "Security Fundementals Blog",
    src: "/blog.jpg",

    content: () => {
      return (
        <p>
          I wrote two blog posts on core cybersecurity topics: one about firewall security and another that guides readers through setting up Metasploitable with VMware and Kali Linux. This project was a great opportunity to deepen my understanding of security basics while learning how to communicate technical information in a clear, approachable way.
          <br /> <br />
          In the first blog, I focused on firewall security, explaining how firewalls work, the different types (like packet-filtering, proxy, and stateful firewalls), and the best practices for configuring them to protect network traffic. I wanted to show how firewalls serve as a crucial first line of defense in network security, helping readers understand why they’re important and how to set them up effectively.
          <br /> <br />
          The second blog was a step-by-step guide to setting up Metasploitable in VMware using Kali Linux. I walked through each step—from configuring the virtual machines to running basic penetration tests on the Metasploitable environment. The goal was to give readers a hands-on, safe way to practice penetration testing and see firsthand how security vulnerabilities can be exploited.
          <br /> <br />
          Writing these posts was a great experience that not only strengthened my grasp of cybersecurity fundamentals but also helped me learn how to explain complex topics in a way that’s easy to follow. It was rewarding to create content that’s both technically accurate and accessible for anyone starting out in cybersecurity.







        </p>
      );
    },
  },

  {
    description: "An interactive yet difficult game made using java that captivates the Audience and brings entertainment.",
    title: "Programming With Processing",
    src: "/game.png",
    content: () => {
      return (
        <p>
          I developed the game Lunch Box Frenzy as part of my academic project using the Java programming language. This project allowed me to improve my understanding of key programming concepts such as Object-Oriented Programming (OOP) and procedural programming. During the development process, I implemented a range of techniques to structure the game effectively, applying various design principles from my programming unit. The project helped me hone my skills in creating dynamic, interactive gameplay while also balancing game mechanics and user interface design. <br /> <br /> In Lunch Box Frenzy, players must drag a burger to a moving lunchbox on a conveyor belt, all while avoiding red enemies that present obstacles along the way. Each successful delivery increases the player's score by 1 point. The objective is to reach a score of 3 before the health bar is depleted, which decreases when enemies are encountered or when the burger fails to reach the lunchbox. The game encourages strategic thinking and quick reflexes, as the challenge intensifies over time. Overall, this project provided valuable hands-on experience in game development, reinforcing my programming knowledge and practical skills.",
        </p>
      );
    },
  },
  {
    description: "A report of a digital crime scene that was investigated using the software Autopsy",
    title: "Forensics Report with Autopsy",
    src: "/autopsy.jpg",

    content: () => {
      return (
        <p>
          I used the forensic software tool Autopsy to investigate a laptop for potential evidence related to a crime scene. This experience allowed me to deepen my understanding of digital forensics, especially around evidence recovery, data analysis, and the importance of maintaining integrity in an investigation. Working with Autopsy provided hands-on experience with techniques essential for digital investigations, as I learned to examine and interpret data accurately while following best practices in forensic analysis.
          <br /> <br />
          Using Autopsy, I conducted a structured examination of the laptop’s contents to identify any relevant files, internet history, deleted data, or other digital artifacts that could provide insight into the crime. The software enabled me to track down hidden files, piece together timelines, and extract metadata, all of which helped me uncover valuable details for our case. This investigation required a careful approach, balancing a thorough analysis with the need to preserve data integrity and ensure that all findings could be reliably documented.
          <br /> <br />
          This project gave me invaluable experience in digital forensics and data analysis. Working with Autopsy reinforced my skills in critical thinking, attention to detail, and maintaining strict protocols for handling digital evidence. Overall, the project was an excellent opportunity to apply theoretical concepts to a real-world scenario, strengthening my practical knowledge of forensic software and investigation techniques.


        </p>
      );
    },
  },
];
