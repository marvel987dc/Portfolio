import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Pic from "../../assets/Pics/animalCrossingChara.png";

const coinFlip = keyframes`
  0% {
    transform: rotateY(0deg);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
  25% {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
  }
  50% {
    transform: rotateY(180deg);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
  75% {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
  }
  100% {
    transform: rotateY(360deg);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background-color: var(--bg-primary);
  gap: 30px;
  text-align: center;
`;

const IntroMessage = styled.h1`
  font-size: 2rem;
  font-family: var(--font-display);
  color: var(--text-primary);
  margin: 0;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--text-primary);
  min-height: 3rem; /* Prevent layout shift */
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Button = styled.a`
  background: var(--gradient-main);
  padding: 0.8rem 2rem;
  border-radius: 25px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1);
  }
`;

const CharaPic = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  backface-visibility: visible;
  cursor: pointer;

  &.flip {
    animation: ${coinFlip} 1.5s ease-in-out 1 forwards;
    border: 4px solid rgba(255, 255, 255, 0.8);
  }

  &:hover {
    border: 4px solid rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }
`;

const Intro = () => {
  const [typedText, setTypedText] = useState("");
  const [hasFlipped, setHasFlipped] = useState(false);
  
  const date = new Date();
  const hour = date.getHours();

  let message;
  if (hour < 12) {
    message = "Good morning ☀️";
  } else if (hour < 18) {
    message = "Good afternoon 🌇";
  } else {
    message = "Good evening 🌑";
  }

  useEffect(() => {
    const text = "Weelcome to my portfolio!";
    let currentIndex = 0;
    setTypedText(""); // Reset on mount

    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText((prev) => prev + text.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only once

  const handleImageHover = () => {
    if (!hasFlipped) {
      setHasFlipped(true);
      // Reset flip after animation ensures it can happen again if desired, 
      // but logic here says "if !hasFlipped", so it happens once. 
      // If we want it to happen every time, we should remove the check or reset it.
      // Keeping original behavior of once per session/mount for now.
    }
  };

  return (
    <IntroSection id="intro">
      <IntroMessage>{message}</IntroMessage>
      <CharaPic
        src={Pic}
        className={hasFlipped ? "flip" : ""}
        onMouseEnter={handleImageHover}
        alt="Character Avatar"
      />
      <Title>{typedText}</Title>
      <Description>
        Aspiring AI-Software Engineering student with strong skills in C#,
        JavaScript, React, Python, Bash, HTML, CSS, Tailwind, Git, SQL, and
        Linux. Passionate about machine learning, with experience in projects
        involving algorithms like Naive Bayes and Logistic Regression. Skilled
        in designing webpages, games, and forms, with a focus on organization,
        problem-solving, and innovation.
      </Description>
      <Button
        href="./Data/Juan_Barrero_Resume - Copy.pdf"
        download="Juan_Barrero_Resume - Copy.pdf"
      >
        Resume
      </Button>
    </IntroSection>
  );
};

export default Intro;
