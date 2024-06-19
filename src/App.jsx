import ButtonGraidient from "./assets/svg/ButtonGradient";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Home />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </div>
    <ButtonGraidient />
    </>
  );
};

export default App;
