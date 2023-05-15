import { Link } from "react-router-dom";
import { styles } from "../../utils/styles";

const Apply = () => {
    return (
        <>
            <div className={`${styles.paddingX} py-7 md:py-14 bg-gradient-to-r from-orange-500 to-blue-500 flex flex-col items-center gap-y-5 md:gap-y-14`}>
                <h3 className=" text-white text-3xl text-center md:text-4xl xl:text-6xl">
                    Start your application today
                </h3>
                <Link
                    to="register"
                >
                    <button className=" bg-transparent border-2 border-white py-2 px-8 rounded-lg uppercase text-white tracking-widest duration-300 ease-in-out hover:font-semibold hover:border-black hover:text-black">
                        apply now
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Apply;