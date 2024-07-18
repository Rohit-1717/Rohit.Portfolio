import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function ResetPassword() {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputCaptcha, setInputCaptcha] = useState("");

  function generateCaptcha() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    return captcha;
  }

  const handleCaptchaRefresh = () => {
    setCaptcha(generateCaptcha());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCaptcha === captcha) {
      alert("Captcha Verified!");
    } else {
      alert("Captcha does not match. Please try again.");
    }
  };

  return (
    <>
      <Nav />
      <section className="px-6 mt-10 mb-16">
        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-[#FCFCFD] rounded-lg border-2 border-[#C399F9] shadow-md">
          <div className="flex justify-center items-center mx-auto w-[18vw] h-[18vw] md:w-[10vw] md:h-[10vw] lg:w-[5vw] lg:h-[5vw] rounded-full border-2 border-[#C399F9]">
            <img
              className="w-auto h-10 sm:h-8 lg:h-[3.5vw] lg:w-[3.5vw] md:h-[6.5vw] md:w-[6.5vw]"
              src="https://res.cloudinary.com/rohitcloudinary/image/upload/v1721229298/My%20Portfolio%20Website%20Assets/sih7bfyc9nmx2ibkxikj.png"
              alt=""
            />
          </div>
          <div className="text-center font-['Montserrat']">
            <h1 className="font-semibold md:text-xl">Reset Password</h1>
          </div>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 font-['Montserrat'] md:text-xl"
              >
                Registered Email ID
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Registered Email ID"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 md:text-xl"
                required
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="captcha"
                className="block text-sm text-gray-800 font-['Montserrat'] md:text-xl"
              >
                Enter Captcha
              </label>
              <div className="flex items-center justify-between">
                <div className="px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg md:text-xl">
                  {captcha}
                </div>
                <button
                  type="button"
                  onClick={handleCaptchaRefresh}
                  className="ml-2 px-2 py-1 mt-2 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 md:text-sm"
                >
                  Refresh
                </button>
              </div>
              <input
                type="text"
                name="inputCaptcha"
                value={inputCaptcha}
                onChange={(e) => setInputCaptcha(e.target.value)}
                placeholder="Enter Captcha"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 md:text-xl"
                required
              />
            </div>

            <div className="mt-6 mb-2">
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 md:text-xl">
                Submit
              </button>
            </div>
          </form>

          <p className="mt-8 text-sm font-light text-center text-gray-400 md:text-xl">
            Remembered your password?{" "}
            <NavLink to="/admin" className="font-medium text-gray-700 hover:underline">
              Log In
            </NavLink>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ResetPassword;
