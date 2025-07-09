import React from "react";

const PlaneTripe = () => {
  return (
    <div className=" w-full bg-[#EDEDED] p-8">
      <h1 className="text-[42px] font-bold font-logo-name text-center">
        Plane Your Trip
      </h1>
      <p className="leading-[25px] text-center">
        Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut
        magni nesciunt? Quo quidem neque iste expedita est dolo.
      </p>
      <div class="w-full">
        <input
          type="text"
          className="block mx-auto bg-[#FFFFFF] p-4 w-[359px] mt-8"
          placeholder="Search Tour"
        />
        <input
          type="text"
          className="block mx-auto bg-[#FFFFFF] p-4 w-[359px] mt-2"
          placeholder="Where To"
        />
        <input
          type="text"
          className="block mx-auto bg-[#FFFFFF] p-4 w-[359px] mt-2"
          placeholder="Search Tour"
        />
      </div>
      <div className="w-full flex flex-col items-start">
        <h1 className="text-[20px] font-bold font-logo-name mt-[26px]">
          Filter By Price
        </h1>

        <input
          type="text"
          className="block   bg-[#FFFFFF] p-4 w-[359px] mt-2  mb-2"
          placeholder="Filter "
        />
        <p className="">Price: $12 - $3600</p>

        <button className=" text-white block mx-auto py-3 px-10 mt-4 bg-primary rounded-2xl">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PlaneTripe;
