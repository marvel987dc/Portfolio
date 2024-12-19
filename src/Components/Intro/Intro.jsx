import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Intro.css";

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: #0f1624;
`;

const IntroMessage = styled.h1`
  font-size: 2.5rem;
  margin-left: 50px;
  color: ${(props) => props.color};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-left: 50px;
  color: white;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-top: -10px;
  color: white;
  margin-left: 50px;
`;

const Button = styled.a`
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  width: 10%;
  border-radius: 25px;
  height: 50px;
  margin-left: 70px;
  color: white;
  font-size: 15px;
  margin-top: 10px;
  text-align: center;
  line-height: 50px;
  text-decoration: none;

  &:hover {
    background: linear-gradient(270deg, #13adc7 0%, #6978d1 80%, #945dd6 120%);
  }
`;

const CharaPic = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;\
  margin-top: -250px;
  margin-left: 750px;
`;

const Intro = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const date = new Date();
  const hour = date.getHours();

  let message;
  let color;

  if (hour < 12) {
    message = "Good morning ☀️";
    color = "yellow";
  } else if (hour < 18) {
    message = "Good afternoon 🌇";
    color = "white";
  } else {
    message = "Good evening 🌑";
    color = "red";
  }

  useEffect(() => {
    const text = "Welcome to my portfolio!";
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText((prev) => prev + text[currentIndex]);
      } else {
        clearInterval(intervalId);
      }
      setCurrentIndex((prev) => prev + 1);
    }, 100);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <IntroSection id="intro">
      <IntroMessage color={color}>{message}</IntroMessage>

      <Title className="welcome">{typedText}</Title>
      <Description>
        Aspiring AI-Software Engineering student with strong skills in C#,
        JavaScript, React, Python, Bash, HTML, CSS, Tailwind, Git, SQL, and
        Linux. Passionate about machine learning, with experience in projects
        involving algorithms like Naive Bayes and Logistic Regression. Skilled
        in designing webpages, games, and forms, with a focus on organization,
        problem-solving, and innovation.
      </Description>
      <Button
        href="./Data/Juan_Barrero_ResumeCopy.pdf"
        download="Juan_Barrero_ResumeCopy.pdf"
      >
        Resume
      </Button>
      <CharaPic
        src="./src/assets/Pics/animalCrossingChara.png"
        className="CharaImg"
      />
    </IntroSection>
  );
};

export default Intro;
