import React from "react";

const Places = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="w-[250px]  md:w-[350px] bg-white  shadow-md overflow-hidden">
          <img
            src="./public/card2.jpg"
            className="w-full h-auto"
            alt="Switzerland"
          />

          <div className="text-[12px] w-full h-[36px] text-white text-center mb-2 flex justify-between items-center px-5 bg-primary">
            <p>12, September 2022</p>
            <p>120+ People</p>
          </div>

          <div className="px-3 pb-4">
            <h1 className="text-[24px] md:text-[35px] font-semibold mt-4">
              Switzerland
            </h1>

            <p className="text-[#181E4B] mt-3 md:mt-5 text-sm md:text-base">
              Qui tempore voluptate qui quia commodi rem praesentium alias et.
            </p>

            <div>
              <p className="text-[16px] md:text-[18px] mt-3 md:mt-5 font-medium">
                3,000 $ <span className="ml-2 text-yellow-500">5.0 ★</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[250px]  md:w-[350px] bg-white  shadow-md overflow-hidden">
          <img
            src="./public/card2.jpg"
            className="w-full h-auto"
            alt="Switzerland"
          />

          <div className="text-[12px] w-full h-[36px] text-white text-center mb-2 flex justify-between items-center px-5 bg-primary">
            <p>12, September 2022</p>
            <p>120+ People</p>
          </div>

          <div className="px-3 pb-4">
            <h1 className="text-[24px] md:text-[35px] font-semibold mt-4">
              Switzerland
            </h1>

            <p className="text-[#181E4B] mt-3 md:mt-5 text-sm md:text-base">
              Qui tempore voluptate qui quia commodi rem praesentium alias et.
            </p>

            <div>
              <p className="text-[16px] md:text-[18px] mt-3 md:mt-5 font-medium">
                3,000 $ <span className="ml-2 text-yellow-500">5.0 ★</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[250px]  md:w-[350px] bg-white  shadow-md overflow-hidden">
          <img
            src="./public/card2.jpg"
            className="w-full h-auto"
            alt="Switzerland"
          />

          <div className="text-[12px] w-full h-[36px] text-white text-center mb-2 flex justify-between items-center px-5 bg-primary">
            <p>12, September 2022</p>
            <p>120+ People</p>
          </div>

          <div className="px-3 pb-4">
            <h1 className="text-[24px] md:text-[35px] font-semibold mt-4">
              Switzerland
            </h1>

            <p className="text-[#181E4B] mt-3 md:mt-5 text-sm md:text-base">
              Qui tempore voluptate qui quia commodi rem praesentium alias et.
            </p>

            <div>
              <p className="text-[16px] md:text-[18px] mt-3 md:mt-5 font-medium">
                3,000 $ <span className="ml-2 text-yellow-500">5.0 ★</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mx-auto">1 2 3 ....</div>
    </>
  );
};

export default Places;
