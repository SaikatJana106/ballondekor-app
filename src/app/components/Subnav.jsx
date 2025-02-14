import React from "react";

const Subnav = () => {
  return (
    <div className="bg-gray-100 py-3 shadow-md">
      <div className="flex items-center justify-center gap-x-6 px-4 py-2 overflow-x-auto whitespace-nowrap md:flex-wrap md:justify-center">
        <span className="text-gray-700 font-medium cursor-pointer hover:text-blue-500 transition">
          Birthday Party
        </span>
        <span className="text-gray-700 font-medium cursor-pointer hover:text-blue-500 transition">
          Proposal Decor
        </span>
        <span className="text-gray-700 font-medium cursor-pointer hover:text-blue-500 transition">
          Canopy Decor
        </span>
        <span className="text-gray-700 font-medium cursor-pointer hover:text-blue-500 transition">
          Bachelorette Party
        </span>
        <span className="text-gray-700 font-medium cursor-pointer hover:text-blue-500 transition">
          Car Boot Decor
        </span>
        <span className="text-gray-700 font-medium cursor-pointer hover:text-blue-500 transition">
          Anniversary Decorations
        </span>
      </div>
    </div>
  );
};

export default Subnav;
