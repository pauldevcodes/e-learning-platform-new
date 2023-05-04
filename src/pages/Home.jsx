
// features
import CourseHighlight from "../page features/home/CourseHighlight";
import Benefits from "../page features/home/Benefits";
import Testimonials from "../page features/home/Testimonials";
import CyberSecurity from "../page features/home/CyberSecurity";
import Kingship from "../page features/home/Kingship";
import Banner from "../page features/home/Banner";
import Mentorship from "../page features/home/Mentorship";

const Home = () => {

    return (
        <>
            <Banner />
            <CyberSecurity />
            <CourseHighlight />
            <Mentorship />
            <Benefits />
            <Kingship />
            <Testimonials />
        </>
    );
}

export default Home;