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
      className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto bg-gray-800 text-white rounded-lg outline-none"
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
        <h6 className="uppercase text-xs font-bold text-blueGray-500 mb-2">
          Project
        </h6>
        <p className="mb-8 text-blueGray-200 text-lg leading-relaxed">
          {project.description}
        </p>
        <div className="rounded bg-gray-900 mb-8">
          <img className="rounded" alt={project.name} src={project.image} />
        </div>
        {project.tasks &&
          project.tasks.map((task, tIndex) => (
            <div key={tIndex}>
              <h6 className="uppercase text-xs font-bold text-blueGray-500 mb-2">
                Task
              </h6>
              <p className="mb-4 text-blueGray-200 text-lg leading-relaxed">
                {task.description}
              </p>
              <div className="mb-6">
                {task.skills &&
                  task.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-green-800 bg-green-400 uppercase last:mr-0 mr-1 mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                {task.tools &&
                  task.tools.map((tool, toIndex) => (
                    <span
                      key={toIndex}
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-green-800 bg-green-400 uppercase last:mr-0 mr-1"
                    >
                      {tool}
                    </span>
                  ))}
                {task.tech &&
                  task.tech.map((te, teIndex) => (
                    <span
                      key={teIndex}
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-green-800 bg-green-400 uppercase last:mr-0 mr-1"
                    >
                      {te}
                    </span>
                  ))}
              </div>
              {task.deliverables &&
                task.deliverables.map((deliverable, dIndex) => (
                  <div key={dIndex}>
                    <p className="mb-2 text-blueGray-300 leading-relaxed">
                      {deliverable.title}
                    </p>
                    <p className="mb-4 text-blueGray-400 leading-relaxed">
                      {deliverable.description}
                    </p>
                    <div className="rounded bg-gray-900 text-lg mb-8">
                      <img
                        className="rounded"
                        alt={project.name}
                        src={deliverable.image}
                      />
                    </div>
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
