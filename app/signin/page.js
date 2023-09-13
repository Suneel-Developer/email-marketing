import Link from "next/link";
import React from "react";

const Signin = () => {
  return (
    <div className="bg-primary md:bg-white flex w-full h-screen md:flex-row flex-col">
      {/* topbar show on mobile  */}
      <div className="px-4 py-3 text-white flex md:hidden gap-3 items-center">
        <h1 className=" font-extrabold text-2xl">Login In </h1>
        <span className=" font-bold text-2xl">/</span>
        <Link href="/signup" className=" font-light text-xl">
          SignUp
        </Link>
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
          <img src="/assets/logo.png" alt="logo" className="w-52	" />
          <div className="flex items-center gap-10">
            <h2 className="text-primary text-3xl font-black">Log in</h2>
            <Link href="/signup" className="text-black text-3xl font-medium">
              Sign Up
            </Link>
          </div>
        </div>

        {/* On Mobile Screen Show Image  */}
        <img src="/assets/Group.png" alt="Login Image" className="w-44 flex md:hidden" />

        {/* form  */}
        <form className="w-full flex flex-col mt-3 md:mt-14">
          <h1 className="text-primary text-3xl md:text-5xl font-extrabold mb-10">
            Welcome Back !
          </h1>

          {/* Email Field  */}
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full bg-grey_bg rounded-lg text-placholderText placeholder:text-placholderText placeholder:font-medium text-lg font-normal p-3 mb-5"
          />

          {/* Password Field  */}
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-grey_bg rounded-lg text-placholderText placeholder:text-placholderText placeholder:font-medium text-lg font-normal p-3 mb-5"
          />

          {/* Forgot Link  */}
          <Link
            href="#"
            className="text-right text-[#696969] text-xl md:text-2xl font-semibold"
          >
            Forgot Password ?
          </Link>

          {/* Login Button  */}
          <Link href="/dashboard" className="w-11/12 m-auto text-center bg-primary p-4 cursor-pointer shadow-custom text-white rounded-lg text-xl md:text-3xl mt-5">
            Log in
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

export default Signin;
