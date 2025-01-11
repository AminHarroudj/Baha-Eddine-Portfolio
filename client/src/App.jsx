import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Works from "./components/Works";

function App() {
  return (
    <>
      <div className="text-white bg-[#000814]">
        <Navbar />
        <Home />
        <About />
        <Works />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
