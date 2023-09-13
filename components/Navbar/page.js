import React from "react";
import { FiSearch } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="hidden md:flex justify-between items-center p-6 py-5 bg-white">
      <h1 className="text-primary font-semibold text-3xl">E-Business</h1>
      <div className="flex gap-1 bg-[#FAFAFA] border border-[#BBBABA] rounded-3xl items-center pl-4">
        <FiSearch className="text-xl" />
        <input
          type="search"
          placeholder="Search"
          className="p-2 px-4 placeholder:text-light_black placeholder:text-base text-base font-medium "
        />
      </div>
    </div>
  );
};

export default Topbar;
