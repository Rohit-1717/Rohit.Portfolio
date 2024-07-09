import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const items = [
  {
    id: 1,
    title: "Project 1",
    subtitle: "Project Description 1",
    image: "https://images.unsplash.com/photo-1577729182857-5202978ad76c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Project 2",
    subtitle: "Project Description 2",
    image: "https://images.unsplash.com/photo-1636876169574-7c4c480acd5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Project 3",
    subtitle: "Project Description 3",
    image: "https://images.unsplash.com/photo-1454329030972-00583f5f051f?q=80&w=1461&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Project 4",
    subtitle: "Project Description 4",
    image: "https://images.unsplash.com/photo-1562379825-415aea84ebcf?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Project 5",
    subtitle: "Project Description 5",
    image: "https://plus.unsplash.com/premium_photo-1677630001180-c147a017e6d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Project 6",
    subtitle: "Project Description 6",
    image: "https://images.unsplash.com/photo-1719054415389-b3b8a5056ce2?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Project 7",
    subtitle: "Project Description 7",
    image: "https://images.unsplash.com/photo-1719054415369-dfab7c10ba92?q=80&w=1418&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Project 8",
    subtitle: "Project Description 8",
    image: "https://images.unsplash.com/photo-1718900351815-dbe2e3a0d3f9?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    title: "Project 9",
    subtitle: "Project Description 9",
    image: "https://images.unsplash.com/photo-1718900351857-918c7b8cc6ea?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 10,
    title: "Project 10",
    subtitle: "Project Description 10",
    image: "https://images.unsplash.com/photo-1710598586983-e71130a77003?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    title: "Project 11",
    subtitle: "Project Description 11",
    image: "https://plus.unsplash.com/premium_photo-1674498702962-4608fb7b6654?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    title: "Project 12",
    subtitle: "Project Description 12",
    image: "https://images.unsplash.com/photo-1671275425467-8b24b89d2794?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Card() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id.toString()}
            onClick={() => setSelectedId(item.id)}
            className="cursor-pointer"
          >
            <motion.div className="h-[50vw] bg-white overflow-hidden rounded-lg shadow-lg md:h-[24vw] lg:h-[20vw]">
              <motion.img
                className="w-full h-full object-cover object-center"
                src={item.image}
                alt=""
              />
            </motion.div>
            <motion.h5 className="mt-2 text-center text-lg font-semibold">{item.subtitle}</motion.h5>
            <motion.h2 className="mt-1 text-center text-xl font-bold">{item.title}</motion.h2>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId.toString()}
            className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <motion.div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 relative">
              <motion.img
                className="h-48 w-full object-cover object-center rounded-lg"
                src={items.find(item => item.id === selectedId)?.image}
                alt=""
              />
              <motion.h5 className="mt-4 text-lg font-semibold text-center">
                {items.find(item => item.id === selectedId)?.subtitle}
              </motion.h5>
              <motion.h2 className="mt-2 text-xl font-bold text-center">
                {items.find(item => item.id === selectedId)?.title}
              </motion.h2>
              <motion.button
                onClick={() => setSelectedId(null)}
                className="absolute text-3xl top-2 right-2 text-white bg-[#6c06f2dc] hover:bg-[#6c06f2] px-3 py-3 rounded-full focus:outline-none"
              >
                <IoCloseCircleSharp />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Card;
