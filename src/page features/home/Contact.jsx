import { Form } from "react-router-dom";
import { styles } from "../../utils/styles";

const Contact = () => {
    return (
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <div>
                <div className=" flex flex-col gap-y-3 items-center mb-10 lg:mb-16">
                    <h1 className={`${styles.sectionHeading}`}>
                        Get in touch
                    </h1>
                    <p>
                        Have any question for us?
                    </p>
                </div>

                <div>
                    <Form
                        className=" flex flex-col gap-3"
                    >
                        <input type="text" name="name" placeholder="Name" className=" rounded-md" />
                        <div className=" flex flex-col gap-3 md:flex-row">
                            <input type="email" name="email" placeholder="Email" className=" rounded-md basis-1/2" />
                            <input type="text" name="subject" placeholder="Subject" className=" rounded-md basis-1/2" />
                        </div>
                        <textarea name="message" placeholder=" type your message here" className="w-full"></textarea>
                        <button className=" bg-black text-white p-2 rounded-md">
                            Submit
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;