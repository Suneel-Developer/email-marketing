import React from "react";
import Link from "next/link";

const LetsStartPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 gap-2 relative">
      {/* corner images  */}

      <img
        src="/assets/Vector.png"
        alt=""
        className=" absolute top-0 left-0 w-60"
      />
      <img src="assets/leftcorner.png" alt="" className=" w-8 absolute left-0 bottom-3" />
      <img src="/assets/rightcorner.png" alt="" className=" w-8 absolute right-0 top-3" />
      {/* corner end  */}

      <img src="/assets/login.png" alt="Image" className=" w-7/12 h-64" />

      <h1 className="text-bold text-4xl text-primary my-3">E-Business</h1>
      <p className="text-[#5C5C5C] font-medium text-base text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum
      </p>
      <Link
        href="/signin"
        className="bg-primary p-3 shadow-custom text-white w-9/12 text-center rounded-lg text-xl font-medium mt-2"
      >
        Get Started
      </Link>
    </div>
  );
};

export default LetsStartPage;
