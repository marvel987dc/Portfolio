import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Projects.css";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GalleryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 80px;
  background-color: #0f1624;
`;

const GalleryTitle = styled.h2`
  font-size: 2.5em;
  margin: 50px;
  color: white;
`;

const ProjectsCards = styled.div`
  display: grid;
  position: relative;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 100px;
  max-width: 1100px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background: #0f1624;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  overflow: hidden;
  border-radius: 0.625rem;
  box-shadow: 0.25rem 0.25rem 0.5rem rgba(255, 255, 255, 0.25);
  transition: box-shadow 0.3s, transform 0.3s;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${(props) => props.index * 0.1}s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(69, 212, 255, 0.7);
  }
`;

const ProjectImage = styled(LazyLoadImage)`
  width: 90px;
  display: flex;
  justify-content: center;
  margin-left: 110px;
  height: auto;
  margin-top: 20px;
  border-bottom: 1px solid #ffffff;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
  text-align: start;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4em;
  color: #fff;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  color: #fff;
  margin-bottom: 20px;
`;

const ProjectButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-left: 90px;
  font-size: 0.9em;
  color: #fff;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  border-radius: 24px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background: linear-gradient(
      270deg,
      #13adc7 0%,
      #6978d1 66.67%,
      #945dd6 100%
    );
  }
`;

const Modal = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  gap: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const projects = [
  {
    title: "Blackjack JS",
    description: "A simple blackjack game made with HTML, CSS, and JavaScript.",
    image:
      "https://www.shutterstock.com/image-vector/blackjack-hand-spades-black-jack-600nw-2122961363.jpg",
    link: "https://github.com/marvel987dc/JS-Blackjack?tab=readme-ov-file",
  },

  {
    title: "API News",
    description: "A simple news app that fetches data from the News API.",
    image:
      "https://static.vecteezy.com/system/resources/previews/025/926/993/non_2x/world-news-flat-icon-news-symbol-logo-illustration-vector.jpg",
    link: "https://github.com/marvel987dc/API-NEWS",
  },

  {
    title: "Python Slot Machine",
    description: "A simple slot machine game made with Python.",
    image:
      "https://www.jackpotparty.com/static/c6f9ac719ed8038d53a693af38b285f4/7c5e8/slots_symbols.png",
    link: "https://github.com/marvel987dc/Python-slot-machine",
  },

  {
    title: "JavaFX Form Database",
    description:
      "A simple form that saves data to a database made with JavaFX.",
    image: "https://static.thenounproject.com/png/87088-200.png",
    link: "https://github.com/marvel987dc/Database_form-",
  },
];

export default function ProjectGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <GalleryWrapper id="projects">
      <GalleryTitle>Projects</GalleryTitle>
      <ProjectsCards className="cards">
        {projects.map((project, index) => (
          <ProjectCard
            className="card"
            key={index}
            index={index}
            onClick={() => openModal(project)}
          >
            <ProjectImage
              src={project.image}
              alt={project.title}
              effect="blur"
            />
            <ProjectContent>
              <ProjectTitle className="cardTitle">{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectButton className="cardButton" href={project.link}>GitHub</ProjectButton>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsCards>
      {selectedProject && (
        <>
          <ModalOverlay isOpen={modalOpen} onClick={closeModal} />
          <Modal isOpen={modalOpen}>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <ProjectImage
              src={selectedProject}
              alt={selectedProject.title}
              effect="blur"
            />
            <ProjectButton href={selectedProject.link} target="_blank" rel="">
              GitHub
            </ProjectButton>
            <button onClick={closeModal}>Close</button>
          </Modal>
        </>
      )}
    </GalleryWrapper>
  );
}
