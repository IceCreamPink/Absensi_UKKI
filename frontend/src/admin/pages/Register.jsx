import React from "react";

const Register = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-[#79C0BA] bg-[url('/img/bg-login.png')] bg-repeat bg-center bg-contain bg-blend-multiply">
        <div className="card outline-[#79C0BA] outline-1 rounded-4xl py-9 px-3 bg-white/20 bg-opacity-90 shadow-lg">
          <div className="card-title">
            <div className="card-header mt-5 text-center">
              <h1 className="text-5xl font-semibold">Register Absensi</h1>
            </div>
          </div>
          <div className="card-form">
            <div className="card-content mt-14 mx-24 text-start">
              <ul>
                <li className="grid grid-rows-2 grid-flow-col gap-1">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="xai45@gmail.com"
                    required
                    className="h-10 border-2 border-[#79C0BA] rounded-md hover:border-[#79C0BA] ring-amber-600 p-2.5 outline-0 bg-white/60"
                  />
                </li>
                <li className="grid grid-rows-3 grid-flow-col gap-1">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password">Password</label>
                    <a className="cursor-pointer text-blue-800 font-normal hover:text-violet-300 text-sm">
                      Forgot your password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="•••••"
                    required
                    className="h-10 border-2 border-[#79C0BA] rounded-md hover:border-[#79C0BA] ring-amber-600 p-2.5 outline-0 bg-white/60"
                  />
                </li>
                <li>
                  <input type="checkbox" className="accent-blue-200" />
                  <span className="text-black ml-3 font-light">
                    Remember information
                  </span>
                </li>
              </ul>

              <ul className="mt-2">
                <li>
                  <button
                    type="submit"
                    className="w-full bg-stone-950 hover:bg-stone-900 text-amber-50 font-semibold hover:text-stone-100 py-2 px-4 rounded-full cursor-pointer outline-0"
                  >
                    Sign In
                  </button>
                </li>
                <li>
                  <h5 className="mt-1">
                    Don’t have an account?{" "}
                    <span className="text-blue-700 font-semibold cursor-pointer">
                      Sign up
                    </span>
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
