// assest
import logo from '../images/logo.png'
import email from '../images/icon-email.svg'
import phone from '../images/icon-phone.svg'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'

// react router dom
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" bg-gray-800 px-[39px] pt-[65px] pb-[42px] flex flex-col gap-y-8 xl:px-20 xl:pt-[92px] xl:pb-[86px]">
            <img src={logo} alt="logo" className=' w-14' />
            <div className=' flex flex-col gap-y-8 xl:flex-row xl:items-start xl:justify-between'>
                <div className=' flex flex-col items-start gap-y-4'>
                    <div className=' flex flex-row items-center gap-x-4'>
                        <img src={phone} alt="phone" className=' w-6 h-6' />
                        <p className=' font-["Open Sans"] text-base text-white'>
                            Phone: +1-543-123-4567
                        </p>
                    </div>
                    <div className=' flex flex-row items-center gap-x-4'>
                        <img src={email} alt="phone" className=' w-6 h-6' />
                        <p className=' font-["Open Sans"] text-base text-white'>
                            example@fylo.com
                        </p>
                    </div>
                </div>

                <ul className=' flex flex-col items-start gap-y-4'>
                    <li className=' text-base leading-[22px] text-white font-bold'>
                        Explore
                    </li>
                    <li className=' text-base leading-[22px] text-white'>
                        <Link to="register" className=''>Register</Link>
                    </li>
                    <li className=' text-base leading-[22px] text-white'>
                        <Link to="" className=''>Consultation</Link>
                    </li>
                    <li className=' text-base leading-[22px] text-white'>
                        <Link to="" className=''>Blog</Link>
                    </li>
                </ul>

                <ul className=' flex flex-col items-start gap-y-4'>
                    <li className=' text-base leading-[22px] text-white font-bold'>
                        About
                    </li>
                    <li className=' text-base leading-[22px] text-white'>
                        <Link to="about" className=''>Our Story</Link>
                    </li>
                    <li className=' text-base leading-[22px] text-white'>
                        <Link to="instructors" className=''>Instructors</Link>
                    </li>
                </ul>

                <ul className=' flex flex-col items-start gap-y-4'>
                    <li className=' text-base leading-[22px] text-white font-bold'>
                        Help
                    </li>
                    <li className=' text-base leading-[22px] text-white'>
                        <Link to="contact" className=''>Contact Us</Link>
                    </li>
                    <li className=' text-base leading-[22px] text-white'>
                        <Link to="faqs" className=''>FAQs</Link>
                    </li>
                    <li className=' text-base leading-[22px] text-white'>
                        <Link to="privacy" className=''>Privacy Policy</Link>
                    </li>
                </ul>

                <div className=' flex flex-row gap-x-[10px] justify-center'>
                    {/* <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="instagram" /> */}
                </div>
            </div>
            <p className=' text-white text-center'>

            </p>
        </footer>
    );
}

export default Footer;