import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import NavBar from "./components/sections/NavBar";
import Services from "./components/sections/Services";
import useNav from "./hooks/useNav";

const App = () => {
  const [showNav] = useNav();

  return (
    <>
      {showNav ? <NavBar></NavBar> : null}

      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default App;
