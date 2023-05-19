import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const Faq = () => {
    const [answer, setAnswer] = useState(false);
    const [Faq, setFaq] = useState(false);
    const [read, setRead] = useState(false);


    return (
        <div>
            <header className="md:bg-hero-tablet bg-cover bg-no-repeat lg:bg-about-hero bg-hero-mobile min-h-[50vh] ">
                <div className="bg-black/30 w-full absolute min-h-[50vh] "></div>
                <div className="">
                    <div className="absolute w-full min-h-[50vh] flex flex-col justify-center items-center">
                        <h2 className="text-5xl font-semibold text-center text-white">
                            FAQS
                        </h2>
                    </div>
                </div>
            </header>

            <div className="max-w-screen-lg mx-auto">
                <div className="my-10 grid text-center lg:mx-20 md:mx-10 mx-5 gap-10 justify-center items-center">
                    <div>
                        <h2 className="md:text-2xl text-xl font-semibold capitalize flex gap-5">
                            What if I do not have any experience or degrees?
                            <button onClick={() => setAnswer(!answer)}>
                                <PlusIcon className="font-semibold" width={35} />{" "}
                            </button>
                        </h2>
                        <div>
                            {answer && (
                                <p className="md:text-lg text-base text-left capitalize ease-in duration-300 ">
                                    If you do not have any experience or degrees, please enroll in
                                    our Security Fundamentals I course. This class was developed
                                    for students with no experience as it breaks down the
                                    fundamentals of security. In addition, it prepares you for the
                                    Security+ Certification.
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <h2 className="md:text-2xl text-xl font-semibold capitalize flex gap-5">
                            What if I need extra help?
                            <button onClick={() => setFaq(!Faq)}>
                                <PlusIcon className="font-semibold" width={35} />{" "}
                            </button>
                        </h2>
                        <div>
                            {Faq && (
                                <p className="md:text-lg text-base text-left capitalize ease-in duration-300 ">
                                    If for any reason you need extra help, please join us on Cyber
                                    Thursday. Cyber Thursday is an open forum we use to cover
                                    topics that may have been confusing or topics you may have
                                    missed. This is a great opportunity to get extra hands on
                                    experience.
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <h2 className="md:text-2xl text-xl font-semibold capitalize flex gap-5">
                            What happens if I miss a class?
                            <button onClick={() => setRead(!read)}>
                                <PlusIcon className="font-semibold" width={35} />{" "}
                            </button>
                        </h2>
                        <div>
                            {read && (
                                <p className="md:text-lg text-base text-left capitalize ease-in duration-300 ">
                                    If for any reason you happen to miss a class, please join us
                                    on Cyber Thursday. Cyber Thursday is an open forum we use to
                                    cover topics that may have been confusing or topics you may
                                    have missed. This is a great opportunity to get extra hands on
                                    experience.
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="py-10 space-y-10 text-center lg:mx-20 md:mx-10 mx-5">
                    <h3 className="text-2xl capitalize font-semibold">
                        have any more question get in contact with us
                    </h3>
                    <button className="bg-orange-500 p-4 rounded-lg text-xl font-semibold text-white hover:bg-black ease-in-out duration-300 hover:text-white">Contact us</button>
                </div>
            </div>
        </div>
    );
};

export default Faq;