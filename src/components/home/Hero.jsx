import React from "react";

const Hero = () => {
  const searchtool = ["where to", "travel type", "duration"];
  return (
    <>
      <div className="bg-[url('./public/home/hero.jpg')] bg-cover h-screen bg-center  flex flex-col justify-center ">
        <div className="">
          <h1 className="hero-title h-auto ">
            No matter where you’re going to, we’ll take you there
          </h1>
        </div>
        <div className="md:mx-[10%] mx-auto w-1/2 px-10 rounded-xl  flex flex-col gap-5 mt-10 justify-self-start items-center sm:w-fit md:flex-row md:justify-between   md:h-[15%]   p-10  backdrop-blur-sm bg-[#F3F3F399]  ">
          {searchtool.map((item, index) => (
            <div className="  border-r-2 p-3 text-white capitalize  pr-10  decoration-1 border-borderright text-center">
              {item}
            </div>
          ))}

          <button className="btn">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
