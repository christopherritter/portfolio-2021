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
      className="container mx-auto bg-white rounded"
      overlayClassName="fixed flex flex-col justify-center inset-0 z-50 bg-black bg-opacity-60 "
      contentLabel={project.title}
    >
      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
        <h3 className="text-3xl font-semibold">{project.title}</h3>
        <button
          className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          onClick={closeModal}
        >
          <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
            ×
          </span>
        </button>
      </div>
      <div className="relative p-6 flex-auto">
        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
          {project.description}
        </p>
      </div>
    </Modal>
  );
}

const props = {};

ReactDOM.render(<ProjectModal {...props} />, document.getElementById("modal"));
