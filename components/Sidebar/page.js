"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiRadioCircleMarked } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  // Check if the screen width is less than or equal to a mobile breakpoint (e.g., 640px)
  const isMobile = window.innerWidth <= 640;
  return (
    <div className="w-[23%] shadow-sidebarshadow h-screen hidden lg:flex flex-col z-10">
      {/* User Profile  */}
      <div className="bg-primary p-4 flex items-center gap-4 mb-6">
        <img
          src="/assets/user.png"
          alt="user Profile"
          className="w-20 h-20 rounded-full"
        />
        <div className="w-full">
          <h2 className="flex justify-between items-center gap-2 text-xl text-white font-medium">
            Richard William
            <FaUserEdit className="cursor-pointer" />
          </h2>
          <h3 className="text-white text-lg font-medium">fa6123@45</h3>
        </div>
      </div>

      {/* Links  */}
      <div className="pl-9 w-full">
        <div className="flex items-center gap-2 mb-5">
          <BiRadioCircleMarked className="text-primary text-4xl" />
          <h2 className="text-2xl font-semibold text-primary">E-Business</h2>
        </div>

        <ul className="flex flex-col w-full pl-2 gap-3">
          {/* On- Boarding Training  */}
          <li
            className={`text-lg font-medium text-dark_gray p-3 pl-5 duration-300 ease-in-out ${
              pathname.includes("dashboard") &&
              "bg-primary w-full rounded-l-lg text-white"
            }`}
          >
            <Link href="/dashboard">On- Boarding Training</Link>
          </li>

          {/* Mentorship Program  */}
          <li
            className={`text-lg font-medium text-dark_gray p-3 pl-5 duration-300 ease-in-out ${
              pathname.includes("mentorship") &&
              "bg-primary w-full rounded-l-lg text-white"
            }`}
          >
            <Link href="/mentorship">Mentorship Program</Link>
          </li>

          {/* Training for Sales Team  */}
          <li
            className={`text-lg font-medium text-dark_gray p-3 pl-5 duration-300 ease-in-out ${
              pathname.includes("training") &&
              "bg-primary w-full rounded-l-lg text-white"
            }`}
          >
            <Link href="/training">Training for Sales Team</Link>
          </li>

          {/* Collaboration with team  */}
          <li
            className={`text-lg font-medium text-dark_gray p-3 pl-5 duration-300 ease-in-out ${
              pathname.includes("collaboration") &&
              "bg-primary w-full rounded-l-lg text-white"
            }`}
          >
            <Link href="/collaboration">Collaboration with team</Link>
          </li>

          {/* Material Management  */}
          <li
            className={`text-lg font-medium text-dark_gray p-3 pl-5 duration-300 ease-in-out ${
              pathname.includes("material") &&
              "bg-primary w-full rounded-l-lg text-white"
            }`}
          >
            <Link href="/material">Material Management</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
