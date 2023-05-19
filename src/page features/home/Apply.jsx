import { Link } from "react-router-dom";
import { styles } from "../../utils/styles";

const Apply = () => {
    return (
        <section className={`${styles.paddingX} my-7 md:my-14`}>
            <div className={` py-7 md:py-14 bg-gradient-to-r from-orange-500 to-blue-500 flex flex-col items-center gap-y-5 rounded md:gap-y-14`}>
                <h3 className=" text-white text-3xl text-center md:text-4xl xl:text-6xl">
                    Start your application today
                </h3>
                <p className=" font-semibold text-xl">
                Next Class Starts 7.31.2023
                </p>
                <Link
                    to="register"
                >
                    <button className=" bg-transparent border-2 border-white py-2 px-8 rounded-lg uppercase text-white tracking-widest duration-300 ease-in-out hover:font-semibold hover:border-black hover:text-black">
                        register
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Apply;