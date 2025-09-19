import React from "react";

const Honeymoonpacakage = () => {
  return (
    <div className="responsive-container mx-auto flex items-center md:h-screen  md:items-centermd:justify-center  flex-col md:flex-row    ">
      <div className=" md:w-1/2">
        <img
          src="\public\home\honeymoonpackimg\h1.jpg"
          className="h-[690px] w-[450px]  object-cover  rounded-tl-full rounded-tr-full"
          alt=""
        />
      </div>
      <div className="md:w-1/2  w-3/4  mt-10 space-y-3 ">
        <h2>Honeymoon Specials</h2>
        <h1>We Offer Best Services</h1>
        <p>
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium internos. Non quis eius quo eligendi corrupti
          et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
          illum aut optio quibusdam!
        </p>
        <button className="mt-3">View Packages</button>
      </div>
    </div>
  );
};

export default Honeymoonpacakage;
