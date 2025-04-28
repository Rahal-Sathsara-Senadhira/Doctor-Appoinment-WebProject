import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [menuClosing, setMenuClosing] = useState(false);

  const closeMenu = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setShowMenu(false);
      setMenuClosing(false);
    }); // match your CSS transition duration
  };

  return (
    <div className="flex justify-between items-center py-4 text:sm mb-5 border-b border-b-gray-400">
      <img
        className="w-44 cursor-pointer"
        src={assets.logo}
        onClick={() => navigate("/")}
        alt=""
      />
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
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => navigate("/MyProfile")}
                >
                  My Profile
                </p>
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => navigate("/MyAppoinments")}
                >
                  My Appoinment
                </p>
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => setToken(false)}
                >
                  Logout
                </p>
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
      <img
        onClick={() => setShowMenu(true)}
        src={assets.menu_icon}
        alt=""
        className="w-6 md:hidden"
      />
      {/* --------- mobile menu ------------ */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-20 transition-transform duration-500 transform
          ${showMenu ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center px-5 py-6">
          <img src={assets.logo} alt="" className="w-36" onClick={()=>navigate('/')}/>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={closeMenu}
            className="w-8"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <NavLink onClick={()=>{setShowMenu(false),scrollTo(0,0)}} to={"/"} ><p className={`px-4 py-2 rounded inline-block`}>HOME</p></NavLink>
          <NavLink onClick={()=>{setShowMenu(false),scrollTo(0,0)}} to={"/Doctors"} ><p className={`px-4 py-2 rounded inline-block`}>ALL DOCTORS</p></NavLink>
          <NavLink onClick={()=>{setShowMenu(false),scrollTo(0,0)}} to={"/About"} ><p className={`px-4 py-2 rounded inline-block`}>ABOUT</p></NavLink>
          <NavLink onClick={()=>{setShowMenu(false),scrollTo(0,0)}} to={"/Contact"} ><p className={`px-4 py-2 rounded inline-block`}>CONTACT</p></NavLink>
          <hr className="border-none h-[1px] bg-neutral-500 w-full my-5"/>
          {token ? (
            <div className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
              <NavLink onClick={()=>{setShowMenu(false),scrollTo(0,0)}} to={"/MyProfile"} ><p className={`px-4 py-2 rounded inline-block`}>MY PROFILE</p></NavLink>
              <NavLink onClick={()=>{setShowMenu(false),scrollTo(0,0)}} to={"/MyAppoinments"} ><p className={`px-4 py-2 rounded inline-block`}>MY APPOINMENTS</p></NavLink>
              <NavLink to={"/Login"} onClick={()=>setToken(false)} className={`px-4 py-2 rounded inline-block`}><p>LOGOUT</p></NavLink>
            </div>
          ) : (
            <div></div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
