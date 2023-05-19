import Banner from "../page features/cyber security/Banner";
import CourseDetails from "../page features/cyber security/CourseDetails";
import Topics from "../page features/cyber security/Topics";
import Outline from "../page features/cyber security/Outline";
import Eligibility from "../page features/cyber security/Eligibility";


const CyberSecurity = () => {
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

export default CyberSecurity;