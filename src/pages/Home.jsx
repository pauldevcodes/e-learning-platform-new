
import { Link } from "react-router-dom";

// library
import { motion, AnimatePresence } from "framer-motion";
import { FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa'

// utilities
import { styles } from "../utils/styles";

// features
import CourseHighlight from "../page features/home/CourseHighlight";
import Benefits from "../page features/home/Benefits";
import Testimonials from "../page features/home/Testimonials";
import CyberSecurity from "../page features/home/CyberSecurity";
import Kingship from "../page features/home/Kingship";

const Home = () => {

    const socials = [
        {
            id: 1,
            socialMedia: <FaYoutube />
        },
        {
            id: 2,
            socialMedia: <FaFacebookF />
        },
        {
            id: 3,
            socialMedia: <FaTwitter />
        }
    ]

    return (
        <>
            <div className=" min-h-screen bg-hero-mobile bg-no-repeat bg-cover relative pt-48 pb-10 md:pt-40 md:bg-hero-tablet lg:bg-hero-desktop lg:pt-60">
                <div className=" overlay"></div>
                <AnimatePresence>
                    <motion.div
                        initial={{ y: -400, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { duration: 4, ease: "easeIn", delay: 1 } }}
                        className={` ${styles.paddingX} h-full flex flex-col justify-center lg:max-w-screen-lg lg:mx-auto`}
                    >
                        <div className=" flex flex-col items-center gap-y-10 z-10 xl:gap-y-8">
                            <h1 className={` text-3xl text-center font-semibold text-white md:text-4xl lg:text-5xl xl:text-6xl`}>
                                Launch into the <br className=" md:hidden" /> <span className=" text-blue-500 font-bold">cyber field</span>
                            </h1>
                            <p className={`${styles.paragraphFont} opacity-70 text-center text-white md:text-lg`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat veniam aspernatur asperiores suscipit error
                            </p>
                            <p className={`${styles.paragraphFont} opacity-70 text-center text-white md:text-lg`}>
                                On-Demand Courses | Online In-Person Classes
                            </p>
                            <div className=" flex flex-col items-center gap-y-5 w-full md:flex-row md:justify-center md:gap-x-5">
                                <Link
                                    to="sign-up"
                                    className=" bg-white px-4 py-3 rounded text-center w-60 md:text-xl hover:opacity-80"
                                >
                                    Register
                                </Link>
                                <Link
                                    to="courses"
                                    className=' text-white bg-blue-500 border-2 border-blue-500 rounded px-4 py-3 text-center w-60 md:text-xl hover:opacity-80'
                                >
                                    Live courses
                                </Link>
                            </div>
                            <div className=" flex flex-row items-center gap-x-4">
                                {socials.map(({ id, socialMedia }) => {
                                    return (
                                        <Link
                                            key={id}
                                            className=" text-2xl text-current bg-white rounded-full p-3"
                                        >
                                            {socialMedia}
                                        </Link>
                                    )
                                })}
                            </div>
                            <p className=" text-white font-medium">+1 (433) 888-6978</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <CyberSecurity />
            <CourseHighlight />
            <Benefits />
            <Kingship />
            {/* <Testimonials /> */}
        </>
    );
}

export default Home;