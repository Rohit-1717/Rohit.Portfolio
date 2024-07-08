import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <Nav />
      <div className="h-screen w-full bg-white px-6">
        <div className="w-fit p-2 mt-10 overflow-hidden  flex font-['Montserrat'] md:mt-12 mb-4">
          <h2 className="text-[#4E525A]  text-2xl tracking-tighter md:text-3xl">
            Hey, I'm Rohit <span>👋🏻</span>
          </h2>
        </div>
        <div>
          <div className="bg-orange-400 w-fit p-2 overflow-hidden ">
            <h1 className="font-extrabold text-5xl font-[''Montserrat'] md:text-6xl lg:text-7xl">
              Full Stack
            </h1>
          </div>
          <div className="bg-pink-400 w-fit p-2 overflow-hidden font-['Montserrat']">
            <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl">
              Developer
            </h1>
          </div>
        </div>

        <div className="font-['Montserrat'] mt-7  md:w-[56.5vw]">
          <p className="text-lg leading-[7.2vw] tracking-tight text-[#4E525A] md:leading-[4vw] lg:leading-[2.5vw] lg:w-[52vw] lg:text-xl">
            As a full stack developer based in India, I specialize in crafting
            sophisticated and user-centric websites that leave a lasting
            impression.
          </p>
        </div>
        <div className="flex gap-4 overflow-hidden mt-6 ">
          <button className="border h-11  w-full text-white bg-[#8A37F5] font-bold  rounded-lg md:w-[25vw]  lg:w-[12vw] lg:h-[3.6vw]">
            Get In Touch
          </button>
          <button className="border  h-11 w-full text-zinc-600  border-black font-bold text-sm rounded-lg md:w-[25vw] lg:w-[12vw] lg:h-[3.6vw]">
            Browse Projects
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
