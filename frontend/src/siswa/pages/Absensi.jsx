import React, { useRef, useEffect } from "react";

const Absensi = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    startVideo();
  }, []);

  return (
    <div className="flex flex-col mt-15 justify-center items-center overflow-hidden h-screen">
      <div className="bg-amber-500 w-full h-32 flex justify-center items-center rounded-b-full shadow-lg">
        <h1 className="text-white text-2xl font-bold">Absensi Siswa</h1>
      </div>

      <div className="flex justify-center items-center flex-grow relative -mt-10">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="h-full w-3xl shadow-md rounded-lg"
        />
      </div>

      <div className="bg-amber-500 w-full h-32 flex flex-col justify-center items-center rounded-t-full shadow-lg ">
        <p className="text-white text-lg font-semibold">
          Pastikan wajah terlihat jelas untuk validasi
        </p>
        <button className="mt-2 bg-white text-amber-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
          Mulai Absensi
        </button>
      </div>
    </div>
  );
};

export default Absensi;
