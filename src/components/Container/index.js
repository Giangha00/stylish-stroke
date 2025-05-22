import Navbar from "../NavBar";
import AboutUs from "./AboutUs";
import Calligraphy from "./Calligraphy";
import Contact from "./Contact";
import Gallery from "./Gallery";
import LearningResources from "./LearningResoueces";

const Container = () => {
  return (
    <div className="container">
      <Navbar />
      <Calligraphy />
      <LearningResources />
      <Gallery />
      <Contact />
      <AboutUs />
    </div>
  );
};

export default Container;
