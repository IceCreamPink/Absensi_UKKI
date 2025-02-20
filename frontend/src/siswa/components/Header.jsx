import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" h-20 ">
        <nav className="shadow-md py-3 text-lg shadow-blue-300 bg-white rounded-b-xl">
          <div className="flex flex-1 justify-center p-4 ">
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-solid-bg"
            >
              <ul className="grid grid-cols-3 gap-10 text-center ">
                <NavLink to="/siswa/dashboard" className="cursor-pointer text-black hover:text-blue-300 text-xl">
                  Dashboard
                </NavLink>
                <NavLink to="/siswa/absensi" className="cursor-pointer text-black hover:text-blue-300 text-xl">
                  Absensi
                  
                </NavLink>
                <NavLink to="/siswa/profile" className="cursor-pointer text-black hover:text-blue-300 text-xl">
                  Profile
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
