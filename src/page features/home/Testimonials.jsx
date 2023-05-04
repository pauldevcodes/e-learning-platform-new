import { styles } from "../../utils/styles";

import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa"

import testimonyOne from "../../images/testimonialOne.jpg"

const Testimonials = () => {
    const testimonies = [
        {
            id: 1,
            img: testimonyOne,
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, neque laudantium similique provident non sequi quo praesentium earum illo! Velit.",
            h4: "John Doe"
        },
        {
            id: 2,
            img: testimonyOne,
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, neque laudantium similique provident non sequi quo praesentium earum illo! Velit.",
            h4: "Paul Doe"
        },
        {
            id: 3,
            img: testimonyOne,
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, neque laudantium similique provident non sequi quo praesentium earum illo! Velit.",
            h4: "Alex Doe"
        },
        {
            id: 4,
            img: testimonyOne,
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, neque laudantium similique provident non sequi quo praesentium earum illo! Velit.",
            h4: "Sarah Doe"
        }
    ]

    return (
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <div>
                <h1 className={`${styles.sectionHeading} mb-10 lg:mb-16`}>
                    What our Students say about our academy
                </h1>

                <div className=" grid grid-cols-1 items-center gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 xl:grid-cols-4">
                    {testimonies.map(({ id, img, p, h4 }) => {
                        return (
                            <div key={id} className=" flex flex-col items-center gap-y-5 boxShadow p-5 rounded-md">
                                <img src={img} alt="" className=" w-32 h-32 rounded-full" />
                                <div className=" flex flex-col items-center gap-y-3">
                                    <FaQuoteLeft size={30} />
                                    <p className=" text-sm opacity-75 text-center">
                                        {p}
                                    </p>
                                    <FaQuoteRight size={30} />
                                    <h4 className=" text-lg font-medium">
                                        {h4}
                                    </h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;