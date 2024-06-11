import ButtonGraidient from "./assets/svg/ButtonGradient";
import Contact from "./components/Contact";
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
      <Contact />
    </div>
    <ButtonGraidient />
    </>
  );
};

export default App;
