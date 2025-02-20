import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useNavigate } from "react-router-dom";

const Layouts = () => {
  // const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  // console.log(token);

  // useEffect(() => {
  //   if (token === null) {
  //     navigate("/");
  //     window.location.href = "/";
  //   }
  // }, []);
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden ">
          <Header />
          <div className="flex-1 overflow-y-auto p-2 ml-12 mt-12 mr-14 ">
            <Outlet />
          </div>
          <Footer className="flex-1 flex flex-col overflow-hidden" />
        </div>
      </div>
    </>
  );
};

export default Layouts;
