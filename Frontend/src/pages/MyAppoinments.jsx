import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppoinments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Aappointments
      </p>
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr,2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
          >
            <div>
              <img src={item.image} alt="" className="w-32 bg-indigo-50" />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-medium">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="text-xs mt-1">
                <span className="text-sm font-medium text-neutral-700">Date and Time :</span> {} | {}
              </p>
            </div>
            <div></div>
            <div className="flex flex-col justify-end gap-2">
              <button className="text-sm text-stone-500 rounded hover:bg-primary cursor-pointer hover:text-white text-center sm:min-w-48 py-2 transition-all duration-300 hover:border-none border">Pay Online</button>
              <button className="text-sm text-stone-500 rounded hover:bg-red-500 cursor-pointer hover:text-white text-center sm:min-w-48 py-2 transition-all duration-300 hover:border-none border">Cancel Appoinment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppoinments;
