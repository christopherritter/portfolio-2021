import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import classNames from "classnames";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

export default function App() {
  const [project, setProject] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setProject(null);
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <main
      className={classNames({
        "text-gray-400": true,
        "bg-gray-900": true,
        "body-font": true,
      })}
    >
      <Navbar />
      <ProjectModal
        project={project}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
      <About />
      <Timeline />
      <Projects
        setProject={setProject}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Skills />
      <Testimonials />
      <Resume />
      <Footer />
    </main>
  );
}
