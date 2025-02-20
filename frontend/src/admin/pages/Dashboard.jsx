import React from "react";
import Callender from "../components/Callender";
import { Calendar } from "fullcalendar";

const Dashboard = () => {
  return (
    <div>
      <div className="w-full h-full">
        <div className="carc-absen grid grid-cols-4 text-center gap-25 ">
          <ul className="bg-amber-500  h-29 rounded-4xl items-center flex justify-center flex-col">
            <li className="text-2xl text-black font-mono">Permintaan Izin</li>
            <li>0</li>
          </ul>
          <ul className="bg-amber-500  h-29 rounded-4xl items-center flex justify-center flex-col">
            <li className="text-2xl text-black font-mono">Absen</li>
            <li>0</li>
          </ul>
          <ul className="bg-amber-500  h-29 rounded-4xl items-center flex justify-center flex-col">
            <li className="text-2xl text-black font-mono">Permintaan Izin</li>
            <li>0</li>
          </ul>
          <ul className="bg-amber-500  h-29 rounded-4xl items-center flex justify-center flex-col">
            <li className="text-2xl text-black font-mono">Permintaan Izin</li>
            <li>0</li>
          </ul>
        </div>
        <div className="flex mt-10 w-full gap-30">
          <div className="bg-amber-500 grow">a</div>
          <div className="bg-black flex-none">a</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
