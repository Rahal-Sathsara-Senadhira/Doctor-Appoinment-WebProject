import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDocs] = useState([]);
  const navigate = useNavigate();

  const fetchRelDocInfo = async () => {
    setRelDocs(
      doctors.filter((doc) => doc.speciality == speciality && doc._id != docId)
    );
  };

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      fetchRelDocInfo();
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Related Doctors</h1>
      <p className="sm:w-1/3 text-center text-sm">Simply browse through our doctors</p>
      <div className="grid grid-cols-auto gap-4 w-full pt-5 gap-y-6 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {navigate(`/appoinment/${item._id}`),scrollTo(0,0)}}
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
      <button onClick={()=>{navigate(`/Doctors/${speciality}`)}} className="bg-slate-100 mt-10 text-gray-400 px-5 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300" >more</button>
    </div>
  );
};

export default RelatedDoctors;
