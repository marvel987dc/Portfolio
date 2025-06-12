import styled from "styled-components";
import { keyframes } from "styled-components";

const countUp = keyframes`
  from {
    width: 0;
  }
  to {
    width: var(--target-width);
  }
`;

const technologies = [
  {
    name: "HTML",
    icon: "https://img.icons8.com/color/48/000000/html-5.png",
    level: 10,
  },
  {
    name: "CSS",
    icon: "https://img.icons8.com/color/48/000000/css3.png",
    level: 8,
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript.png",
    level: 8,
  },
  {
    name: "React",
    icon: "https://img.icons8.com/color/48/000000/react-native.png",
    level: 9,
  },
  {
    name: "Python",
    icon: "https://img.icons8.com/color/48/000000/python.png",
    level: 8,
  },
  {
    name: "C#",
    icon: "https://img.icons8.com/color/48/000000/c-sharp-logo.png",
    level: 7,
  },
  {
    name: "Java",
    icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
    level: 8,
  },
  {
    name: "git",
    icon: "https://img.icons8.com/color/48/000000/git.png",
    level: 9,
  },
  {
    name: "Figma",
    icon: "https://img.icons8.com/color/48/000000/figma.png",
    level: 10,
  },
];

const LanguagesWrapper = styled.section`
  padding: 60px 20px;
  background-color: #0f1624;
  text-align: center;
`;

const Title = styled.h2`
  // margin-left: 50px;
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
  // margin-left: 50px;

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
  width: 180px;
  text-align: center;
  position: relative;
  overflow: visible;

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
  margin-bottom: 15px;
`;

const SkillBar = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-top: 10px;
  overflow: hidden;
`;

const SkillLevel = styled.div`
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #13adc7, #6978d1, #945dd6);
  border-radius: 4px;
  transition: width 1s ease-in-out;

  ${TechItem}:hover & {
    width: ${(props) => props.level * 10}%;
  }
`;

const SkillText = styled.span`
  position: absolute;
  right: 0;
  top: -20px;
  color: #ffffff;
  font-size: 0.9em;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${TechItem}:hover & {
    opacity: 1;
  }
`;

const SkillPercentage = styled.span`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  color: #ffffff;
  font-size: 0.8em;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${TechItem}:hover & {
    opacity: 1;
  }
`;

export default function Skills() {
  return (
    <LanguagesWrapper id="technologies">
      <Title>languages</Title>
      <TechGrid>
        {technologies.map((tech, index) => (
          <TechItem key={index} index={index}>
            <TechIcon src={tech.icon} alt={tech.name} />
            <TechName>{tech.name}</TechName>
            <SkillBar>
              <SkillLevel level={tech.level} />
              <SkillPercentage>{tech.level * 10}%</SkillPercentage>
            </SkillBar>
            <SkillText>{tech.level}/10</SkillText>
          </TechItem>
        ))}
      </TechGrid>
    </LanguagesWrapper>
  );
}
