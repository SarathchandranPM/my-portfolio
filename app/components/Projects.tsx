"use client";

import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import React from "react";
import Project from "./Project";
import { useActiveSectionContext } from "../context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);
  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
export default Projects;
