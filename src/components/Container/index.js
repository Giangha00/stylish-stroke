import Navbar from "../NavBar";
import AboutUs from "./AboutUs";
import Calligraphy from "./Calligraphy";
import Contact from "./Contact";
import Gallery from "./Gallery";
import LearningResources from "./LearningResoueces";
import Discover from "./Discover";

const Container = () => {
  return (
    <div className="container">
      <Navbar />
      <Discover />
      <Calligraphy />
      <LearningResources />
      <Gallery />
      <Contact />
      <AboutUs />
    </div>
  );
};

export default Container;
