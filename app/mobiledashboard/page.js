"use client"
import React from "react";
import Link from "next/link";
import DashboardLayout from "@/components/DashBoardLayout";

const MobileDashboard = () => {
  return (
    <DashboardLayout>
      <div className="bg-primary md:bg-white flex w-full h-screen flex-col">
        {/* topbar show on mobile  */}
        <div className="px-3 py-4 text-white flex gap-3 items-center">
          <img
            src="/assets/user.png"
            alt="User Profile"
            className=" w-14 h-14 rounded-full"
          />
          <div>
            <h2 className="text-lg font-medium">Richard William</h2>
            <h3 className="text-sm font-normal">fa6123@45</h3>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-start flex-col p-2 relative bg-white rounded-t-3xl ">
          <div className="w-full p-5 shadow-dropshadow rounded-2xl mt-3 flex justify-center ">
            <img
              src="/assets/mobilesidebarpage.png"
              alt="Image"
              className=" h-40 w-4/5"
            />
          </div>
          <div className=" my-3">
            <h1 className="text-lg font-medium pb-2">E-business :</h1>
            <div className="flex flex-col gap-5">
              <Link href="/dashboard" className="w-full">
                <div className="w-full bg-primary shadow-mobileShadow rounded-2xl p-2 flex items-center gap-3 justify-center text-white">
                  <img
                    src="/assets/icon1.png"
                    alt="Icon"
                    className=" w-14 h-14 bg-white p-2 rounded-full"
                  />
                  <div className=" flex flex-col gap-1">
                    <h2 className="text-lg font-medium">
                      On-Boarding Training
                    </h2>
                    <p className=" font-normal leading-tight text-sm	">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum
                    </p>
                  </div>
                </div>
              </Link>

              <div className=" flex justify-center items-center w-full gap-2">
                <Link href="/mentorship" className="w-1/2">
                  <div className="w-full bg-[#FEB46F] shadow-mobileShadow rounded-2xl p-2 pb-5 flex items-center gap-3 text-white">
                    <img
                      src="/assets/icon2.png"
                      alt="Icon"
                      className="w-10 h-10 bg-white p-2 rounded-full"
                    />
                    <h2 className="text-lg font-medium leading-1">
                      Mentorship program
                    </h2>
                  </div>
                </Link>
                <Link href="/training" className="w-1/2">
                  <div className="w-full bg-[#EA8A54] shadow-mobileShadow rounded-2xl p-2 pb-5 flex items-center gap-3  text-white">
                    <img
                      src="/assets/icon3.png"
                      alt="Icon"
                      className=" w-10 h-10 bg-white px-3 p-2 rounded-full"
                    />
                    <h2 className="text-lg font-medium ">
                      Training for Sales team
                    </h2>
                  </div>
                </Link>
              </div>

              <div className=" flex justify-center items-center w-full gap-2">
                <Link href="/collaboration" className="w-1/2">
                  <div className="w-full bg-[#DE9551] shadow-mobileShadow rounded-2xl p-2 pb-5 flex items-center gap-3 text-white">
                    <img
                      src="/assets/icon4.png"
                      alt="Icon"
                      className="w-10 h-10 bg-white p-2 rounded-full"
                    />
                    <h2 className="text-lg font-medium leading-1">
                      Collaboration with Team
                    </h2>
                  </div>
                </Link>
                <Link href="/collaboration" className="w-1/2">
                  <div className="w-full bg-[#AA6A46] shadow-mobileShadow rounded-2xl p-2 pb-5 flex items-center gap-3  text-white">
                    <img
                      src="/assets/icon5.png"
                      alt="Icon"
                      className=" w-10 h-10 bg-white p-2 rounded-full"
                    />
                    <h2 className="text-lg font-medium flex flex-wrap ">
                      Material Management
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MobileDashboard;
