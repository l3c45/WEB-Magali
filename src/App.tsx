import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import NavBar from "./components/sections/NavBar";
import Services from "./components/sections/Services";

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <main className="container">
        <Hero></Hero>
        
        <About></About>
        <Services></Services>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
