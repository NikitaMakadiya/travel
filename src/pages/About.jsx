import Hero from "../components/Hero";

const About = () => {
  return (
    <>
      <div className=' flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("./public/aboutimg.png")] bg-no-repeat bg-cover bg-center h-[750px]'>
        <p className="text-5xl text-center">About Us</p>
        <div></div>
      </div>

      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 mt-15 mb-10">
        <div className="flex">
          <div className="w-full">
            <p className="text-[18px] text-primary font-medium ">Promotion</p>
            <p className="text-[40px] mb-4.5 font-bold">
              We Provide You Best Europe Sightseeing Tours
            </p>
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
              {/* Background Image */}
              <img
                src="./public/bgimg.png"
                alt="Background Brush"
                className="absolute inset-0 w-full h-full object-contain opacity-20"
              />

              {/* Centered Main Image with Double Border */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer Border */}
                <div className="rounded-full  p-2 bg-white">
                  {/* Inner Border with gap */}
                  <div className="rounded-full border-2 border-dashed border-red-300 p-2 bg-white">
                    {/* Image (with gap around it) */}
                    <div className="rounded-full border-2 border-dashed border-red-300 p-2 bg-white">
                      <div className="w-72 h-72 rounded-full overflow-hidden">
                        <img
                          src="./public/aboutimg.png"
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
      </div>
    </>
  );
};

export default About;
