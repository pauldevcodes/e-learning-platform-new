import {
    BsFillCalendarEventFill,
    BsFillClockFill,
    BsFillCreditCardFill,
} from "react-icons/bs";

import {SlScreenDesktop} from "react-icons/sl"

const Outline = () => {
    return (
        <>
            <div className=" bg-aboutBanner bg-cover bg-no-repeat min-h-[20vh] rounded-md my-10 mx-5 md:mx-14 relative">
                <div className="absolute bg-black/50 w-full h-full top-0 left-0"></div>
                <div className="flex sm:flex-row flex-col justify-around items-center gap-10 py-20">
                    <span className="text-white font-semibold text-lg text-center flex  sm:flex-col flex-row gap-5 md:justify-center justify-start items-center z-20">
                        <BsFillCalendarEventFill className="text-4xl" />
                        <span>5 Weeks</span>
                    </span>
                    <span className="text-white font-semibold text-lg text-center flex sm:flex-col flex-row gap-5 justify-center items-center z-20">
                        <BsFillClockFill className="text-4xl" />
                        <span>10am - 2:30pm</span>
                    </span>
                    <span className="text-white font-semibold text-lg text-center flex sm:flex-col flex-row gap-5 justify-center items-center z-20">
                        <SlScreenDesktop className="text-4xl" />
                        <span>Virtual live classes</span>
                    </span>
                    <span className="text-white font-semibold text-lg text-center flex  sm:flex-col flex-row gap-5 justify-center items-center z-20">
                        <BsFillCreditCardFill className="text-4xl" />
                        <span>$150,000</span>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Outline;