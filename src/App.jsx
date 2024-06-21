import About from "./components/About";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
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
      <ContactForm />
      <Footer />
    </div>
    <ButtonGradient />
    </>
  );
};

export default App;
