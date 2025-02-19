<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  // Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  // Animations,
  Works,
  StarsCanvas,
} from "./components";
import HorizontalScroll from "./components/HorizontailScroll";
import SocialLinks from "./components/SocialLinks";
import HalalBusiness from "./components/HalalBusiness";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      {/* SocialLinks component is fixed and remains visible throughout the website */}
      <SocialLinks />

      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <HorizontalScroll/>
      <About />
      {/* <Experience /> */}
      <Tech />
      {/* <Animations /> */}
      <Works />
      <HalalBusiness />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
=======
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  // Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  // Animations,
  Works,
  StarsCanvas,
} from "./components";
import HorizontalScroll from "./components/HorizontailScroll";
import SocialLinks from "./components/SocialLinks";
import HalalBusiness from "./components/HalalBusiness";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      {/* SocialLinks component is fixed and remains visible throughout the website */}
      <SocialLinks />

      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <HorizontalScroll/>
      <About />
      {/* <Experience /> */}
      <Tech />
      {/* <Animations /> */}
      <Works />
      <HalalBusiness />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
>>>>>>> 982f3be9f052ba6f8bb0a82dc09fb0cb7cc77b0c
