import React from "react";
import Card from "./Card";
function Projects() {
  return (
    <>
      <div className="bg-[#FCFCFD]  w-full flex flex-col  justify-start px-6 md:mb-6">
        <div className="w-full py-6">
          <h1 className="text-5xl text-[#24262F] font-bold font-['Montserrat'] lg:font-extrabold">
            Projects
            <span className="text-5xl  h-fit w-fit text-[#6E06F2]">.</span>
          </h1>
        </div>
        <Card />
      </div>
    </>
  );
}

export default Projects;
