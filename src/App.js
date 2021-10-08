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
import { employers } from "./data";

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

export default function App() {
  const [projectList, setProjectList] = useState([]);
  const [project, setProject] = useState(null);
  var projectId = 0;

  useEffect(() => {
    function containsProject(project) {
      var i;
      for (i = 0; i < projectList.length; i++) {
        if (projectList[i] === project) {
          return true;
        }
      }
      return false;
    }
    employers.forEach((employer) => {
      if (employer.projects) {
        employer.projects.forEach((project) => {
          if (!containsProject(project) || project.id === null) {
            project.id = projectId;
            projectId++;
            setProjectList([project, ...projectList]);
          }
        });
      }
    });
  }, [projectList, projectId]);

  function navigateToProject({ direction, id }) {
    var visibleProjects = [];
    projectList.forEach((project) => {
      if (project.process && project.process.length) {
        visibleProjects.push(project);
      }
    });

    if (
      direction === "previous" &&
      visibleProjects.findIndex((x) => x.id === id) === 0
    ) {
      setProject(visibleProjects[visibleProjects.length -1]);
    } else if (
      direction === "next" &&
      visibleProjects.findIndex((x) => x.id === id) ===
        visibleProjects.length - 1
    ) {
      setProject(visibleProjects[0]);
    } else if (direction === "previous") {
      setProject(visibleProjects[(visibleProjects.findIndex((x) => x.id === id) - 1)]);
    } else if (direction === "next") {
      setProject(visibleProjects[(visibleProjects.findIndex((x) => x.id === id) + 1)]);
    }

  }

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
        viewProject={navigateToProject}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
      <About />
      <Timeline />
      <Projects
        projects={projectList}
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
