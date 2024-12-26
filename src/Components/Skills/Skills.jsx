import styled from "styled-components";
import { keyframes } from "styled-components";

const technologies = [
  { name: "HTML", icon: "https://img.icons8.com/color/48/000000/html-5.png" },
  { name: "CSS", icon: "https://img.icons8.com/color/48/000000/css3.png" },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript.png",
  },
  {
    name: "React",
    icon: "https://img.icons8.com/color/48/000000/react-native.png",
  },
  { name: "Python", icon: "https://img.icons8.com/color/48/000000/python.png" },
  {
    name: "C#",
    icon: "https://img.icons8.com/color/48/000000/c-sharp-logo.png",
  },
  {
    name: "Java",
    icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
  },
  { name: "git", icon: "https://img.icons8.com/color/48/000000/git.png" },
  { name: "Figma", icon: "https://img.icons8.com/color/48/000000/figma.png" },
];

const LanguagesWrapper = styled.section`
  padding: 60px 20px;
  background-color: #0f1624;
  text-align: center;
`;

const Title = styled.h2`
  margin-left: 50px;
  font-size: 2.5em;
  color: #ffffff;
  margin-bottom: 40px;
`;

const TechGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin-left: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TechItem = styled.div`
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgb(255, 255, 255);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 150px;
  text-align: center;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 4px 16px rgba(69, 212, 255, 0.7);
  }
`;

const TechIcon = styled.img`
  height: auto;
  margin-bottom: 10px;
`;

const TechName = styled.p`
  font-size: 1em;
  color: #ffffff;
`;

export default function Skills() {
  return (
    <LanguagesWrapper id="technologies">
      <Title>Skills</Title>
      <TechGrid>
        {technologies.map((tech, index) => (
          <TechItem key={index} index={index}>
            <TechIcon src={tech.icon} alt={tech.name} />
            <TechName>{tech.name}</TechName>
          </TechItem>
        ))}
      </TechGrid>
    </LanguagesWrapper>
  );
}
