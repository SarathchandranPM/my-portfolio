"use client";

import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "../context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-28 sm:mb-40 scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at&nbsp;
        <a href="mailto:pmsarathchandran@gmail.com" className="underline">
          pmsarathchandran@gmail.com
        </a>
        &nbsp;or through the below form.
      </p>

      <form action="" className="mt-10 flex flex-col">
        <input
          type="email"
          placeholder="Your email"
          className="h-14 rounded-lg border border-black/10 px-4"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          placeholder="Your message"
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 active:scale-105 hover:scale-110 focus:scale-110 hover:bg-gray-950"
        >
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1:" />
        </button>
      </form>
    </motion.section>
  );
};
export default Contact;
