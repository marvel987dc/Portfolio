import React from "react";
import styled from "styled-components";
import "./NavBar.css";

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 50px 0;
  width: 100%;
  background-color: #0f1624;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
  color: white;

`;

const Subtitle = styled.p`
  font-size: 1.2em;
`;

const Nav = styled.nav`
  margin-top: 20px;
  
`;

const Image = styled.img`
margin-left: 30px;

`;

const NavLink = styled.a`
  margin: 0 15px;
  text-decoration: none;
  color: white;
  font-size: 1em;
  transition: color 0.3s;

  &:hover {
    color: #61dafb;
  }
`;

const NavLink2 = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1em;
  transition: color 0.3s;

  &:hover {
    color: #61dafb;
  }
`;

export default function Header() {
  return <HeaderWrapper id="Nav">
    <Title className="name">Juan Barrero</Title>
    <Subtitle>AI Software Engineering - Student - Centennial College</Subtitle>
    <Nav>
        <NavLink href="#projects">Proyects</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <NavLink href="#technologies">Languages</NavLink>
        <NavLink2 href="https://github.com/leleo-arch">
        <Image src="./src/assets/Pics/github.png"  alt="git"/>
        </NavLink2>
        <NavLink2  href="https://www.linkedin.com/in/leonardo-soares-1842b32b0/" >
        <Image  src="./src/assets/Pics/Linkedin.png"  alt="linkedin"/>
        </NavLink2>
    </Nav>
  </HeaderWrapper>;
};
