import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { RiAdminLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Admin() {
  return (
    <>
      <Nav />

      <section className="px-6 mt-10 mb-16">
        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-[#FCFCFD] rounded-lg border-2 border-[#C399F9] shadow-md">
          <div className="flex justify-center  items-center mx-auto w-[18vw] h-[18vw] md:w-[10vw] md:h-[10vw] lg:w-[5vw] lg:h-[5vw] rounded-full border-2 border-[#C399F9]">
            <img
              className="w-auto h-10 sm:h-8 lg:h-10"
              src="https://res.cloudinary.com/rohitcloudinary/image/upload/v1721224336/My%20Portfolio%20Website%20Assets/cam4pfycuoha5sno1rus.gif"
              alt=""
            />
          </div>
          <div className="text-center font-['Montserrat']">
            <h1 className="font-semibold md:text-xl">Admin Login</h1>
          </div>
          <form className="mt-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm text-gray-800  font-['Montserrat'] md:text-xl"
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
              <div className="flex items-center justify-between  font-['Montserrat']">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800 md:text-xl"
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 md:text-xl"
              />
            </div>

            <div className="mt-6 mb-2">
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 md:text-xl">
                Sign In
              </button>
            </div>
            <NavLink
              to={"/admin/reset-password"}
              href="#"
              className="text-sm text-gray-600 hover:underline md:text-xl"
            >
              Forget Password?
            </NavLink>
          </form>

          <p className="mt-8 text-sm font-light text-center text-gray-400 md:text-xl">
            {" "}
            Don't have an account?{" "}
            <NavLink
              to="/admin-signup"
              className="font-medium text-gray-700 hover:underline"
            >
              Create One
            </NavLink>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Admin;
