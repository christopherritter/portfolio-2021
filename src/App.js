import React, { useState, useEffect } from "react";
import classNames from "classnames";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";
import ProjectModal from "./components/ProjectModal";

export default function App() {
  const [project, setProject] = useState(null);
  const [showModal, setShowModal] = React.useState(false);

  // useEffect(() => {
  //   if (showModal) {
  //     document.body.style.overflow = "hidden";
  //     document.body.scroll = "no";
  //   } else {
  //     document.documentElement.style.overflow = 'scroll';
  //     document.body.scroll = "yes";
  //   }
  // }, [showModal]);

  return (
    <main
      className={classNames({
        "text-gray-400": true,
        "bg-gray-900": true,
        "body-font": true,
      })}
    >
      <Navbar />
      {showModal && (
        <ProjectModal project={project} setShowModal={setShowModal} />
      )}
      <About />
      <Timeline />
      <Projects setProject={setProject} setShowModal={setShowModal} />
      <Skills />
      <Testimonials />
    </main>
  );
}
