import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  // Experience,
  Feedbacks,
  Hero,
  // Navbar,
  Tech,
  // Animations,
  Works,
  StarsCanvas,
} from "./components";
import HorizontalScroll from "./components/HorizontailScroll";
import SocialLinks from "./components/SocialLinks";
import HalalBusiness from "./components/HalalBusiness";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there is a hash in the URL
    if (location.hash) {
      // Get the ID from the hash (remove the '#' character)
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        // Scroll to the element smoothly
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]); // Run this effect whenever the location changes

  return (
    <div className="relative z-0 bg-primary">
      {/* SocialLinks component is fixed and remains visible throughout the website */}
      <SocialLinks />

      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        {/* <Navbar /> */}
        <Hero />
      </div>
      <HorizontalScroll />
      <About />
      {/* <Experience /> */}
      {/* <Tech /> */}
      {/* <Animations /> */}
      <Works />
      <HalalBusiness />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
