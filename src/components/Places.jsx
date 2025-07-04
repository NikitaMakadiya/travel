import React from "react";

const Places = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[#b42d2d]">
        <div class="bg-blue-200 p-4 rounded ">
          <img src="/public/card1.png" alt="" />
          <div className="bg-primary flex justify-between text-[12px] p-2 text-white">
            <p>12 september</p>
            <p>120 people</p>
          </div>
        </div>
        <div class="bg-green-200 p-4  rounded ">Column 2</div>
      </div>
    </>
  );
};

export default Places;
