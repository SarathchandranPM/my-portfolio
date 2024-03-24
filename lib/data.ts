import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import portfolio from "@/assets/portfolio.jpeg";
import ecom from "@/assets/ecom.jpeg";
import travelapp from "@/assets/travelapp.jpeg";
import reduxcart from "@/assets/reduxcart.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Web Development Course",
    location: "Online",
    description:
      "Completed one year long advanced certificate course in full-stack web development from Great Learning",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Software Distribution Specialist",
    location: "Hyderabad, India",
    description:
      "As a Software Distribution Specialist, utilized tools for remote software deployment and management on ATMs, demonstrating technical proficiency. Collaborated with cross-functional teams, demonstrating effective communication and coordination skills. Maintained detailed records and provided comprehensive reports, showcasing documentation and reporting abilities",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Full-Stack E-Commerce App",
    description:
      "Built a full-stack e-commerce application using modern technologies with user authentication and a fully functional shopping cart",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Prisma",
      "DaisyUI",
      "Zod",
    ],
    imageUrl: ecom,
  },
  {
    title: "Personal Portfolio",
    description:
      "Designed and developed a personal portfolio website. Implemented a user-friendly contact form with email and text message options using Next.js server actions.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer-Motion"],
    imageUrl: portfolio,
  },
  {
    title: "Travel App Landing Page",
    description:
      "Designed and developed a fully responsive landing page for a travel website using modern web development technologies. ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: travelapp,
  },
  {
    title: "ShopIt - E-commerce Cart",
    description:
      "ShopIt is a single-page e-commerce shopping cart application built to demonstrate the practical implementation of Redux Toolkit for state management.",
    tags: ["React", "Redux Toolkit", "Tailwind CSS"],
    imageUrl: reduxcart,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Tailwind",
  "MongoDB",
  "Prisma",
  "Framer Motion",
  "Git",
] as const;

// The "as const" after the array, will make the properties of the objects in the array, immutable.

/*
icon: React.createElement(CgWorkAlt),

Notice why we had to write the above instead of 

icon: <CgWorkAlt>

This is because, we're in a ts file not a tsx file. If this was a tsx file, we could have chosen the later. 
*/
