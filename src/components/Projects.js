import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
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
      className="scroll-margin-top"
    >
      <div className="container px-5 py-10 w-10/12 sm:w-5/6 md:4/5 lg:3/5 mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <CodeIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Projects
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here are some projects that I 've worked on. Click on any project to
            see additional screenshots and the required skills.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {employers[0].projects.map((project, index) => (
            <div
              key={index}
              className="flex relative project-card rounded bg-gray-800 hover:bg-gray-700 shadow-md"
              onClick={() => selectProject(project)}
            >
              <div className="absolute flex flex-wrap content-center inset-0 z-10 text-center align-middle border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 w-full px-4 md:px-8">
                  {project.product}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3 w-full px-4 md:px-8">
                  {project.name}
                </h1>
                <p className="leading-relaxed w-full px-4 md:px-8">
                  {project.summary}
                </p>
              </div>

              <img
                alt={project.name}
                className="relative object-contain"
                src={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
