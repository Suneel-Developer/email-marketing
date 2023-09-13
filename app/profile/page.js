import DashboardLayout from "@/components/DashBoardLayout/page";
import MobileTopNavbar from "@/components/MobileTapbar/page";
import React from "react";

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="bg-primary md:bg-white md:hidden block">
        <MobileTopNavbar pageName="Profile" href="/mobiledashboard" />
        <div className="rounded-t-2xl bg-white px-2 md:px-6 py-4 md:p y-0 relative">
          <div className=" absolute -top-12 right-7 z-10  flex items-center justify-center text-center bg-white p-1 w-28 shadow-md rounded-full h-28">
            <input type="file" id="file" className="hidden" />
            <label
              for="file"
              className="cursor-pointer"
            >
              <img src="/assets/profile.png" alt="User Profile" className="w-full h-full rounded-full" />
            </label>
          </div>

          <div className="flex flex-col gap-2 mb-4 mt-16">
            <label
              htmlFor="full name"
              className="text-[#4E4E4E] text-lg font-semibold"
            >
              Full Name :
            </label>
            <input
              type="text"
              placeholder="Richard William"
              className="border border-[#A6A5A5] placeholder:text-[#4E4E4E] text-base font-medium rounded-lg p-3"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label
              htmlFor="email"
              className="text-[#4E4E4E] text-lg font-semibold"
            >
              Email :
            </label>
            <input
              type="text"
              placeholder="Richard 12345@gmail.com"
              className="border border-[#A6A5A5] placeholder:text-[#4E4E4E] text-base font-medium rounded-lg p-3"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label
              htmlFor="mobileno"
              className="text-[#4E4E4E] text-lg font-semibold"
            >
              Mobile No :{" "}
            </label>
            <input
              type="text"
              placeholder="+1 456 789 654"
              className="border border-[#A6A5A5] placeholder:text-[#4E4E4E] text-base font-medium rounded-lg p-3"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
