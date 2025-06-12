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
  padding: 80px 20px;
  background-color: #0f1624;
`;

const GalleryTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 50px;
  color: white;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #13adc7, #6978d1, #945dd6);
    border-radius: 2px;
  }
`;

const ProjectsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1100px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${(props) => props.index * 0.1}s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  max-width: 320px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(69, 212, 255, 0.2);
    border-color: rgba(69, 212, 255, 0.3);
  }
`;

const ProjectImage = styled(LazyLoadImage)`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`;

const ProjectContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4em;
  color: #fff;
  margin: 0;
  text-align: center;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #13adc7, #6978d1);
    border-radius: 2px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  text-align: center;
  line-height: 1.5;
`;

const ProjectLanguages = styled.p`
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  text-align: center;
  font-style: italic;
`;

const ProjectButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  font-size: 1em;
  color: #fff;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  margin-top: auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(69, 212, 255, 0.3);
    background: linear-gradient(270deg, #13adc7 0%, #6978d1 80%, #945dd6 100%);
  }
`;

const projects = [
  {
    title: "Blackjack JS",
    description: "Blackjack game made with HTML, CSS, and JavaScript.",
    languages: "HTML, CSS, JavaScript",
    image:
      "https://www.shutterstock.com/image-vector/blackjack-hand-spades-black-jack-600nw-2122961363.jpg",
    link: "https://github.com/marvel987dc/JS-Blackjack?tab=readme-ov-file",
  },
  {
    title: "API News",
    description: "News app that fetches data from the News API.",
    languages: "HTML, CSS, JavaScript",
    image:
      "https://static.vecteezy.com/system/resources/previews/025/926/993/non_2x/world-news-flat-icon-news-symbol-logo-illustration-vector.jpg",
    link: "https://github.com/marvel987dc/API-NEWS",
  },
  {
    title: "Python Slot Machine",
    description: "Slot machine game made with Python.",
    languages: "Python",
    image:
      "https://media.istockphoto.com/id/522001436/vector/simple-slot-machine-icons.jpg?s=612x612&w=0&k=20&c=B4J2YyZEOtbll6z7hUvOAWhN0J2UyWSv8s0pXhYhmOs=",
    link: "https://github.com/marvel987dc/Python-slot-machine",
  },
  {
    title: "JavaFX Form Database",
    description: "Form that saves data to a database made with JavaFX.",
    languages: "Java, JavaFX",
    image:
      "https://static.vecteezy.com/system/resources/previews/040/353/749/non_2x/online-form-icon-in-logotype-vector.jpg",
    link: "https://github.com/marvel987dc/Database_form-",
  },
  {
    title: "Trivia Test",
    description: "Trivia game made with React.",
    languages: "HTML, CSS, JavaScript(React)",
    image:
      "https://static.vecteezy.com/system/resources/previews/023/911/518/non_2x/inspection-icon-check-illustration-symbol-examination-sign-test-logo-vector.jpg",
    link: "https://github.com/marvel987dc/trivia_test-",
  },
  {
    title: "AuthenticAuth",
    description:
      "Check the validations of your certificates by using blockchain (Powered by AI).",
    languages: "GO, JavaScript(React), Tailwind, CSS, HTML",
    image:
      "https://static.vecteezy.com/system/resources/previews/022/781/482/non_2x/shield-with-lock-2fa-two-factor-authentication-concept-icon-in-line-style-design-isolated-on-white-background-editable-stroke-vector.jpg",
    link: "https://github.com/marvel987dc/AuthenticAuth",
  },
];

export default function ProjectGallery() {
  return (
    <GalleryWrapper id="projects">
      <GalleryTitle>Projects</GalleryTitle>
      <ProjectsCards>
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index}>
            <ProjectImage
              src={project.image}
              alt={project.title}
              effect="blur"
            />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLanguages>{project.languages}</ProjectLanguages>
              <ProjectButton
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </ProjectButton>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsCards>
    </GalleryWrapper>
  );
}
