import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="flex my-10 flex-col gap-12 md:flex-row">
        {/* ------------- left side ------------ */}
        <div>
          <img
            className="w-full md:max-w-[360px]"
            src={assets.about_image}
            alt=""
          />
        </div>
        {/* ------------- right side ------------ */}
        <div className="flex flex-col justify-center gap-6  md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          WHY <span className="text-gray-700 font-medium">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-10 text-gray-700">
        <div className="p-16 border hover:text-white hover:bg-primary transition-all duration-500 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p className="text-sm mt-3">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div  className="p-16 border hover:text-white hover:bg-primary  transition-all duration-500 cursor-pointer">
          <b>CONVENIENCE:</b>
          <p className=" text-sm mt-3">Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="p-16 border hover:text-white hover:bg-primary transition-all duration-500 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p className=" text-sm mt-3">Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
