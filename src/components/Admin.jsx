import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { RiAdminLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log("Form submitted");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <Nav />
      <div className="h-screen w-full bg-[#FCFCFD] px-6 md:flex md:items-center md:justify-center md:flex-col md:h-[70vw] ">
        <h1 className="text-center text-3xl py-5 text-[#24262F] mb-3 font-bold font-['Montserrat'] tracking-tighter lg:-mt-96 lg:mb-10">
          Welcome Back <span className="text-[#6E06F2]">Rohit!</span>
        </h1>
        <div className="h-[75%] w-full relative rounded-md border-2 border-[#6E06F2] md:w-[80vw] md:h-fit lg:w-[55vw] lg:h-[45%]">
          <div className="absolute left-[50%] -translate-x-[50%]  -top-6 w-[15vw] h-[15vw] md:w-[8vw] md:h-[8vw] md:-top-7  border-2 border-[#6E06F2] rounded-full bg-[#6E06F2] lg:w-[5vw] lg:h-[5vw]  text-3xl flex items-center justify-center">
            <RiAdminLine />
          </div>
          <div className="text-center mt-7 md:mt-11 font-semibold font-['Montserrat'] lg:text-2xl">
            <h2 className="text-[#24262F]">Admin Login</h2>
          </div>
          <div className="">
            <form onSubmit={handleSubmit} className="px-8 pt-6  rounded">
              <div className="mb-4">
                <label
                  className="block mb-1 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-[#6E06F2] focus:shadow-outline ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-xs italic text-red-500">{errors.email}</p>
                )}
              </div>
              <div className="mb-2 relative">
                <label
                  className="block mb-1 text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-[#6E06F2] focus:shadow-outline ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="******************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-2/4 transform -translate-y-[20%] text-gray-500  flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {errors.password && (
                  <p className="text-xs italic text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="checkbox_id"
                />
                <label className="text-sm" htmlFor="checkbox_id">
                  Remember Me
                </label>
              </div>
              <div className="text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-[#6E06F2] rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
              <hr className="mb-2 border-t" />
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Create an Account!
                </a>
              </div>
              <div className="text-center">
                <a
                  className="inline-block  text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
