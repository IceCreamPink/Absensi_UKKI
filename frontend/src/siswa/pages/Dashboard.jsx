import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faUser,
  faSadTear,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const attendanceData = [
  { icon: faCheck, color: "text-purple-600", label: "Hadir", count: "1 Hari" },
  { icon: faUser, color: "text-green-600", label: "Izin", count: "0 Hari" },
  { icon: faSadTear, color: "text-gray-600", label: "Sakit", count: "0 Hari" },
  { icon: faClock, color: "text-red-600", label: "Terlambat", count: "0 Hari" },
];
const Dashboard = () => {
  const [dataAbsensi, setAbsensi] = useState([]);
  const tampilAbsensi = async () => {
    const response = await fetch("http://127.0.0.1:3000/api/absensi", {
      // headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setAbsensi(data);
  };
  useEffect(() => {
    tampilAbsensi();
  }, []);
  return (
    <>
      <div className="h-screen w-screen ">
        {dataAbsensi.length > 0 ? (
          dataAbsensi.map((item, index) => (
            <div className="top w-full h-full mt-26 py-6 justify-items-center align-middle ">
              <div className="card-status grid grid-cols-2 text-center w-3xl h-28 rounded-4xl p-2 bg-white border-2 border-amber-900">
                <div className="card-masuk border-r-3 border-r-blue-300 items-center flex justify-center flex-col ">
                  <h2 className="font-extrabold text-2xl">Absensi Masuk</h2>

                  <h1 className="font-mono text-2xl">{item.waktu}</h1>
                </div>
                <div className="card-masuk border-l-3 border-l-blue-300 items-center flex justify-center flex-col">
                  <h2 className="font-extrabold text-2xl">Absensi Pulang</h2>
                  <h1 className="font-mono text-2xl">00:00 AM</h1>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 p-5 bg-gray-100 rounded-4xl w-3xl mt-8">
                {attendanceData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-3xl shadow-md flex items-center gap-3"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`text-2xl ${item.color}`}
                    />

                    <div className="flex flex-col">
                      <h2 className="font-semibold text-gray-800">
                        {item.label}
                      </h2>
                      <p className="text-sm text-gray-600">{item.count}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h1 className="font-mono text-2xl text-blue-600"></h1>
            </div>
          ))
        ) : (
          <h1 className="font-mono text-2xl text-gray-500">Belum Ada Data</h1>
        )}
      </div>
    </>
  );
};

export default Dashboard;
