import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { employers } from "../data";
import "../index.css";

export default function Projects(props) {
  const { setProject, openModal } = props;

  function selectProject(project) {
    setProject(project);
    openModal();
  }

  return (
    <section
      id="projects"
      className="flex flex-col w-10/12 sm:w-5/6 md:4/5 lg:3/5 mx-auto scroll-margin-top"
    >
      <div className="flex flex-col w-full mb-20 text-center">
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Projects{" "}
        </h1>{" "}
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Here are some projects that I 've worked on. Click on any project to
          see additional screenshots and the required skills.{" "}
        </p>{" "}
      </div>{" "}
      <div className="flex flex-wrap -m-4">
        {employers[0].projects.map((project, index) => (
          <div
            key={index}
            className="project-card rounded bg-gray-800 hover:bg-gray-700 shadow-md"
            onClick={() => selectProject(project)}
          >
            <img
              alt={project.name}
              className="object-contain rounded"
              src={project.image}
            />{" "}
          </div>
        ))}{" "}
      </div>
    </section>
  );
}
