import React from "react";

const Footer = () => {
  return (
    <div className="max-w-3/4 h mx-auto flex ">
      <div className=" md:w-2/8 ">
        <div className="text-3xl font-semibold mb-5">Tavel</div>

        <div>
          <p className="mb-5 text-[16px] text-[#757095]">
            Travel helps companies manage payments easily.
          </p>
          <span>f</span>
          <span>t</span>
          <span>m</span>
        </div>
      </div>

      <div className="flex justify-between w-full ml-10">
        <div className="flex flex-col space-y-3">
          <h1 className="text-2xl font-medium">Company</h1>

          <span>AboutUS</span>
          <span>Careers</span>
          <span>Blog</span>
          <span>Pricing</span>
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="text-2xl font-medium">Destination</h1>

          <span>Maldives</span>
          <span>LosAngelas</span>
          <span>Las Vegas</span>
          <span>Torronto</span>
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="text-2xl font-medium">Join Our NewsLletter</h1>

          <input type="text" name="" id="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
