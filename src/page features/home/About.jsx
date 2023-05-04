import about from '../../images/AboutCompany.jpg'
import { styles } from '../../utils/styles';

const About = () => {
    return (
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <div className=' flex flex-col items-center'>
                <h1 className={`${styles.sectionHeading} mb-10 lg:mb-16`}>
                    About Us
                </h1>

                <div className=' flex flex-col items-center gap-y-8 lg:flex-row lg:items-stretch lg:gap-x-10'>
                    <div className=' basis-1/2'>
                        <img src={about} alt="" className='' />
                    </div>
                    <p className=' text-center basis-1/2 lg:text-start'>
                        Welcome to Kingship Technologies, your premier destination for cutting-edge cybersecurity training. Our mission is to empower individuals and organizations with the skills and knowledge required to safeguard their digital assets in an increasingly connected world.
                        <br />
                        At Kingship Technologies, we understand the continuously evolving nature of cybersecurity threats and the critical need for well-trained professionals to protect against them. That's why we've developed a comprehensive training program designed to equip you with the latest tools, techniques, and best practices in the field of cybersecurity.
                        <br />
                        Our team of experienced trainers boasts a diverse range of expertise in various aspects of cybersecurity, including Cybersecurity engineering, data privacy, risk management, and incident response. With years of combined experience, our instructors have honed their skills in both the public and private sectors, serving as security consultants, analysts and engineers. This wealth of practical experience allows us to provide real-world insights and deliver training that is both engaging and relevant.
                        <br />
                        At Kingship Technologies, we pride ourselves on offering a dynamic learning experience tailored to suit the needs of each individual participant. Our courses cater to a wide range of skill levels, from beginners looking to break into the field, to professionals seeking mentorship to get to the next level. We combine theoretical knowledge with hands-on training, ensuring that our students are not only well-versed in the principles of cybersecurity but also equipped to apply them in real-life scenarios.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;