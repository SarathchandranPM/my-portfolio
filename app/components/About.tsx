"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "../context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        Graduating with a&nbsp;
        <span className="font-bold">
          first-class bachelor's degree in Physics in 2019
        </span>
        , I ventured into the corporate world,&nbsp;
        <span className="font-bold">
          joining NCR Atleos (formerly NCR Corporation) as a Customer Care
          Representative
        </span>
        . Over the span of three years, I honed my skills in client
        communication and problem-solving, contributing to the company's success
        and gaining invaluable experience in the process.
      </p>

      <p>
        In 2022, fueled by a passion for technology and a desire to delve deeper
        into the digital realm,&nbsp;
        <span className="font-bold">
          I pursued a Full Stack Web Development course offered by the esteemed
          EICT Academy of IIT Roorkee
        </span>
        . Through rigorous training, I acquired proficiency in the core
        technologies driving web development forward. Now, armed with a robust
        skill set and a fervent enthusiasm for frontend development,&nbsp;
        <span className="font-bold">
          I am poised to embark on the next chapter of my career as a frontend
          developer
        </span>
        , eager to contribute my expertise and creativity to innovative
        projects.
      </p>
    </motion.section>
  );
};
export default About;
