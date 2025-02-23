import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Tutup & Open
const Modaladd = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const token = localStorage.getItem("token");
  const handleSumbit = async (event) => {
    event.preventDefault();
    const fData = {};
    const frmel = event.target;
    for (let el of frmel.elements) {
      fData[el.name] = el.value;
    }

    const response = await fetch("http://127.0.0.1:3000/api/kelas", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(fData),
    });
    if (!response.ok) {
      console.log((error) => console.error);
    } else {
      event.target.reset();
      Swal.fire({
        icon: "success",
        text: "Berhasil Disimpan",
        timer: 3000,
      });
      setTimeout(() => {
        location.reload();
      });
    }
  };

  const handleClickScreen = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalStyle = {
    animation: "scaleUp 0.3s ease-out",
    transformOrigin: "center",
    overflow: "hidden",
  };

  // }
  return (
    <>
      {" "}
      <style>
        {`
          @keyframes scaleUp {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
      <div
        id="crud-modal"
        tabIndex={-1}
        className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-800/55 bg-opacity-50"
        onClick={handleClickScreen}
      >
        <div
          className="relative p-4 w-full max-w-md max-h-full"
          style={modalStyle}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Tambah Data
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  size="xl"
                  className=""
                  aria-hidden="true"
                  fill="none"
                />
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={handleSumbit}>
                <div>
                  <label
                    htmlFor="kelas"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pl-1"
                  >
                    Kelas
                  </label>
                  <input
                    type="text"
                    name="kelas"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    placeholder="Nekoo"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Nama"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pl-1"
                  >
                    Nama Wali
                  </label>
                  <input
                    type="text"
                    name="nama_wali"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Nekoo"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Nama"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pl-1"
                  >
                    Tahun
                  </label>
                  <input
                    type="date"
                    name="tahun"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Nekoo"
                    required
                  />
                </div>

                <div className=" text-end">
                  <button
                    type="submit"
                    className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sumbit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modaladd;
