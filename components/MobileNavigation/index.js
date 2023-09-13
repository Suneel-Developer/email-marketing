"use client";
import React, { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUsersGear } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { HiMiniUser } from "react-icons/hi2";

import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNavigation = () => {
  const router = usePathname();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(router); // Set active based on the current route
  }, [router]);

  const Menus = [
    { icon: <AiFillHome />, href: "/mobiledashboard" },
    { icon: <FaUsersGear />, href: "/mentorship" },
    { icon: <FiSearch />, href: "" },
    { icon: <HiMiniUser />, href: "/profile" },
  ];

  return (
    <div className=" bg-white h-16 w-full fixed bottom-0 left-0 right-0 z-10 flex justify-center items-center">
      <ul className=" flex justify-around relative  items-center w-full">
        {Menus.map((menu, i) => (
          <li key={i} className=" relative ">
            <Link
              href={menu.href}
              onClick={() => setActive(i)}
            >
              <span
                className={`text-[#C5C5C5] text-center text-2xl cursor-pointer   ${
                  menu.href === active &&
                  " rounded-full bg-primary shadow-iconShadow text-white h-10 w-10  flex justify-center items-center "
                }`}
              >
                {menu.icon}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavigation;
