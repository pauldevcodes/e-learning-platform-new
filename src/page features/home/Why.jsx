import { styles } from "../../utils/styles";

// assests
import fastTrack from '../../images/fast-track.png'
import industryExpert from '../../images/industry-expert.png'
import jobInterview from '../../images/job-interview.png'

const Why = () => {

    return (
        <div className={`${styles.paddingX} pt-7 md:pt-20 flex flex-col items-center gap-y-7 bg-orange-50`}>
            <div>
                <h1
                    className={`${styles.sectionHeading} bg-gradient-to-r from-orange-500 to-black bg-auto bg-clip-text text-transparent`}
                >
                    Why Kingship Technologies
                </h1>
            </div>
            <div className=" flex flex-col items-center gap-y-8">

                <div className=" flex flex-col-reverse gap-y-8 max-w-screen-lg mx-auto md:flex-row md:items-center md:gap-x-10">
                    <div className=" md:basis-1/2">
                        <img src={fastTrack} alt="Fast Track" />
                    </div>
                    <div className=" flex flex-col gap-y-2 md:basis-1/2">
                        <h4 className=" text-orange-400 uppercase text-sm">
                            Fast-track your learning
                        </h4>
                        <h2 className=" text-2xl font-medium">
                            Clear and Concise
                        </h2>
                        <p className=" text-lg text-slate-700">
                            Our academy is committed to providing clear and concise information to our students. We believe that students should be able to access the information they need quickly and easily, without having to wade through unnecessary jargon or fluff.
                        </p>
                    </div>
                </div>
                <div className=" flex flex-col-reverse gap-y-8 max-w-screen-lg mx-auto md:flex-row md:items-center md:gap-x-10">
                    <div className=" md:basis-1/2">
                        <img src={jobInterview} alt="Fast Track" />
                    </div>
                    <div className=" flex flex-col gap-y-2 md:basis-1/2">
                        <h4 className=" text-orange-400 uppercase text-sm">
                            Boost your career options
                        </h4>
                        <h2 className=" text-2xl font-medium">
                            Navigating the Job Search Process
                        </h2>
                        <p className=" text-lg text-slate-700">
                            We provide students with the tools and resources they need to succeed in the job search process. We offer career counseling, resume writing assistance, and interview preparation. Our goal is to help students find the right job for them and achieve their career goals.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Why;