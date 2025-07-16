import Hero from "../components/Hero";

const About = () => {
  return (
    <>
      <div className=' flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("./public/aboutimg.png")] bg-no-repeat bg-cover bg-center h-[750px]'>
        <p className="text-5xl text-center">About Us</p>
        <p className="text-5xl text-center herotext">About Us</p>
        <div></div>
      </div>

      <div className="md:w-7xl  mx-auto px-4 sm:px-6 lg:px-8 mt-15 mb-10 space-y-30">
        {/* promation section */}
        <div className="flex flex-col md:flex-row mb-20">
          <div className="w-full">
            <p className="text-[18px] text-primary font-medium ">Promotion</p>

            <h1 className="w-full">
              We Provide You Best Europe Sightseeing Tours
            </h1>
            <p className="text=[16px] mb-6">
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium internos. Non quis eius quo eligendi
              corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
              ducimus illum aut optio quibusdam!
            </p>

            <button className="hidden md:flex w-[152px] h-[58px] bg-primary text-white  justify-center items-center  rounded-[10px] ">
              view Package
            </button>
          </div>

          <div className="w-full">
            <div className="relative w-full h-full mx-auto">
              <img
                src="./public/bgimg.png"
                alt="Background Brush"
                className="absolute inset-0 w-full h-full object-contain opacity-20"
              />

              <div className="md:absolute md:inset-0 flex items-center justify-center">
                <div className="rounded-full ">
                  <div className="rounded-full border-2 border-dashed gap-[80px] border-red-300 p-2 custom-dashed-border bg-white">
                    <div className="rounded-full border-2 border-dashed border-red-300 p-2  bg-white">
                      <div className="w-72 h-72 rounded-full overflow-hidden">
                        <img
                          src="./public/about2.jpg"
                          alt="Main"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* promation section  ed*/}
        {/* video section */}
        <div>
          <img src="public/aboutvido.png" alt="" />
        </div>
        {/* video section */}
        <div className="flex gap-2 relative ">
          <div className="w-2/4">
            <img src="./public/cardabout.png" className="w-3/4" alt="" />
          </div>

          <div className="w-3/4  p-10">
            <p className="text-[18px] text-primary font-medium ">Trend</p>
            <p className="text-[40px] mb-4.5  w-3/4">Our Popular Tour Plans</p>
            <p className="text-[40px] mb-4.5 font-Volkhov w-3/4">
              Our Popular Tour Plans
            </p>
            <p className="text=[16px] mb-6  w-3/4">
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium. Et labore harum non nobis ipsum eum
              molestias mollitia et corporis praesentium a laudantium.
            </p>
            <div className="flex justify-between   w-1/2">
              <div className="relative w-20 h-20">
                <div className="w-full h-full rounded-full  border-10 border-blue-500     border-t-gray-200 shadow-inner  boxShadow: '0 4px 6px hsla(0, 0%, 0%, 0.25)  animate-spin-slow" />
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-blue-600">
                  75%
                </div>
              </div>

              <div>85</div>
              <div>45</div>
            </div>
          </div>
          <div className="bg-amber-400 absolute -top-20 -right-50  ">
            <img src="./public/abbg.png" alt="" />
          </div>
        </div>
        {/* image gallry */}

        <div className="m-auto mb-20  flex flex-col justify-center items-center">
          <p className="text-[18px] text-primary font-medium ">Trend</p>
          <p className="text-[40px] mb-4.5 font-bold font-Volkhov ">
            Our International Packages
          </p>
          <div className=" w-full   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div className='bg-[url("./public/g1.png")] bg-cover bg-center h-full w-full  flex justify-between px-5 items-end text-white'>
              <p>Barcelona</p>
              <p>$840</p>
            </div>

            <div className='bg-[url("./public/g1.png")] bg-cover bg-center h-full w-full  flex justify-between px-5 items-end text-white'>
              <p>Barcelona</p>
              <p>$840</p>
            </div>
            <div className='row-span-2 bg-[url("./public/g3.jpg")]  bg-cover bg-center h-full w-full flex justify-between px-5 items-end text-white '>
              <p>Barcelona</p>
              <p>$840</p>
            </div>
            <div className=" ">
              <img
                src="./public/g1.png"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className=" ">
              <img
                src="./public/g1.png"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className=" ">
              <img
                src="./public/g1.png"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="  ">
              <img
                src="./public/g1.png"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className=" ">
              <img
                src="./public/g1.png"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className=" ">
              <img
                src="./public/g1.png"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className=" ">
              <img
                src="./public/g1.png"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className=" ">
              <img
                src="./public/g1.png"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* image gallry end */}

      {/* promotion section */}
      <div className="w-vh m-5 h-[768px] bg-cover   bg-[url('./public/premotionbg.jpg')] py-30 flex flex-col justify-center items-center ">
        {/* <img src="./public/premotionbg.jpg" alt="" /> */}

        <p className="text-[18px] text-primary font-medium ">Premotion</p>

        <h1 className="w-[639px]">See What Our Clients Say About Us</h1>
        <div className=" relative bg- bg-white w-[538px] h-[277px] flex flex-col justify-center items-center py-10 mt-5">
          <p className="text-[12px] w-[393px] text-center mt-10">
            Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam
            et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt
            provident quo possimus impedit vel doloremque obcaecati qui ullam
            consectetur et ipsum omnis.
          </p>
          <p className="text-[12px] font-bold mt-10">
            Christine Beckam - Designer
          </p>

          <img
            className=" absolute -top-5 w-15 h-15 rounded-full object-cover border-5 border-white shadow-xl"
            src="/public/g1.png" // your image path
            alt="User"
          />
        </div>
      </div>

      {/* promotion section end */}
    </>
  );
};

export default About;
