import React from "react";

function Hero() {
  return (
    <div className=' flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("./src/assets/heroimg.png")] bg-no-repeat bg-cover bg-center h-[750px]'>
      <p className="text-5xl text-center">Travel with us</p>
      <div></div>
    </div>
  );
}

export default Hero;
