import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import classNames from "classnames";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export default function App() {
  const [project, setProject] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <main
      className={classNames({
        "text-gray-400": true,
        "bg-gray-900": true,
        "body-font": true,
      })}
    >
      <Navbar />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
      <About />
      <Timeline />
      <Projects
        setProject={setProject}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Skills />
      <Testimonials />
    </main>
  );
}

const props = {};

ReactDOM.render(<App {...props} />, document.getElementById('root'))
