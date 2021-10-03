import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#modal");

export default function ProjectModal(props) {
  const { project, modalIsOpen, closeModal } = props;

  useEffect(() => {
    if (modalIsOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [modalIsOpen]);

  if (!project) {
    return null;
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="flex flex-col w-11/12 sm:w-5/6 md:10/12 max-w-3xl mx-auto bg-gray-800 text-white rounded-lg outline-none"
      overlayClassName="fixed flex flex-col inset-0 h-screen z-50 bg-black bg-opacity-60 overflow-y-auto py-10"
      contentLabel={project.name}
    >
      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-900 rounded-t">
        <h3 className="text-3xl text-blueGray-100 font-semibold">
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
        <div className="flex flex-row">
          {project.product && (
            <div className="flex flex-col w-1/2 px-2">
              <h6 className="uppercase text-xs font-bold text-blueGray-500 mb-2 w-1/2">
                Product
              </h6>
              <p className="mb-8 text-blueGray-200 text-lg leading-relaxed w-1/2">
                {project.product}
              </p>
            </div>
          )}
          {project.date && (
            <div className="flex flex-col w-1/2 px-2">
              <h6 className="uppercase text-xs font-bold text-blueGray-500 mb-2">
                Date
              </h6>
              <p className="mb-8 text-blueGray-200 text-lg leading-relaxed">
                {project.date}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-row">
          {project.problem && (
            <div className="flex flex-col w-1/2 px-2">
              <h6 className="uppercase text-xs font-bold text-blueGray-500 mb-2">
                Problem
              </h6>
              <p className="mb-8 text-blueGray-200 text-lg leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}
          {project.solution && (
            <div className="flex flex-col w-1/2 px-2">
              <h6 className="uppercase text-xs font-bold text-blueGray-500 mb-2">
                Solution
              </h6>
              <p className="mb-8 text-blueGray-200 text-lg leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}
        </div>

        {project.process && project.process.length > 0 && (
          <div className="px-2">
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

        <div className="rounded bg-gray-900 mb-8">
          <img alt={project.name} src={project.image} />
        </div>

        {project.tasks &&
          project.tasks.map((task, index) => (
            <div className="px-2" key={index}>
              <h2 className="uppercase text-xs font-bold text-blueGray-500 mb-2">
                {task.type}
              </h2>
              <p className="mb-8 text-blueGray-200 text-lg leading-relaxed">
                {task.summary}
              </p>
              {task.deliverables &&
                task.deliverables.map((deliverable, index) => (
                  <div key={index} className="rounded bg-gray-900 mb-8">
                    <img
                      alt={deliverable.title}
                      src={deliverable.image}
                    />
                  </div>
                ))}
            </div>
          ))}
      </div>
    </Modal>
  );
}

const props = {};

ReactDOM.render(<ProjectModal {...props} />, document.getElementById("modal"));
