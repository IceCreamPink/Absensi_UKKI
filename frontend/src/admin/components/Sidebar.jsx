import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChartPie,
  faUsers,
  faBookBookmark,
  faAnglesLeft,
  faPowerOff,
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  //   const navigate = useNavigate();
  //   const handleLogout = () => {
  //     // localStorage.removeItem("token");
  //     navigate("/");
  //   };

  const [open, setOpen] = useState(true);
  const Items = [
    { icon: faChartPie, title: "Dashboard", to: "/admin/dashboard" },
    { icon: faPeopleRoof, title: "Kelas", to: "/admin/kelas" },
    { icon: faBookBookmark, title: "Buku Tamu", to: "/admin/tamu" },
  ];

  return (
    <div className="flex h-screen overflow-hidden ">
      <aside
        className={`fixed top-0 left-0 h-full bg-stone-50 shadow-xl z-50 duration-300 p-5 ${
          open ? "w-64" : "w-20"
        }`}
      >
        <FontAwesomeIcon
          icon={faAnglesLeft}
          style={{ fontSize: "25px" }}
          className={`absolute cursor-pointer rounded-full -right-4 top-5 w-9 h-9 outline-4 bg-stone-50 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <ul className="mt-15">
          {/* <div className="grid grid-cols-2 flex-none">
            <img src="/img/gd.jpeg" alt="" className="w-24" />
            <h1
              className={`origin-left font-sans text-xl duration-500 flex text-end mt-4 justify-start ${
                open ? "" : "scale-0"
              }`}
            >
              Buku Tamu
            </h1>
          </div> */}
          {Items.map((menu, index) => (
            <NavLink
              to={menu.to}
              key={index}
              className="flex items-center text-stone-400 text-sm cursor-pointer hover:text-[#79C0BA] rounded-md p-2 mt-4 transition-all "
            >
              <li className="flex items-center">
                <div className="flex-none w-14">
                  <FontAwesomeIcon
                    icon={menu.icon}
                    size="2x"
                    className="mr-2 cursor-pointer duration-300 mt-4 "
                  />
                </div>
                <div className="flex-none w-32">
                  <h5
                    className={`origin-left font-sans text-xl duration-500 flex text-end mt-4 justify-start ${
                      open ? "" : "scale-0"
                    }`}
                  >
                    {menu.title}
                  </h5>
                </div>
              </li>
            </NavLink>
          ))}
          <li
            // onClick={handleLogout}
            className="flex items-center text-stone-400 text-sm cursor-pointer hover:text-red-400 rounded-md p-2 mt-4 transition-all"
          >
            <div className="flex-none w-14">
              <FontAwesomeIcon
                icon={faPowerOff}
                size="2x"
                className="mr-2 cursor-pointer duration-300 mt-4"
              />
            </div>
            <div className="flex-none w-32">
              <h5
                className={`origin-left font-sans text-xl duration-500 flex text-end mt-4 justify-start ${
                  open ? "" : "scale-0"
                }`}
              >
                Log Out
              </h5>
            </div>
          </li>
        </ul>
      </aside>

      <main
        className={`flex-1 duration-300  ${open ? "ml-64" : "ml-20"}`}
      ></main>
    </div>
  );
};

export default Sidebar;
