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
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 100px;
  max-width: 1100px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  display: flex;
  background: #0f1624;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  justify-content: center;
  margin-left: 50px;
  height: auto;
  margin-top: 20px;
  border-bottom: 1px solid #ffffff;
  transition: transform 0.3s ease-in-out;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  text-align: start;
`;

const ProjectTitle = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.4em;
  margin-left: 15px;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
`;

const ProjectDescription = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1em;
  font-weight: 300;
  text-align: center;

  color: #fff;
  margin-bottom: 20px;
`;

const ProjectButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  margin-left: 40px;
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

const projects = [
  {
    title: "Blackjack JS",
    description: "A simple blackjack game made with HTML, CSS, and JavaScript.",
    languages: "HTML, CSS, JavaScript",
    image:
      "https://www.shutterstock.com/image-vector/blackjack-hand-spades-black-jack-600nw-2122961363.jpg",
    link: "https://github.com/marvel987dc/JS-Blackjack?tab=readme-ov-file",
  },

  {
    title: "API News",
    description: "A simple news app that fetches data from the News API.",
    languages: "HTML, CSS, JavaScript",
    image:
      "https://static.vecteezy.com/system/resources/previews/025/926/993/non_2x/world-news-flat-icon-news-symbol-logo-illustration-vector.jpg",
    link: "https://github.com/marvel987dc/API-NEWS",
  },

  {
    title: "Python Slot Machine",
    description: "A simple slot machine game made with Python.",
    languages: "Python",
    image:
      "https://media.istockphoto.com/id/522001436/vector/simple-slot-machine-icons.jpg?s=612x612&w=0&k=20&c=B4J2YyZEOtbll6z7hUvOAWhN0J2UyWSv8s0pXhYhmOs=",
    link: "https://github.com/marvel987dc/Python-slot-machine",
  },

  {
    title: "JavaFX Form Database",
    description:
      "A simple form that saves data to a database made with JavaFX.",
    languages: "Java, JavaFX",
    image:
      "https://static.vecteezy.com/system/resources/previews/040/353/749/non_2x/online-form-icon-in-logotype-vector.jpg",
    link: "https://github.com/marvel987dc/Database_form-",
  },
];

export default function ProjectGallery() {
  return (
    <GalleryWrapper id="projects">
      <GalleryTitle>Projects</GalleryTitle>
      <ProjectsCards className="cards">
        {projects.map((project, index) => (
          <ProjectCard className="card" key={index} index={index}>
            <ProjectImage
              className="cardImage"
              src={project.image}
              alt={project.title}
              effect="blur"
            />
            <ProjectContent>
              <ProjectTitle className="cardTitle">{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectButton className="cardButton" href={project.link}>
                GitHub
              </ProjectButton>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsCards>
    </GalleryWrapper>
  );
}
