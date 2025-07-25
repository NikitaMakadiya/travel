import React from "react";

const Flightlog = () => {
  return (
    <div class="flex gap-4 p-4 bg-gray-300 rounded-lg w-full mx-auto justify-evenly ">
      <img
        src="./public/home/fly1.png"
        className="h-20 w-20 object-contain  grayscale opacity-70"
        alt=""
      />
      <img
        src="./public/home/fly2.png"
        className="h-20 w-20 object-contain grayscale opacity-70"
        alt=""
      />
      <img
        src="./public/home/fly3.png"
        className="h-20 w-20 object-contain grayscale opacity-70"
        alt=""
      />
      <img
        src="./public/home/fly4.png"
        className="h-20 w-20 object-contain grayscale opacity-70"
        alt=""
      />
    </div>
  );
};

export default Flightlog;
