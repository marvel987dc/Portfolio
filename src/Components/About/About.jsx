import styled from "styled-components";
import "./About.css"

const IntroSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;  
  margin-top: 50px;
  background-color: #0f1624;
  gap: 30px;
`;

const Title = styled.h2`
  margin-left: 50px;
  font-size: 2.5em;
  color: #fff;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-top: -10px;
  color: white;
  margin-left: 50px;
`;

// const Separator = styled.img`
//   width: 100%;
//   `;

const Intro = () => {
  return (
    <IntroSection id="about">
      <Title className="Title">About me</Title>
      <Description>
        Hi, I'm Juan. I came to Canada from Colombia to pursue my dream of
        becoming a software engineer and to showcase my skills in design,
        critical thinking, and problem-solving. I am currently in my third
        semester at Centennial College. Beyond coding, I enjoy playing the
        guitar, drawing in my free time, and watching movies.
      </Description>
      {/* <Separator src="./src/assets/Pics/separator.png" /> */}
    </IntroSection>
  );
};

export default Intro;
