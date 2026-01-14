import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import NavBar from "./Components/NavBar/NavBar";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import ProjectGallery from "./Components/Projects/Projects";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <CustomCursor />
      <NavBar />
      <main>
        <Intro />
        <Skills />
        <ProjectGallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
