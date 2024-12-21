import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import NavBar from "./Components/NavBar/NavBar";
import Contact from "./Components/Contact/Contact"
import Skills from "./Components/Skills/Skills";
import ProjectGallery from "./Components/Projects/Projects";
import "./App.css";

function App() {
  return (
    <>
      <NavBar/>
      <Intro />
      <Skills/>
      <ProjectGallery/>
      <About />
      <Contact />
    </>
  );
}

export default App;
