
// additional styles
import { styles } from "../../utils/styles";

import course1 from "../../images/certified cyber.jpg"
import course2 from "../../images/security training.jpg"
import course3 from "../../images/mentorship.jpg"

const CourseHighlight = () => {

    const courses = [
        {
            id: 1,
            img: course1,
            title: "Certified in Cybersecurity",
            description: "5 Weeks of Basic fundamentals of cyber security"
        },
        {
            id: 2,
            img: course2,
            title: "Security Plus training",
            description: "11 weeks of training including preperation for the certification and hands on training."
        },
        {
            id: 3,
            img: course3,
            title: "Mentorship",
            description: "5 Week mentorship in Career Development, Resume deepdives. We help guide you in your professional career especially if you need next steps before or after getting certified."
        },
    ]
    return (
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <div className=" flex flex-col gap-y-8 items-center">
                <h1 className={`${styles.sectionHeading} `}>
                    Live Virtual Courses
                </h1>

                <div className=" flex flex-col gap-y-10 items-center">
                    {courses.map(({ id, img, title, description }) => {
                        return (
                            <div key={id} className=" flex flex-col gap-y-5 items-center md:flex-row-reverse lg:max-w-screen-md lg:gap-x-10">
                                <div className=" basis-1/2">
                                    <img src={img} alt="course" className=" rounded-md" />
                                </div>
                                <div className=" flex flex-col items-center gap-y-4 text-center basis-1/2 md:items-start md:text-start">
                                    <h3 className=" font-bold uppercase text-lg lg:text-2xl xl:text-3xl">{title}</h3>
                                    <p className=" text-sm opacity-75 font-['Poppins'] lg:text-lg">{description}</p>
                                    <button
                                        className=" bg-teal-500 px-5 py-1 rounded-md font-['Poppins'] text-white lg:text-lg"
                                    >
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default CourseHighlight;