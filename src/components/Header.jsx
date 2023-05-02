// react imports
import { useState } from 'react';

// react router dom imports
import { Link } from 'react-router-dom';

// library
import { motion } from 'framer-motion';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

// utilities
import { styles } from '../utils/styles'

// assests
import logo from '../images/logo.png'
import ToggleMenu from './ToggleMenu';

const Header = () => {

    const links = [
        {
            id: 1,
            url: "/",
            link: 'home'
        },
        {
            id: 2,
            url: "training",
            link: 'training'
        },
        {
            id: 3,
            url: "about",
            link: 'about'
        },
    ]

    const [isOpen, setIsOpen] = useState(false)

    const navToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className={`${styles.paddingX} py-1 flex items-center justify-between fixed w-full shadow-lg bg-white z-50`}>
                <Link>
                    <img src={logo} alt="logo" className=' w-14' />
                </Link>

                <div className=' hidden md:flex md:flex-row md:items-center md:gap-x-10'>
                    <ul className=' md:flex md:items-center md:gap-x-4'>
                        {links.map(({ id, link, url }) => {
                            return (
                                <li key={id}>
                                    <Link
                                        to={url}
                                        className=' font-["Poppins"] capitalize opacity-75 hover:border-b-2 hover:border-b-teal-500 md:text-sm'
                                    >
                                        {link}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    <div className='md:flex md:flex-row md:items-center md:gap-x-5'>
                        <motion.button
                            whileHover={{ translateX: -15 }}
                            transition={{ ease: "easeInOut", duration: .5 }}
                            className=' border-2 bg-black border-black rounded px-4 py-1 hover:shadow-md'
                        >
                            <Link
                                to="login"
                                className=' text-white md:text-sm'
                            >
                                Register
                            </Link>
                        </motion.button>
                        {/* <motion.button
                            whileHover={{ scale: 1.1 }}
                            transition={{ ease: "easeInOut", duration: .5 }}
                            className=' bg-teal-500 border-2 border-teal-500 rounded px-4 py-1 hover:shadow-md'
                        >
                            <Link
                                to="courses"
                                className=' font-["Poppins"] text-white opacity-90 md:text-sm'
                            >
                                Live courses
                            </Link>
                        </motion.button> */}
                    </div>
                </div>

                <div className=' md:hidden text-slate-500' onClick={navToggle}>
                    {isOpen ? <XMarkIcon width={30} /> : <Bars3BottomRightIcon width={30} />}
                </div>
            </nav>
            <ToggleMenu isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
        </>
    );
}

export default Header;