import React from "react";

function ProfileImage() {
  return (
    <div className=" h-screen w-full flex items-center justify-center lg:w-[30vw] lg:h-[30vw] lg:absolute lg:left-[63%] lg:top-1 md:w-[35vw] md:h-[35vw] md:absolute md:left-[60%]">
      <div className="w-[70vw] h-[70vw] lg:h-[30vw] lg:w-[30vw] rounded-full border border-[#C399F9] flex items-center justify-center md:w-[35vw] md:h-[35vw]">
        <div className="w-[50vw] h-[50vw] lg:h-[22vw] lg:w-[22vw] rounded-full  object-cover object-center overflow-hidden md:w-[25vw] md:h-[25vw]">
            <img  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" />
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;
