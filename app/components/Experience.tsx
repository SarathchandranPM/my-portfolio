"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import React from "react";
import { useActiveSectionContext } from "../context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Experience");
    }
  }, [inView, setActiveSection]);

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                padding: "1.3rem 2rem",
                marginBottom: "1.5rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal mt-0">{item.location}</p>
              <p
                className="
              !mt-3 text-gray-700"
              >
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};
export default Experience;
