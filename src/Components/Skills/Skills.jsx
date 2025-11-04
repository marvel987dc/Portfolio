import { useState } from "react";
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

const languages = [
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
    name: "Kotlin",
    icon: "https://img.icons8.com/color/48/000000/kotlin.png",
    level: 7,
  },
];

const libraries = [
  {
    name: "Node.js",
    icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    level: 8,
  },
  {
    name: "Express",
    icon: "https://img.icons8.com/color/48/000000/express.png",
    level: 8,
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/color/48/000000/mongodb.png",
    level: 7,
  },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
    level: 8,
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/color/48/000000/tailwindcss.png",
    level: 8,
  },
  {
    name: "Flask",
    icon: "https://img.icons8.com/color/48/000000/flask.png",
    level: 8,
  },
  {
    name: "Pandas",
    icon: "https://img.icons8.com/color/48/000000/pandas.png",
    level: 8,
  },
  {
    name: "NumPy",
    icon: "https://img.icons8.com/color/48/000000/numpy.png",
    level: 8,
  },
  {
    name: "Scikit-learn",
    icon: "https://raw.githubusercontent.com/scikit-learn/scikit-learn/main/doc/logos/scikit-learn-logo.png",
    level: 8,
  },
  {
    name: "TensorFlow",
    icon: "https://img.icons8.com/color/48/000000/tensorflow.png",
    level: 8,
  },
  {
    name: "Matplotlib",
    icon: "https://img.icons8.com/color/48/000000/matplotlib.png",
    level: 8,
  },
];

const OtherSkills = [
  {
    name: "Figma",
    icon: "https://img.icons8.com/color/48/000000/figma.png",
    level: 10,
  },
  {
    name: "Canva",
    icon: "https://img.icons8.com/color/48/000000/canva.png",
    level: 10,
  },
  {
    name: "Orange",
    icon: "https://img.icons8.com/color/48/000000/orange.png",
    level: 8,
  },
  {
    name: "Excel",
    icon: "https://img.icons8.com/color/48/000000/microsoft-excel-2019.png",
    level: 9,
  },
  {
    name: "Azure",
    icon: "https://img.icons8.com/color/48/000000/azure-1.png",
    level: 8,
  },
  {
    name: "AWS",
    icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
    level: 8,
  },
  {
    name: "Linux",
    icon: "https://img.icons8.com/color/48/000000/linux.png",
    level: 7,
  },
  {
    name: "Notion",
    icon: "https://img.icons8.com/color/48/000000/notion.png",
    level: 9,
  },
  {
    name: "Postman",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
    level: 9,
  },
  {
    name: "git",
    icon: "https://img.icons8.com/color/48/000000/git.png",
    level: 9,
  },
];

const LanguagesWrapper = styled.section`
  padding: 60px 20px;
  background-color: #0f1624;
  text-align: center;
`;

const TabNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const TabButton = styled.button`
  background: ${(props) =>
    props.active
      ? "linear-gradient(90deg, #13adc7, #6978d1, #945dd6)"
      : "transparent"};
  border: none;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  padding: 12px 30px;
  font-size: 1.1em;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  flex: 1;
  min-width: 120px;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: ${(props) =>
      props.active
        ? "linear-gradient(90deg, #13adc7, #6978d1, #945dd6)"
        : "rgba(69, 212, 255, 0.3)"};
    color: #ffffff;
    transform: scale(1.02);
    z-index: 1;
    box-shadow: 0 0 20px rgba(69, 212, 255, 0.4);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #13adc7, #6978d1, #945dd6);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  ${(props) =>
    props.active &&
    `
    &::after {
      width: 100%;
    }
  `}
`;

const ContentContainer = styled.div`
  min-height: 400px;
  animation: fadeIn 0.4s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: #ffffff;
  margin-bottom: 40px;
  text-transform: capitalize;
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
  width: 48px;
  height: 48px;
  object-fit: contain;
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
  const [activeTab, setActiveTab] = useState("languages");

  const getCurrentSkills = () => {
    switch (activeTab) {
      case "languages":
        return languages;
      case "libraries":
        return libraries;
      case "other":
        return OtherSkills;
      default:
        return languages;
    }
  };

  const currentSkills = getCurrentSkills();
  const showSkillBar = activeTab !== "other";

  return (
    <LanguagesWrapper id="technologies">
      <TabNav>
        <TabButton
          active={activeTab === "languages"}
          onMouseEnter={() => setActiveTab("languages")}
        >
          Languages
        </TabButton>
        <TabButton
          active={activeTab === "libraries"}
          onMouseEnter={() => setActiveTab("libraries")}
        >
          Libraries
        </TabButton>
        <TabButton
          active={activeTab === "other"}
          onMouseEnter={() => setActiveTab("other")}
        >
          Other Skills
        </TabButton>
      </TabNav>
      <ContentContainer>
        <Title>{activeTab}</Title>
        <TechGrid>
          {currentSkills.map((tech, index) => (
            <TechItem key={index} index={index}>
              <TechIcon src={tech.icon} alt={tech.name} />
              <TechName>{tech.name}</TechName>
              {showSkillBar && (
                <SkillBar>
                  <SkillLevel level={tech.level} />
                  <SkillPercentage>{tech.level * 10}%</SkillPercentage>
                </SkillBar>
              )}
            </TechItem>
          ))}
        </TechGrid>
      </ContentContainer>
    </LanguagesWrapper>
  );
}
