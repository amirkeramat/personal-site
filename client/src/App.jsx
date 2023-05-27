import "./App.css";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Topbar from "./components/Topbar/Topbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Pricing from "./components/Pricing/pricing";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <Topbar />
      <Intro />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
