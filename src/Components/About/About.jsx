import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import "./About.css";
import diplomaImage from "../../assets/Diploma/Diploma .jpeg";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const IntroSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  background-color: #0f1624;
  gap: 30px;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      #13adc7,
      #6978d1,
      #945dd6,
      transparent
    );
  }
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: #fff;
  margin-bottom: 20px;
  position: relative;
  animation: ${fadeIn} 0.8s ease-out;

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

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 20px auto;
  color: white;
  line-height: 1.8;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out 0.2s backwards;
  padding: 0 20px;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
  flex-wrap: wrap;
  animation: ${fadeIn} 0.8s ease-out 0.4s backwards;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  min-width: 150px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ClickableStatItem = styled(StatItem)`
  cursor: pointer;
`;

const StatNumber = styled.div`
  font-size: 2em;
  color: #13adc7;
  font-weight: bold;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  color: white;
  font-size: 1em;
`;

const DiplomaImage = styled.img`
  width: 100%;
  max-width: 210px;
  height: auto;
  display: block;
  margin: 0 auto 10px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
`;

const DiplomaModal = styled.button`
  position: fixed;
  inset: 0;
  border: 0;
  padding: 24px;
  background: rgba(5, 10, 18, 0.88);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: zoom-out;
`;

const DiplomaModalImage = styled.img`
  width: min(92vw, 900px);
  max-height: 88vh;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.55);
`;

const InterestsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
  animation: ${fadeIn} 0.8s ease-out 0.6s backwards;
`;

const InterestItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const Intro = () => {
  const [isDiplomaOpen, setIsDiplomaOpen] = useState(false);

  return (
    <IntroSection id="about">
      <Title>About Me</Title>
      <Description>
        Hi, I’m Juan. I came to Canada from Colombia to pursue my dream of
        becoming a software engineer and to develop my skills in software
        development, design, critical thinking, and problem-solving. I recently
        graduated from the AI – Software Engineering Technology program at
        Centennial College and am currently looking for new opportunities where
        I can contribute, continue learning, and grow as a developer. Beyond
        coding, I enjoy playing the guitar, drawing in my free time, and
        watching movies.
      </Description>

      <StatsContainer>
        <ClickableStatItem
          type="button"
          onClick={() => setIsDiplomaOpen(true)}
          aria-label="Open diploma image in a larger view"
        >
          <StatNumber>Diploma</StatNumber>
          <DiplomaImage src={diplomaImage} alt="Diploma certificate" />
        </ClickableStatItem>
        <StatItem>
          <StatNumber>6+</StatNumber>
          <StatLabel>Projects Completed</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>7+</StatNumber>
          <StatLabel>Programming Languages</StatLabel>
        </StatItem>
      </StatsContainer>
      <h1 className="interests">Interests</h1>
      <InterestsContainer>
        <InterestItem>🎸 Music</InterestItem>
        <InterestItem>🎨 Drawing</InterestItem>
        <InterestItem>🎬 Movies</InterestItem>
        <InterestItem>💻 Coding</InterestItem>
      </InterestsContainer>
      {isDiplomaOpen && (
        <DiplomaModal
          type="button"
          onClick={() => setIsDiplomaOpen(false)}
          aria-label="Close diploma image"
        >
          <DiplomaModalImage
            src={diplomaImage}
            alt="Diploma certificate enlarged"
          />
        </DiplomaModal>
      )}
    </IntroSection>
  );
};

export default Intro;
