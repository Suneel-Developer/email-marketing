import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div className="bg-primary md:bg-white flex w-full h-screen md:flex-row flex-col">
      {/* topbar show on mobile  */}
      <div className="px-4 py-3 text-white flex md:hidden gap-3 items-center">
        <Link href="/signin" className=" font-light text-xl">
          Log In
        </Link>
        <span className=" font-bold text-2xl">/</span>
        <h1 className=" font-extrabold text-2xl">Sign Up</h1>
      </div>

      <div className="flex-1 flex items-center justify-center flex-col p-5 md:p-20 relative bg-white rounded-t-3xl ">
        {/* corner Images  */}
        <img
          src="/assets/topcornor.png"
          alt="corner"
          className=" absolute top-0 right-7 w-96 md:flex hidden"
        />

        <img
          src="/assets/bottomcorner.png"
          alt="corner"
          className="absolute bottom-0 left-7 w-96 md:flex hidden"
        />

        {/* form Container  */}
        <div className="hidden md:flex items-center justify-between w-full">
          <img src="/assets/logo.png" alt="logo" className="w-52" />
          <div className="flex items-center gap-10">
            <Link href="/signin" className="text-black text-3xl font-medium">
              Log in
            </Link>
            <h2 className="text-primary text-3xl font-black">Sign Up</h2>
          </div>
        </div>

        {/* On Mobile Screen Show Image  */}
        <img
          src="/assets/Group.png"
          alt="Login Image"
          className="w-44 flex md:hidden"
        />

        {/* form  */}
        <form className="w-full flex flex-col mt-5">
          <h1 className="text-primary text-3xl md:text-5xl font-extrabold mb-4">
            Welcome !
          </h1>

          {/* Full Name Field  */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-grey_bg rounded-lg text-placholderText placeholder:text-placholderText placeholder:font-medium text-lg font-normal p-3 mb-3"
          />

          {/* Email Field  */}
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full bg-grey_bg rounded-lg text-placholderText placeholder:text-placholderText placeholder:font-medium text-lg font-normal p-3 mb-3"
          />

          {/* Mobile Number Field  */}
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full bg-grey_bg rounded-lg text-placholderText placeholder:text-placholderText placeholder:font-medium text-lg font-normal p-3 mb-3"
          />

          {/* Password Field  */}
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-grey_bg rounded-lg text-placholderText placeholder:text-placholderText placeholder:font-medium text-lg font-normal p-3 mb-3"
          />

          {/* Confrim Password Field  */}
          <input
            type="password"
            placeholder="Confrim Password"
            className="w-full bg-grey_bg rounded-lg text-placholderText placeholder:text-placholderText placeholder:font-medium text-lg font-normal p-3 mb-3"
          />

          {/* Already have an account Link  */}
          <Link
            href="#"
            className="text-[#696969] text-lg font-semibold flex md:hidden justify-end"
          >
            Already have an account ?
          </Link>

          {/* Sign Up Button  */}
          <Link href="/dashboard" className="w-11/12 m-auto text-center bg-primary p-4 cursor-pointer shadow-custom text-white rounded-lg text-xl md:text-3xl mt-5">
            Sign Up
          </Link>
        </form>
      </div>

      {/* right side Image Container  */}
      <div className="flex-1 hidden lg:flex bg-primary items-center justify-center">
        <div className="w-10/12	flex items-center justify-center flex-col rounded-3xl p-2 m-auto bg-[#FFFFFF68] border-2 border-solid border-white border-opacity-58">
          <h1 className="text-5xl font-medium text-white mt-4">E-Business</h1>
          <img src="/assets/Group.png" alt="Image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
