import { Link } from "react-router-dom";

// utils
import { styles } from "../../utils/styles";

const Mentorship = () => {
    return (
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <div className=" flex flex-col items-center gap-y-5 lg:flex-row lg:gap-x-10">
                <h1 className={`${styles.sectionHeading} text-center lg:text-start lg:basis-1/2`}>
                    Our Mentorship Program
                </h1>

                <div className=" max-w-screen-md mx-auto flex flex-col items-center gap-y-4 lg:basis-1/2 lg:items-start">
                    <p className=" text-sm opacity-75 text-center lg:text-lg lg:text-start">
                        This is a 5 week mentorship program in Career Development.
                        <br /> <br />
                        We help guide you in your professional career especially if you need next steps before or after getting certified
                        <br /> <br />
                        Our instructors will provide you both technical and soft skills, and guidance on developing teamwork, communication, network building
                    </p>

                    <Link
                        to="mentorship"
                        className="bg-teal-500 px-5 py-1 rounded-md text-white"
                    >
                        More
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Mentorship;