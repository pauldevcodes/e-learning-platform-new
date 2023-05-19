import instructors from '../../images/team.jpg'
import { styles } from '../../utils/styles';

const Instructors = () => {
    return ( 
        <section className=" grid grid-cols-1 lg:grid-cols-2">
            <img src={instructors} alt="group of instructors" className=' h-full' />
            <div className={`${styles.paddingX} py-7 md:py-14 bg-black flex flex-col gap-y-5 lg:gap-y-10`}>
                <h2 className={`${styles.sectionHeading} text-white`}>
                    Instructors
                </h2>
                <p className=' text-white text-sm lg:text-base'>
                Our experienced instructors are dedicated to helping you succeed in the field of cybersecurity. They teach you essential test-taking techniques and provide real-world scenarios to enhance your understanding of security practices. They'll also guide you through the methodologies used to improve endpoint security, minimizing or negating improper configurations. Our instructors are passionate, motivated, and simplify even the most complex security concepts. Sign up for our course today to learn from the best in the industry.
                </p>
            </div>
        </section>
     );
}
 
export default Instructors;