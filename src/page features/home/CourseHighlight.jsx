
// additional styles
import { styles } from "../../utils/styles";

import { ArrowRightIcon } from "@heroicons/react/24/solid"

import course1 from "../../images/certified cyber.png"
import course2 from "../../images/security training.png"

const CourseHighlight = () => {

    const courses = [
        {
            id: 1,
            img: course1,
            title: "Certified in Cybersecurity",
            description: "5 Weeks of Basic fundamentals of cyber security",
            descriptionTwo: "Introduction to Cyber Security",
            descriptionThree: "Cyber Security Fundamentals",
            descriptionFour: "Threat Landscape"
        },
        {
            id: 2,
            img: course2,
            title: "Security Plus training",
            description: "11 weeks of training including preperation for the certification and hands on training.",
            descriptionTwo: "Introduction to Cyber Security and Security+",
            descriptionThree: "Security Threats and Vulnerabilities",
            descriptionFour: "Identity and Access Management"
        }
    ]
    return (
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <div className=" flex flex-col gap-y-5 items-center">
                <h1 className={`${styles.sectionHeading} `}>
                    Live Courses
                </h1>

                <div className=" flex flex-col gap-y-10 items-center md:flex-row md:items-stretch md:gap-x-40 lg:max-w-screen-md lg:mx-auto">
                    {courses.map(({ ...courses }) => {
                        return (
                            <div key={courses.id} className=" flex flex-col gap-y-5 items-center md:items-start md:basis-1/2">
                                <div className="">
                                    <img src={courses.img} alt="course" className=" rounded-md" />
                                </div>
                                <div className=" flex flex-col items-center gap-y-4 text-center md:items-start md:text-start">
                                    <h3 className=" font-bold uppercase text-lg lg:text-2xl">{courses.title}</h3>
                                    <p className=" text-sm opacity-75 lg:text-lg">
                                        {courses.description}
                                    </p>
                                    <p className=" text-sm opacity-75 lg:text-lg">
                                        {courses.descriptionTwo}
                                    </p>
                                    <p className=" text-sm opacity-75 lg:text-lg">
                                        {courses.descriptionThree}
                                    </p>
                                    <p className=" text-sm opacity-75 lg:text-lg">
                                        {courses.descriptionFour}
                                    </p>
                                    <button
                                        className=" bg-teal-500 px-5 py-1 rounded-md text-white flex items-center gap-x-2 lg:text-lg"
                                    >
                                        more
                                        <span>
                                            <ArrowRightIcon width={20} />
                                        </span>
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