import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";
import ProjectModal from "./components/ProjectModal";

export default function App() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      { showModal && <ProjectModal setShowModal={setShowModal} /> }
      <About />
      <Timeline setShowModal={setShowModal} />
      <Projects setShowModal={setShowModal} />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
