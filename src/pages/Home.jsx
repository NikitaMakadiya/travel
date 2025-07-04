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

      <div className="flex flex-col  mt-18 md:flex-row w-3/4 mx-auto mb-10 bg-red-300">
        <Places />
        <PlaneTripe />
      </div>
    </>
  );
}

export default Home;
