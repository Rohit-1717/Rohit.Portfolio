import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Nav />
      <div className="h-screen w-full bg-zinc-500 text-center text-bold text-3xl">
        Home
      </div>
      <Footer />
    </>
  );
}

export default Home;
