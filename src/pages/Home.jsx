
// features
import CourseHighlight from "../page features/home/CourseHighlight";
import Benefits from "../page features/home/Benefits";
import Testimonials from "../page features/home/Testimonials";
import Kingship from "../page features/home/Kingship";
import Banner from "../page features/home/Banner";
import Mentorship from "../page features/home/Mentorship";
import About from "../page features/home/About";
import Contact from "../page features/home/Contact";
import Apply from "../page features/home/Apply";
import Why from "../page features/home/Why";

const Home = () => {

    return (
        <>
            <Banner />
            <Why />
            <CourseHighlight />
            <Mentorship />
            <Benefits />
            <Kingship />
            <Testimonials />
            <Apply />
            <About />
            <Contact />
        </>
    );
}

export default Home;