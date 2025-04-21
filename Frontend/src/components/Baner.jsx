import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Baner = () => {
    const navigate = useNavigate();
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 my-20 md:mx-10">
      {/* -------------- left side ------------- */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
            <p>Book Appoinments</p>
            <p className="mt-4">With 100+ Trusted Doctors</p>
            <button onClick={()=>{navigate('/Login');scrollTo(0,0)}} className="rounded-full sm:text-base text-gray-600 px-8 py-3 mt-6 hover:scale-105 transition-all duration-300 bg-white">Create Account</button>
        </div>
      </div>

      {/* -------------- left side ------------- */}
      <div className="hidden md:block w-1/2 lg:w-[370px] relative">
        <img className="absolute w-full bottom-0 right-0 max-w-md " src={assets.appointment_img} alt="" />
      </div>
    </div>
  );
};

export default Baner;
