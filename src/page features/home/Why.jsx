import { useRef } from "react";

// library
import { useInView } from "framer-motion";

import { styles } from "../../utils/styles";

// assests
import fastTrack from '../../images/fast-track.png'
import industryExpert from '../../images/industry-expert.png'
import jobInterview from '../../images/job-interview.png'

const Why = () => {

    const ref = useRef(null)
    const isInView = useInView(ref);

    return (
        <div className={`${styles.paddingX}  py-7 md:py-14 flex flex-col items-center gap-y-10 md:gap-y-20`}>
            <div>
                <h1
                    ref={ref}
                    style={{
                        // transform: isInView ? "none" : "translateY(400px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 3s 0.5s"
                    }}
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
                        <h2 className=" text-2xl font-semibold">
                            Right to the Point, No Fluff
                        </h2>
                        <p className=" text-lg text-slate-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet natus aspernatur fugit qui, tempora ipsam, sed impedit quis ut quaerat quod repellat facilis, placeat libero corrupti illum Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, saepe.
                        </p>
                    </div>
                </div>
                <div className=" flex flex-col-reverse gap-y-8 max-w-screen-lg mx-auto md:flex-row-reverse md:items-center md:gap-x-10">
                    <div className=" md:basis-1/2">
                        <img src={industryExpert} alt="Fast Track" />
                    </div>
                    <div className=" flex flex-col gap-y-2 md:basis-1/2">
                        <h4 className=" text-orange-400 uppercase text-sm">
                            Master a professional cyber security mindset
                        </h4>
                        <h2 className=" text-2xl font-semibold">
                            Learn from an Industry Expert
                        </h2>
                        <p className=" text-lg text-slate-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet natus aspernatur fugit qui, tempora ipsam, sed impedit quis ut quaerat quod repellat facilis, placeat libero corrupti illum Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, saepe.
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
                        <h2 className=" text-2xl font-semibold">
                            Real-World Preparation for Jobs and Interviews
                        </h2>
                        <p className=" text-lg text-slate-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet natus aspernatur fugit qui, tempora ipsam, sed impedit quis ut quaerat quod repellat facilis, placeat libero corrupti illum Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, saepe.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Why;