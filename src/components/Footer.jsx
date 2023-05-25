// assest
import logo from '../images/logo.png'
import email from '../images/icon-email.svg'
import phone from '../images/icon-phone.svg'

// react router dom
import { Link } from 'react-router-dom';
import { styles } from '../utils/styles'

// library
import { FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Footer = () => {
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
        <footer className={`${styles.paddingX} py-1 flex flex-col gap-y-8`}>
            <img src={logo} alt="logo" className=' w-14' />
            <div className=' flex flex-col gap-y-8 lg:flex-row lg:items-start lg:justify-between'>
                <div className=' flex flex-col items-start gap-y-4'>
                    <div className=' flex flex-row items-center gap-x-4'>
                        <img src={phone} alt="phone" className='' />
                        <p className=' font-["Open Sans"] text-base text-gray-800'>
                            Phone: +1-543-123-4567
                        </p>
                    </div>
                    <div className=' flex flex-row items-center gap-x-4'>
                        <img src={email} alt="phone" className='' />
                        <p className=' font-["Open Sans"] text-base text-gray-800'>
                            example@fylo.com
                        </p>
                    </div>
                    <div className=" flex flex-row items-center gap-x-4">
                        {socials.map(({ id, socialMedia }) => {
                            return (
                                <Link
                                    key={id}
                                    className=" text-2xl"
                                >
                                    {socialMedia}
                                </Link>
                            )
                        })}
                    </div>
                </div>

                <ul className=' flex flex-col items-start gap-y-4'>
                    <li className=' text-base leading-[22px] text-gray-800 font-bold'>
                        Explore
                    </li>
                    <li className=' text-base leading-[22px] text-gray-800'>
                        <Link to="register" className=''>Register</Link>
                    </li>
                    <li className=' text-base leading-[22px] text-gray-800'>
                        <Link className=''>Consultation</Link>
                    </li>
                    <li className=' text-base leading-[22px] text-gray-800'>
                        <Link className=''>Blog</Link>
                    </li>
                </ul>

                <ul className=' flex flex-col items-start gap-y-4'>
                    <li className=' text-base leading-[22px] text-gray-800 font-bold'>
                        About
                    </li>
                    <li className=' text-base leading-[22px] text-gray-800'>
                        <Link to="about" className=''>Our Story</Link>
                    </li>
                    <li className=' text-base leading-[22px] text-gray-800'>
                        <Link className=''>Instructors</Link>
                    </li>
                </ul>

                <ul className=' flex flex-col items-start gap-y-4'>
                    <li className=' text-base leading-[22px] text-gray-800 font-bold'>
                        Help
                    </li>
                    <li className=' text-base leading-[22px] text-gray-800'>
                        <Link className=''>Contact Us</Link>
                    </li>
                    <li className=' text-base leading-[22px] text-gray-800'>
                        <Link to="faqs" className=''>FAQs</Link>
                    </li>
                    <li className=' text-base leading-[22px] text-gray-800'>
                        <Link className=''>Privacy Policy</Link>
                    </li>
                </ul>
            </div>
            <p className=' text-center'>
                Copyright &copy; Kingship Technologies 2023
            </p>
        </footer>
    );
}

export default Footer;