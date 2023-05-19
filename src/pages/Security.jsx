import Banner from "../page features/security plus training/Banner";
import CourseDetails from "../page features/security plus training/CourseDetails";
import Eligibility from "../page features/security plus training/Eligibility";
import Outline from "../page features/security plus training/Outline";
import Topics from "../page features/security plus training/Topics";

const Security = () => {
    return (
        <div>
            <Banner />

            <div className="py-20">
                <CourseDetails />
                <Topics />
                <Outline />
                <Eligibility />
            </div>
        </div>
    );
};

export default Security;