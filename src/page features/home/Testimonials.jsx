// utils
import { styles } from "../../utils/styles";

// library
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa"

// assests
import testimonyOne from "../../images/testimonialOne.jpg"
import testimonyTwo from "../../images/testimonialTwo.jpg"
import testimonyThree from "../../images/testimonialThree.jpg"
import testimonyFour from "../../images/testimonialFour.jpg"
import testimonyFive from "../../images/testimonialFive.jpg"
import testiomonySix from "../../images/testimonialSix.jpg"

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
        {
            id: 4,
            img: testimonyFour,
            p: "I've always been interested in cybersecurity, but I struggled to find the right resources to learn and develop my skills. That's when I discovered this e-learning platform. It's been a game-changer for me! The courses are well-structured, engaging, and cover a wide range of topics. The instructors are knowledgeable and provide clear explanations. Thanks to this platform, I've been able to enhance my cybersecurity skills and even land a job in the field. Highly recommended!",
            h4: "Sarah Thompson"
        },
        {
            id: 5,
            img: testimonyFive,
            p: "As a small business owner, I was concerned about the security of my company's data and systems. I decided to invest in cyber security training for my team, and I'm so glad I found this e-learning platform. The courses were tailored to our needs and provided practical knowledge that we could apply immediately. The platform's user-friendly interface made it easy for everyone to navigate and access the material. The support team was also fantastic, promptly addressing any questions or concerns we had. Our team now feels much more confident in handling potential cyber threats. This platform is a valuable resource for any business seeking to strengthen its security measures.",
            h4: "John Doe"
        },
        {
            id: 6,
            img: testiomonySix,
            p: "I've always been fascinated by cyber security but found it difficult to find comprehensive and up-to-date resources. That changed when I discovered this e-learning platform. The quality of the content and the expertise of the instructors exceeded my expectations. The platform covers a wide range of topics, from network security to ethical hacking, and the interactive exercises and real-world scenarios helped me apply my knowledge effectively. The regular updates and addition of new courses ensure that I stay on top of the latest trends and techniques in the field. This platform is a must-have for anyone serious about a career in cyber security.",
            h4: "Jane Smith"
        }
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
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className=" grid grid-cols-1 items-center gap-y-5 md:grid-cols-2 md:items-stretch md:gap-x-5 lg:grid-cols-3"
                >
                    {testimonies.map(({ id, img, p, h4 }) => {
                        return (
                            <SwiperSlide key={id} className=" pb-10">
                                <div className=" flex flex-col items-center gap-y-5 max-w-screen-md mx-auto boxShadow p-5 rounded-md ">
                                    <div className=" w-[100px] h-[100px] overflow-hidden rounded-[50%]">
                                        <img src={img} alt="" className=" w-full h-full object-cover" />
                                    </div>
                                    <h4 className=" text-lg font-medium">
                                        {h4}
                                    </h4>
                                    <div className=" flex flex-col items-center gap-y-3">
                                        <FaQuoteLeft size={30} color="gray" />
                                        <p className=" text-sm opacity-75 text-center line-clamp-3">
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