import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center py-4 mb-5 border-b border-b-gray-400 text-sm justify-between">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to={"/"}>
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"doctors/:speciality"}>
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"about"}>
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"contact"}>
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img src={assets.profile_pic} className="w-8 rounded-full" alt="" />
            <img src={assets.dropdown_icon} className="w-2.5" alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 flex flex-col rounded gap-4 p-4">
                    <p className="hover:text-black cursor-pointer" onClick={()=>{navigate("myprofile")}}>My Profile</p>
                    <p className="hover:text-black cursor-pointer" onClick={()=>{navigate("myappoinments")}}>My Appoinment</p>
                    <p className="hover:text-black cursor-pointer" onClick={()=>{setToken(false)}}>Logout</p>
                </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="bg-primary px-8 py-3 rounded-full text-white font-light hidden md:block"
          >
            Creat Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
