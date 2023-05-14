// react router dom imports
import { Link } from 'react-router-dom';

// assests
import logo from '../images/logo.png'


import { styles } from '../utils/styles';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`${styles.paddingX} bg-slate-200 py-7 flex flex-col items-center gap-y-3`}>
            <Link>
                <img src={logo} alt="logo" className=' w-14' />
            </Link>

            <p>
                copyright &copy; {currentYear}
            </p>

            <p>
                All Rights Reserved
            </p>
        </footer>
    );
}

export default Footer;