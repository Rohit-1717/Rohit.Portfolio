import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function AdminSignUp() {
  return (
    <>
      <Nav />
      <section className="px-6 mt-10 mb-16">
        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-[#FCFCFD] rounded-lg border-2 border-[#C399F9] shadow-md">
          <div className="flex justify-center  items-center mx-auto w-[18vw] h-[18vw] md:w-[10vw] md:h-[10vw] lg:w-[5vw] lg:h-[5vw] rounded-full border-2 border-[#C399F9]">
            <img
              className="w-auto h-10 sm:h-8 lg:h-[3.5vw] lg:w-[3.5vw] md:h-[6.5vw] md:w-[6.5vw]"
              src="https://res.cloudinary.com/rohitcloudinary/image/upload/v1721227284/My%20Portfolio%20Website%20Assets/ghyh8kjye7zxpub9qtar.png"
              alt=""
            />
          </div>
          <div className="text-center font-['Montserrat']">
            <h1 className="font-semibold md:text-xl">Admin Register</h1>
          </div>
          <form className="mt-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm text-gray-800 font-['Montserrat'] md:text-xl"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 md:text-xl"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="fullname"
                className="block text-sm text-gray-800 font-['Montserrat'] md:text-xl"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter Full Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 md:text-xl"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 font-['Montserrat'] md:text-xl"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 md:text-xl"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 font-['Montserrat'] md:text-xl"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 md:text-xl"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="confirm-password"
                className="block text-sm text-gray-800 font-['Montserrat'] md:text-xl"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm-password"
                placeholder="Enter Confirm Password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 md:text-xl"
              />
            </div>

            <div className="mt-6 mb-2">
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 md:text-xl">
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-8 text-sm font-light text-center text-gray-400 md:text-xl">
            Already have an account?{" "}
            <NavLink
              to="/admin"
              className="font-medium text-gray-700 hover:underline"
            >
              Log In
            </NavLink>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AdminSignUp;
