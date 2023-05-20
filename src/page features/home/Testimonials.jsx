// utils
import { styles } from "../../utils/styles";

// library
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa"

// assests
import testimonyOne from "../../images/testimonialOne.jpg"
import testimonyTwo from "../../images/testimonialTwo.jpg"
import testimonyThree from "../../images/testimonialThree.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Testimonials = () => {

    const testimonies = [
        {
            id: 1,
            img: testimonyOne,
            p: "I want to give a huge shoutout to kingship technology! Their class helped me think like a true cyber security professional. I don’t know where I would be without their knowledge and their support. I’m glad I’ve found them truly life changing!",
            h4: "Ditter Mills"
        },
        {
            id: 2,
            img: testimonyTwo,
            p: "My time attending the course was well worth it. The environment was welcoming. It was a fresh breeding ground for learning and participation. I wasn’t sure what to think initially signing up for the class, but now that that course has concluded, I can’t speak enough how much of a difference it has made for me in my professional career.",
            h4: "Steven Joy"
        },
        {
            id: 3,
            img: testimonyThree,
            p: "This class has truly helped me grow and expand my knowledge of the field. I came here not knowing much about cyber security but Dami and Tiroye did such a great job in training me and equipped me with all the information and tools i needed to start my cybersecurity career.",
            h4: "Val Alabre"
        },
    ]

    return (
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <div>
                <h1
                    className={`${styles.sectionHeading} mb-10 text-center bg-gradient-to-r from-orange-500 to-black bg-auto bg-clip-text text-transparent lg:mb-16`}
                >
                    Testimonials
                </h1>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[Autoplay]}
                    className=" grid grid-cols-1 items-center gap-y-5 md:grid-cols-2 md:items-stretch md:gap-x-5 lg:grid-cols-3"
                >
                    {testimonies.map(({ id, img, p, h4 }) => {
                        return (
                            <SwiperSlide>
                                <div key={id} className=" flex flex-col items-center gap-y-5 max-w-screen-md mx-auto boxShadow p-5 rounded-md ">
                                    <div className=" w-[100px] h-[100px] overflow-hidden rounded-[50%]">
                                        <img src={img} alt="" className=" w-full h-full object-cover" />
                                    </div>
                                    <h4 className=" text-lg font-medium">
                                        {h4}
                                    </h4>
                                    <div className=" flex flex-col items-center gap-y-3">
                                        <FaQuoteLeft size={30} color="gray" />
                                        <p className=" text-sm opacity-75 text-center">
                                            {p}
                                        </p>
                                        <FaQuoteRight size={30} color="gray" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;