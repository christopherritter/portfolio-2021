import React from "react";
import {
  AcademicCapIcon as SchoolIcon,
  StarIcon,
  BriefcaseIcon as WorkIcon,
  CalendarIcon,
} from "@heroicons/react/solid";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { employers } from "../data";
import "../index.css";

export default function Timeline(props) {
  // const { setShowModal } = props;

  return (
    <section id="experience" className="scroll-margin-top">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center">
          <CalendarIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
            Experience
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            This is a recent timeline of my professional experience. Each entry
            includes a task list which describes the tools and technology that I
            used to complete them.
          </p>
        </div>
        <div className="flex flex-wrap m-4">
          <VerticalTimeline className="vertical-timeline vertical-timeline-custom-line">
            {employers &&
              employers.map((employer, index) => (
                <VerticalTimelineElement
                  className="vertical-timeline-element-custom-content vertical-timeline-custom-bg vertical-timeline-element--work"
                  date={
                    employer.startDate === employer.endDate
                      ? employer.startDate
                      : `${employer.startDate} - ${employer.endDate}`
                  }
                  iconStyle={{
                    background: "rgb(52, 211, 153)",
                    color: "#1F2937",
                  }}
                  icon={<WorkIcon />}
                  key={index}
                >
                  <h3 className="text-lg font-medium text-white">
                    {employer.name}
                  </h3>
                  <h4 className="text-base font-normal text-gray-400">
                    {employer.location}
                  </h4>
                  <p className="text-base font-normal text-gray-100">
                    {employer.title}
                  </p>
                  <ul className="vertical-timeline-element-custom-content">
                    {employer.projects &&
                      employer.projects.map((project, projectIndex) => {
                        if (project.tasks) {
                          return (
                            <li
                              className="vertical-timeline-element-list-item text-gray-100"
                              key={projectIndex}
                            >
                              {project.summary}
                            </li>
                          );
                        } else {
                          return (
                            <li className="vertical-timeline-element-list-item text-gray-100">
                              No projects found.
                            </li>
                          );
                        }
                      })}
                  </ul>
                </VerticalTimelineElement>
              ))}

            <VerticalTimelineElement
              iconStyle={{ background: "#fff", color: "#1F2937" }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
