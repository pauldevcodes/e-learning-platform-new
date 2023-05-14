// react router dom imports
import { Link } from 'react-router-dom';

// assests
import logo from '../images/logo.png'


import { styles } from '../utils/styles';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`${styles.paddingX} bg-slate-200 py-7 flex flex-col items-center gap-y-8`}>
            <div className=' flex flex-col items-center gap-y-8 md:w-full md:flex-row md:items-start md:justify-between lg:items-center'>
                <Link className=''>
                    <img src={logo} alt="logo" className=' w-14' />
                </Link>

                <nav className=' flex flex-col items-center gap-y-5 md:items-start lg:flex-row lg:gap-x-6'>
                    <Link
                        className=" hover:border-b-2 hover:border-b-orange-500"
                    >
                        Home
                    </Link>

                    <Link
                        to="about"
                        className=" hover:border-b-2 hover:border-b-orange-500"
                    >
                        About
                    </Link>

                    <Link
                        to="cybersecurity"
                        className=" hover:border-b-2 hover:border-b-orange-500"
                    >
                        Cyber Security
                    </Link>

                    <Link
                        to="security-training"
                        className=" hover:border-b-2 hover:border-b-orange-500"
                    >
                        Security training
                    </Link>

                    <Link
                        to="mentorship"
                        className=" hover:border-b-2 hover:border-b-orange-500"
                    >
                        Mentorship
                    </Link>

                    <Link
                        to="policies"
                        className=" hover:border-b-2 hover:border-b-orange-500"
                    >
                        Terms & Policy
                    </Link>
                </nav>
            </div>

            <div className='flex flex-col items-center gap-y-4 md:flex-row md:gap-x-3'>
                <p>
                    copyright &copy; {currentYear}
                </p>

                <p>
                    All Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;