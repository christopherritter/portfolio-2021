import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { employers } from "../data";
import "../index.css"

export default function Projects(props) {
  const { setProject, openModal } = props;

  function selectProject(project) {
    setProject(project);
    openModal();
  }

  return (
    <section
      id="projects"
      className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto text-gray-400 bg-gray-900 body-font scroll-margin-top"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some projects that I've worked on. Click on any project to see additional screenshots and the required skills.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {employers[0].projects.map((project, index) => (
            <div
              key={index}
              className="project-card rounded bg-gray-800 hover:bg-gray-700"
              onClick={() => selectProject(project)}
            >
              <img
                alt={project.name}
                className="object-contain rounded"
                src={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
