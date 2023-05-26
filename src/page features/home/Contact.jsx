import { Form } from "react-router-dom";

// library
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid"
import { FaWhatsapp } from "react-icons/fa"

// common styles
import { styles } from "../../utils/styles";

const Contact = () => {

    const contactList = [
        {
            id: 1,
            label: "Contact Number",
            value: "+1 (433) 888-6978",
            icon: <PhoneIcon width={25} />
        },
        {
            id: 2,
            label: "WhatsApp Number",
            value: "+1 (433) 888-6978",
            icon: <FaWhatsapp />
        },
        {
            id: 3,
            label: "Our Email",
            value: "loremipsum@gmail.com",
            icon: <EnvelopeIcon width={25} />
        },
        {
            id: 4,
            label: "Our Location",
            value: "Plot 4, Block 7A, Hilltop Estate, Aboru, Iyana-Ipaja",
            icon: <MapPinIcon width={25} />
        },
    ]

    return (
        <div className={`${styles.paddingX} py-7 md:py-14 bg-black`}>
            <div className=" flex flex-col gap-y-5 items-center mb-10 lg:mb-16">
                <h1
                    className={`${styles.sectionHeading} text-white`}
                >
                    Contact us
                </h1>
            </div>

            <div className=" flex flex-col gap-y-16 md:gap-y-32 lg:flex-row lg:gap-x-20">
                <div className=" flex flex-col gap-y-8 lg:basis-1/2">
                    {/* questions */}
                    <div className=" flex flex-col items-center gap-y-2 md:items-start lg:gap-y-5">
                        <h2 className=" text-white text-2xl font-bold md:text-3xl xl:text-5xl">Have a Quick Query?</h2>
                        <p className=" text-white text-center md:text-start md:text-lg xl:text-2xl">Would you like to enquire about any of our training or services?</p>
                    </div>

                    {/* social handles */}
                    <div className=" flex flex-col gap-y-8">
                        {contactList.map(({ id, label, value, icon }) => {
                            return (
                                <div key={id} className=" flex items-center gap-x-4">
                                    <div className=" text-orange-500 text-2xl">
                                        {icon}
                                    </div>
                                    <div className=" flex flex-col gap-y-2">
                                        <h5 className=" text-white text-lg font-semibold">{label}</h5>
                                        <p className=" text-white">{value}</p>
                                    </div>
                                    <hr className=" text-orange-500 my-5" />
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className=" bg-white p-6 rounded-md lg:basis-1/2">
                    <div className=" flex flex-col items-center gap-y-2 mb-10">
                        <h2 className=" uppercase text-orange-500 text-2xl font-bold">
                            Drop a message
                        </h2>
                        <p className=" text-center font-medium text-lg md:text-start">
                            How may we help you?
                        </p>
                    </div>

                    <Form
                        className=" flex flex-col gap-3 max-w-screen-md mx-auto lg:gap-y-8"
                    >
                        <input type="text" name="name" placeholder="Name" className=" form-input rounded-md" />
                        <input type="email" name="email" placeholder="Email" className=" form-input rounded-md" />
                        <input type="number" name="phoneNo" placeholder="Phone Number" className=" form-input rounded-md" />
                        <textarea name="message" placeholder=" Type your message here" className="w-full form-textarea rounded-md"></textarea>
                        <button className=" bg-orange-500 text-white w-fit py-2 px-6 rounded-md duration-300 ease-in-out hover:bg-black">
                            Submit
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
