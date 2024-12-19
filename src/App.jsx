import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import "./App.css";

function App() {
  return (
    <>
      <Intro />
      <About />
    </>
  );
}

export default App;
