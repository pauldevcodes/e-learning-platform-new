import React from "react";
import Dynamic from "./Dynamic";
import Sub from "./Sub";

import Image1 from '../../../images/about banner.jpg'
import Image2 from '../../../images/mentorship.jpg'
import Image3 from '../../../images/team.jpg'

const Title = () => {
  return (
    <div className="mx-auto relative py-16">
      <div className="pt-20">
        <div className="">
          <h3 className="capitalize font-semibold text-lg md:text-xl text-center">
            Welcome to Kingship Technologies, your premier destination for
            cutting-edge cybersecurity training
          </h3>

          <div className=" p-5">
            <img src={Image1} alt="" className="w-fit h-fit" />
          </div>
        </div>

        <div className="my-10">
          <div className="px-3 space-y-10">
            <span className="text-left text-lg md:text-xl font-semibold">
              Our Mission Is To Empower Individuals And Organizations With The
              Skills And Knowledge <br />
              <span className="text-orange-500">
                Required To Safeguard Their Digital Assets In An Increasingly
                Connected World .
              </span>
            </span>
            <div className="py-5">
              <img src={Image2} alt="" className="w-fit h-fit" />
            </div>

            <p className="text-left text-lg md:text-xl font-semibold">
              That's Why We've Developed A Comprehensive Training Program
              Designed To Equip You With The Latest Tools, <br />
              <span className="text-orange-500">
                Techniques, And Best Practices In The Field Of Cybersecurity.
              </span>
            </p>
          </div>

          <div className="my-10 px-3 space-y-10">
            <div className="mx-auto p-2">
              <img src={Image3} alt="" className="w-fit h-fit" />

              <span className="text-lg md:text-xl font-semibold text-center">
                CC- Certified in Cybersecurity
                <br />
                <span>
                  <button className="bg-orange-500 text-white p-2 m-1.5 rounded-md text-xl font-normal">
                    Register
                  </button>
                </span>
              </span>
            </div>

            <div className="mx-auto p-2">
              <img src={Image1} alt="" className="w-fit h-fit" />

              <span className="text-lg md:text-xl font-semibold text-center">
                Security Plus training
                <br />
                <span>
                  <button className="bg-orange-500 text-white p-2 m-1.5 rounded-md text-xl font-normal">
                    Register
                  </button>
                </span>
              </span>
            </div>

            <p className="text-left text-lg md:text-xl font-semibold">
              <span className="text-orange-500">
                Our Team Of Experienced Trainers Boasts A Diverse Range Of
                Expertise In Various Aspects Of Cybersecurity,
              </span>{" "}
              Including Cybersecurity Engineering, Data Privacy, Risk
              Management, And Incident Response.
            </p>
          </div>
        </div>
      </div>
      {/* <Dynamic /> */}
      <Sub />
    </div>
  );
};

export default Title;