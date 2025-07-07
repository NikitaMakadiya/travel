import React from "react";
import Hero from "../components/Hero";

import Filter from "../components/Filter";
import Places from "../components/Places";
import PlaneTripe from "../components/PlaneTripe";

function Home() {
  return (
    <>
      <Hero />
      <Filter />

      {/* <div className="flex flex-col  mt-18 md:flex-row w-3/4 mx-auto mb-10 bg-red-300">


      </div> */}

      <div class=" mt-20 w-[1328px] mx-auto mb-10 grid gap-6 grid-cols-1 md:grid-cols-5 ">
        <div class=" md:col-span-3  ">
          <Places />
        </div>
        <div class="col-span-2 ">
          <PlaneTripe />
        </div>
      </div>
    </>
  );
}

export default Home;
