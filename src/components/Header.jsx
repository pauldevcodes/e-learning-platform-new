// react imports
import { useState } from 'react';

// react router dom imports
import { Link } from 'react-router-dom';

// library
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3BottomRightIcon, XMarkIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

// utilities
import { styles } from '../utils/styles'

// assests
import logo from '../images/logo.png'
import ToggleMenu from './ToggleMenu';

const Header = () => {

    // animation
    const item = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
                // delay: .9
            }
        }
    }

    const links = [
        {
            id: 1,
            url: "/",
            link: 'home'
        },
        {
            id: 2,
            // url: "training",
            link: 'training',
            arrowup: <ChevronUpIcon width={15} />,
            arrowdown: <ChevronDownIcon width={15} />
        },
        {
            id: 3,
            url: "about",
            link: 'about'
        },
    ]

    const [isOpen, setIsOpen] = useState(false)
    const [arrowMenu, setArrowMenu] = useState(false)

    const navToggle = () => {
        setIsOpen(!isOpen)
    }
    const dropDown = () => {
        setArrowMenu(!arrowMenu)
    }

    return (
        <>
            <nav className={`${styles.paddingX} py-1 flex items-center justify-between fixed w-full shadow-lg bg-white z-50`}>
                <Link>
                    <img src={logo} alt="logo" className=' w-14' />
                </Link>

                <div className=' hidden md:flex md:flex-row md:items-center md:gap-x-10'>
                    <ul className=' md:flex md:items-center md:gap-x-8'>
                        <li>
                            <Link
                                to="/"
                                className=' capitalize opacity-75 hover:border-b-2 hover:border-b-orange-500'
                            >
                                Home
                            </Link>
                        </li>
                        <AnimatePresence>
                            <li className=' flex items-center gap-x-1 cursor-pointer' onClick={dropDown}>
                                <span className="capitalize opacity-75">
                                    Training
                                </span>

                                <span>
                                    {arrowMenu ? <ChevronUpIcon width={18} /> : <ChevronDownIcon width={18} />}
                                    {arrowMenu && (
                                        <motion.div
                                            variants={item}
                                            initial={{ y: 80, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: .3 }}
                                            exit={{
                                                opacity: 0,
                                                y: 90,
                                                transition: {
                                                    ease: "easeInOut",
                                                    delay: .5
                                                }
                                            }}
                                            className=" absolute top-24 bg-black p-5 rounded-md flex flex-col gap-y-5"
                                        >
                                            <Link
                                                to="cybersecurity"
                                                className=' text-white hover:border-b-2 hover:border-b-orange-500'
                                            >
                                                Cyber Security
                                            </Link>
                                            <Link
                                                to="security-training"
                                                className=' text-white hover:border-b-2 hover:border-b-orange-500'
                                            >
                                                Security Training
                                            </Link>
                                            <Link
                                                // to="mentorship"
                                                className=' text-white hover:border-b-2 hover:border-b-orange-500'
                                            >
                                                Mentorship
                                            </Link>
                                        </motion.div>
                                    )}
                                </span>
                            </li>
                        </AnimatePresence>
                        <li>
                            <Link
                                to="about"
                                className=' capitalize opacity-75 hover:border-b-2 hover:border-b-orange-500'
                            >
                                About
                            </Link>
                        </li>
                    </ul>

                    <div className='md:flex md:flex-row md:items-center md:gap-x-5'>
                        <Link
                            to="register"
                            className=' border-2 bg-orange-500 border-orange-500 rounded px-4 py-2 text-white md:text-sm hover:bg-black hover:border-black hover:shadow-md'
                        >
                            Register
                        </Link>
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