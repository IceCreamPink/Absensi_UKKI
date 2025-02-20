import React, { useEffect } from "react";
import Header from "../components/Header";
import { Outlet, useNavigate } from "react-router-dom";

const Layouts = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    if (token === null) {
      navigate("/");
      window.location.href = "/";
    }
  }, []);
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      <div className="absolute inset-0 flex justify-center items-center z-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Layouts;
