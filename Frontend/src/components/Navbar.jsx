import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);
  const [token, setToken] = useState(true);

  return (
    <div className="flex justify-between items-center py-4 text:sm mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.logo} onClick={()=>navigate('/')} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium ">
        <NavLink to={"/"}>
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/Doctors"}>
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/About"}>
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/Contact"}>
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute hidden font-medium text-gray-600 z-20 top-0 right-0 pt-14 group-hover:block">
                <div className="min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4">
                    <p className="hover:text-black cursor-pointer" onClick={()=>navigate('/MyProfile')}>My Profile</p>
                    <p className="hover:text-black cursor-pointer" onClick={()=>navigate('/MyAppoinments')}>My Appoinment</p>
                    <p className="hover:text-black cursor-pointer" onClick={()=>setToken(false)}>Logout</p>
                </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/Login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
