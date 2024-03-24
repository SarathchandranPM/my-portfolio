"use client";

import Image from "next/image";
import me from "@/assets/me.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "../context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Intro = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection]);
  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="mt-2 sm:mt-[initial]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={me}
              alt="Sarathchandran P M"
              priority={true}
              className="h-24 w-24 object-cover rounded-full shadow-xl border-[0.35rem] border-white"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="text-4xl sm:text-6xl mt-3 mb-2 text-center font-bold text-nowrap"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Sarathchandran P M
      </motion.h1>
      <motion.h3
        className="text-center text-2xl sm:text-3xl font-medium text-gray-700"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Frontend Developer
      </motion.h3>

      <motion.p
        className="text-center mt-4 sm:mt-6 mb-10 px-4 text-xl sm:text-2xl leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to my portfolio! As a passionate frontend developer specializing
        in <span className="font-bold">React and Next.js</span>, I'm excited to
        showcase my journey and projects as I embark on this thrilling
        transition into the dynamic world of web development.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-95 transition w-[15rem]"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 group-hover:scale-110" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center justify-center gap-2 rounded-full cursor-pointer w-[15rem] outline-none focus:scale-110 hover:scale-110 active:scale-95 transition border border-black/10"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 scale-110" />
        </a>

        <a
          href="https://www.linkedin.com/in/sarathchandran-pm"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/SarathchandranPM"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};
export default Intro;

// The contact me link has a class "group" applied to it. This will make the text "Contact me here" and the react icon <BsArrowRight/> a group. So, you can apply specific styles to the icon or text when you hover over the entire group.

// Add the updated CV in the href of Download CV anchor tag
