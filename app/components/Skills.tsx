"use client";

import { skillsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "../context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Skills");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default Skills;
