import Hero from "../page features/about/Hero";
import Collaboration from "../page features/about/Collaboration";
import SamePage from "../page features/about/SamePage";
import Streamlined from "../page features/about/Streamlined";
import Features from "../page features/about/Features";
import Title from "../page features/about/mobile-view/Title";

const About = () => {
  return (
    <div>
      <div className="xl:block hidden">
        <Hero />
        <Collaboration />
        <SamePage />
        <Streamlined />
        <Features />
      </div>

      <div className="xl:hidden block">
        <Title />
      </div>
    </div>
  );
};

export default About;