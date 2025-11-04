import React from "react";
import styled from "styled-components";
import "./NavBar.css";
import github from "../../assets/Pics/github.png";
import linkedin from "../../assets/Pics/Linkedin.png";

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: rgba(15, 22, 36, 0.95);
  backdrop-filter: blur(10px);
  color: white;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin: 0;
  color: white;
  font-family: "Doto", serif;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #13adc7, #6978d1, #945dd6);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #13adc7;
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #13adc7;
    img {
      transform: scale(1.2);
    }
  }
`;

export default function Header() {
  return (
    <>
      <div className="arcade-bg" />
      <div className="scanline" />
      <HeaderWrapper>
        <NavContainer>
          <Title>Juan Barrero</Title>
          <Nav>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <NavLink href="#technologies">Languages</NavLink>
            <SocialLinks>
              <SocialLink
                href="https://github.com/marvel987dc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/juan-barrero-66b407290"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </SocialLink>
            </SocialLinks>
          </Nav>
        </NavContainer>
      </HeaderWrapper>
    </>
  );
}
