import { Link } from 'react-router-dom';

// assests
import about from '../../images/AboutCompany.jpg'

// utils
import { styles } from '../../utils/styles';

// library
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const About = () => {
    return (
        <div className={`${styles.paddingX} my-7 md:my-14`}>
            <div className=' flex flex-col items-center'>
                <h1
                    className={`${styles.sectionHeading} mb-10 bg-gradient-to-r from-orange-500 to-black bg-auto bg-clip-text text-transparent lg:mb-16`}
                >
                    About Us
                </h1>

                <div className=' flex flex-col items-center gap-y-8 lg:flex-row lg:items-stretch lg:gap-x-10'>
                    <div className=' basis-1/2'>
                        <img src={about} alt="" className='' />
                    </div>
                    <div className=' basis-1/2 flex flex-col gap-y-10'>
                        <p className=' text-center lg:text-start'>
                            Welcome to Kingship Technologies, your premier destination for cutting-edge cybersecurity training. Our mission is to empower individuals and organizations with the skills and knowledge required to safeguard their digital assets in an increasingly connected world.
                            <br /><br />
                            At Kingship Technologies, we understand the continuously evolving nature of cybersecurity threats and the critical need for well-trained professionals to protect against them. That's why we've developed a comprehensive training program designed to equip you with the latest tools, techniques, and best practices in the field of cybersecurity.
                        </p>
                        <br />
                        <Link
                            // to="about"
                            className=" bg-orange-500 px-5 py-1 rounded-md w-fit text-white flex items-center gap-x-2 font-medium duration-300 ease-in-out hover:bg-black lg:text-lg"
                        >
                            Learn More
                            <span>
                                <ArrowRightIcon width={15} />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;