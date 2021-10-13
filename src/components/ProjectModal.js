import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#modal");

export default function ProjectModal(props) {
  const { project, viewProject, modalIsOpen, closeModal } = props;
  const [projectImages, setProjectImages] = useState([]);

  useEffect(() => {
    if (modalIsOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [modalIsOpen]);

  useEffect(() => {
    if (project) {
      if (project.tasks) {
        project.tasks.forEach((task) => {
          if (task.deliverables) {
            task.deliverables.forEach((deliverable) => {
              if (
                deliverable.image &&
                !projectImages.includes(deliverable.image)
              ) {
                setProjectImages([deliverable.image, ...projectImages]);
              }
            });
          }
        });
      }
    }
  }, [project, projectImages]);

  if (!project) {
    return null;
  }

  const ProjectTask = ({ task }) => {
    return (
      <>
        <h2 className="px-2 mb-1 text-white text-xl font-semi">{task.type}</h2>
        <p className="px-2 mb-6 text-blueGray-200 text-base leading-relaxed whitespace-pre-line align-top">
          {task.description}
        </p>
        {task.deliverables &&
          task.deliverables.map((deliverable, index) => {
            return (
              <div key={index}>
                <div className="rounded bg-gray-900 mb-4">
                  <img alt={deliverable.title} src={deliverable.image} />
                </div>
                <p className="px-2 mb-10 text-xs text-blueGray-400">
                  <strong>
                    Figure {projectImages.indexOf(deliverable.image) + 2}.
                  </strong>{" "}
                  {deliverable.title}
                </p>
              </div>
            );
          })}
      </>
    );
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="flex flex-col w-11/12 sm:w-5/6 md:10/12 max-w-4xl mx-auto bg-gray-800 text-white rounded-lg outline-none"
      overlayClassName="fixed flex flex-col inset-0 h-screen z-50 bg-black bg-opacity-60 overflow-y-auto py-10"
      contentLabel={project.name}
    >
      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-900 rounded-t">
        <h3
          className="text-3xl text-blueGray-100 font-semibold"
          id="projectTitle"
          style={{ scrollMarginTop: "72px" }}
        >
          {project.name}
        </h3>
        <button
          className="p-1 ml-auto bg-transparent border-0 text-gray-900 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          onClick={closeModal}
        >
          <span className="bg-transparent text-blueGray-500 h-8 w-8 text-2xl block outline-none focus:outline-none">
            ×
          </span>
        </button>
      </div>

      <div className="relative p-6 flex-auto">
        <div className="flex flex-wrap">
          {project.product && (
            <div className="flex flex-col w-full sm:w-1/2 px-2">
              <h6 className="uppercase text-xs font-bold text-blueGray-500 mb-2">
                Product
              </h6>
              <p className="mb-8 text-blueGray-200 text-lg leading-relaxed">
                {project.product}
              </p>
            </div>
          )}
          {project.date && (
            <div className="flex flex-col w-full sm:w-1/2 px-2">
              <h6 className="uppercase text-xs font-bold text-blueGray-500 mb-2">
                Date
              </h6>
              <p className="mb-8 text-blueGray-200 text-lg leading-relaxed">
                {project.date}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap">
          {project.problem && (
            <div className="flex flex-col w-full lg:w-1/2 px-2">
              <h6 className="uppercase text-xs font-bold text-blueGray-500 mb-2">
                Problem
              </h6>
              <p className="mb-8 text-blueGray-200 text-lg leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}
          {project.solution && (
            <div className="flex flex-col w-full lg:w-1/2 px-2">
              <h6 className="uppercase text-xs font-bold text-blueGray-500 mb-2">
                Solution
              </h6>
              <p className="mb-8 text-blueGray-200 text-lg leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap">
          {project.role && (
            <div className="flex flex-col w-full lg:w-1/2 px-2">
              <h6 className="uppercase text-xs font-bold text-blueGray-500 mb-2">
                Role(s)
              </h6>
              <p className="mb-8 text-blueGray-200 text-lg leading-relaxed">
                {project.role}
              </p>
            </div>
          )}
          {project.process && project.process.length > 0 && (
            <div className="flex flex-col w-full lg:w-1/2 px-2">
              <h6 className="uppercase text-xs font-bold text-blueGray-500 mb-2">
                Process
              </h6>
              <p className="mb-8 text-blueGray-200 text-lg leading-relaxed">
                {project.process.map((step, index) => {
                  if (index !== project.process.length - 1) {
                    return <span key={index}>{step},&nbsp;</span>;
                  } else {
                    return <span key={index}>{step}</span>;
                  }
                })}
              </p>
            </div>
          )}
        </div>

        <div className="rounded bg-gray-900 mb-4">
          <img alt={project.name} src={project.image} />
        </div>

        {project.imageDesc && (
          <p className="px-2 mb-10 text-xs text-blueGray-400">
            <strong>Figure 1.</strong> {project.imageDesc}
          </p>
        )}

        {project.tasks &&
          project.tasks.map((task, index) => (
            <ProjectTask task={task} key={index} />
          ))}

        {project.results && (
          <div className="px-2">
            <h6 className="uppercase text-xs font-bold text-blueGray-500 mb-4">
              Results
            </h6>
            <p className="mb-6 text-blueGray-200 text-base leading-relaxed whitespace-pre-line align-top">
              {project.results.finalResult}
            </p>
            <p className="mb-6 text-blueGray-200 text-base leading-relaxed whitespace-pre-line align-top">
              {project.results.keyLearnings}
            </p>
            <p className="mb-6 text-blueGray-200 text-base leading-relaxed whitespace-pre-line align-top">
              {project.results.nextSteps}
            </p>
          </div>
        )}

        {/*footer*/}
        <div className="flex flex-wrap justify-end py-6">
          <button
            className="mr-auto text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            type="button"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            className="mr-4 bg-transparent hover:text-gray-200 text-white py-2 px-6 border border-gray-400 hover:border-green-600 rounded text-lg"
            type="button"
            onClick={() => {
              viewProject({ direction: "previous", id: project.id });
              document
                .getElementById("projectTitle")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Previous Project
          </button>
          <button
            className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            type="button"
            onClick={() => {
              viewProject({ direction: "next", id: project.id });
              document
                .getElementById("projectTitle")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Next Project
          </button>
        </div>
      </div>
    </Modal>
  );
}

const props = {};

ReactDOM.render(<ProjectModal {...props} />, document.getElementById("modal"));
