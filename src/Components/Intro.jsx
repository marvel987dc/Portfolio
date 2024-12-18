import React from "react";
import styled from "styled-components";

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: #0f1624;
`;

const IntroMessage = styled.h1`
  font-size: 2rem;
  margin: 0;
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

const Intro = () => {
  const date = new Date();
  const hour = date.getHours();

  let message;
  let color;

  if (hour < 12) {
    message = "Good morning ☀️";
    color = "green";
  } else if (hour < 18) {
    message = "Good afternoon 🌇";
    color = "orange";
  } else {
    message = "Good evening 🌑";
    color = "red";
  }

  return (
    <IntroSection id="intro">
      <Title color={color}>{message}</Title>
      <Title>Welcome to my portfolio!</Title>
      <Description>
        Olá! Sou um desenvolvedor apaixonado por criar soluções web inovadoras e eficientes. Aqui você encontrará alguns dos meus projetos recentes e informações para entrar em contato comigo.
      </Description>
    </IntroSection>
  );
};

export default Intro;
