import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('./public/home/hero.jpg')] bg-cover h-screen bg-center  flex flex-col justify-center ">
        <div className="">
          <h1 className="hero-title ">
            No matter where you’re going to, we’ll take you there
          </h1>
        </div>
        <div className=" mx-auto   flex flex-col gap-5 mt-20 justify-self-start items-center md:flex-row  px-5     py-6 md:h-[102px]   backdrop-blur-sm bg-[#F3F3F399]  ">
          <div className="  border-r-2 p-3 text-white   pr-10  decoration-1 border-[#D0D0D0] text-center ">
            where to ?
          </div>
          <div className="  border-r-2 p-3 text-white   pr-10  decoration-1 border-[#D0D0D0] text-center">
            travel type
          </div>
          <div className="  border-r-2 p-3 text-white   pr-10  decoration-1 border-[#D0D0D0] text-center">
            duration
          </div>
          <button className="btn">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
