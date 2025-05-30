import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {

  const navigate = useNavigate();
  const {doctors} = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={()=>{navigate(`/appoinment/${item._id}`),scrollTo(0,0)}}
            key={index}
            className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] duration-500 transition-all"
          >
            <img className="bg-[#EAEFFF]" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="bg-green-500 h-2 w-2 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-lg font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-blue-50 px-12 py-3 rounded-full mt-10" onClick={()=>{navigate('/doctors'); scrollTo(0,0)}}>more</button>
    </div>
  );
};

export default TopDoctors;
