import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const MobileTopNavbar = ({ pageName, href }) => {
  return (
    <nav className="px-4 py-5 text-white flex md:hidden gap-3 items-center">
      <a href={href}>
        <BsChevronLeft size={20} className=" font-extrabold" />
      </a>
      <h1 className="text-xl font-medium">{pageName}</h1>
    </nav>
  );
};

export default MobileTopNavbar;
