"use client"
import React from "react";
import DashboardLayout from "../../components/DashBoardLayout";
import MobileTopNavbar from "../../components/MobileTapbar";

const Collaboration = () => {
  return (
    <DashboardLayout>
      <div className="bg-primary md:bg-white  ">
        <MobileTopNavbar pageName="Collaboration with Team" href="/mobiledashboard" />
        <div className="flex gap-4 min-h-max rounded-t-2xl bg-white px-2 md:px-6 py-4 md:py-0">
          {/* Chat Section  */}
          <div className="w-full lg:w-4/6">
            <div className="flex justify-between items-center gap-2 mb-3">
              <h1 className="text-secondary font-semibold text-lg">
                Collaboration with Team
              </h1>
              <div className="flex justify-between items-center gap-3">
                <img
                  src="/assets/whatsapp.png"
                  alt="Whatshap logo"
                  className="w-8"
                />
                <h2 className="text-secondary font-medium text-lg md:block hidden">
                  Collaboration through Whatsapp
                </h2>
              </div>
            </div>
            <div className=" flex flex-col gap-3 md:shadow-customshadow rounded-xl md:p-4">
              <div className="flex items-center w-11/12 md:w-4/5 gap-2">
                <img
                  src="/assets/chatuser.png"
                  alt="chat user image"
                  className="w-12 h-12 rounded-full"
                />
                <div className="w-full bg-[#FFF6EB]  rounded-xl p-2 gap-2 ">
                  <div className="flex justify-between items-center gap-2 text-[#3F3F3F] ">
                    <h2 className="text-base font-semibold">James</h2>
                    <span className="text-sm font-light">10:35 Am</span>
                  </div>
                  <p className="text-sm font-normal tracking-wide text-[#777]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </p>
                </div>
              </div>

              <div className="flex items-center w-11/12 md:w-4/5 gap-2">
                <img
                  src="/assets/chatuser.png"
                  alt="chat user image"
                  className="w-12 h-12 rounded-full"
                />
                <div className="w-full bg-[#FFF6EB]  rounded-xl p-2 gap-2 ">
                  <div className="flex justify-between items-center gap-2 text-[#3F3F3F] ">
                    <h2 className="text-base font-semibold">James</h2>
                    <span className="text-sm font-light">10:35 Am</span>
                  </div>
                  <p className="text-sm font-normal tracking-wide text-[#777]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only
                  </p>
                </div>
              </div>

              <div className="flex items-center w-11/12 md:w-4/5 gap-2">
                <img
                  src="/assets/chatuser.png"
                  alt="chat user image"
                  className="w-12 h-12 rounded-full"
                />
                <div className="w-full bg-[#FFF6EB]  rounded-xl p-2 gap-2 ">
                  <div className="flex justify-between items-center gap-2 text-[#3F3F3F] ">
                    <h2 className="text-base font-semibold">James</h2>
                    <span className="text-sm font-light">10:35 Am</span>
                  </div>
                  <p className="text-sm font-normal tracking-wide text-[#777]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </p>
                </div>
              </div>

              <div className="flex justify-end items-end">
                <div className="flex items-center w-11/12 md:w-4/5 gap-2">
                  <div className="w-full bg-[#FFDECC]  rounded-xl p-2 gap-2 ">
                    <div className="flex justify-between items-center gap-2 text-[#3F3F3F] ">
                      <h2 className="text-base font-semibold">James</h2>
                      <span className="text-sm font-light">10:35 Am</span>
                    </div>
                    <p className="text-sm font-normal tracking-wide text-[#777]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting.
                    </p>
                  </div>
                  <img
                    src="/assets/chatuser.png"
                    alt="chat user image"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
              </div>

              <div className="w-full flex justify-between items-center gap-3 mt-10 bg-grey_bg md:bg-transparent p-1 rounded-xl">
                <input
                  type="text"
                  className="w-11/12 p-3 md:bg-grey_bg md:rounded-xl placeholder:text-[#433E3E] text-base font-medium"
                  placeholder="Type your message here..."
                />
                <img
                  src="/assets/record.png"
                  alt="Recorder Icon"
                  className="w-4"
                />
              </div>
            </div>
          </div>

          {/* Team Memer Email  */}
          <div className="shadow-customshadow min-h-fit	 w-2/6 rounded-xl p-3 hidden lg:flex flex-col">
            <button className="bg-primary rounded-lg p-2 text-center text-white w-full font-medium text-lg mb-3">
              Team Members
            </button>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2 text-[#8E8D8D] text-lg font-medium flex-wrap">
                <input type="radio" name="option1" />
                Williamson67890@gmail.com
              </li>
              <li className="flex items-center gap-2 text-[#8E8D8D] text-lg font-medium flex-wrap">
                <input type="radio" name="option1" />
                Williamson67890@gmail.com
              </li>
              <li className="flex items-center gap-2 text-[#8E8D8D] text-lg font-medium flex-wrap">
                <input type="radio" name="option1" />
                James 6999@gmail.com
              </li>
              <li className="flex items-center gap-2 text-[#8E8D8D] text-lg font-medium flex-wrap">
                <input type="radio" name="option1" />
                Williamson67890@gmail.com
              </li>
              <li className="flex items-center gap-2 text-[#8E8D8D] text-lg font-medium flex-wrap">
                <input type="radio" name="option1" />
                James 6999@gmail.com
              </li>
              <li className="flex items-center gap-2 text-[#8E8D8D] text-lg font-medium flex-wrap">
                <input type="radio" name="option1" />
                Williamson67890@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Collaboration;
