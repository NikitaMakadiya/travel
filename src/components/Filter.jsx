import { CiCalendarDate } from "react-icons/ci";

function Filter() {
  return (
    <>
      <div className="bg-[#F8F8F8] md:absolute md:bottom-1/30 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2  md:h-[141px]  mt-10 gap-5 flex flex-col md:flex-row h-full w-3/4  p-4 mx-auto">
        <div className=" w-full flex justify-center items-center  gap-2">
          <div className="text-2xl">
            <CiCalendarDate />
          </div>
          <p className="md:text-[20px]">Date</p>
        </div>
        <div className=" w-full flex justify-center items-center gap-2">
          <div className="text-2xl">
            <CiCalendarDate />
          </div>
          <p className="md:text-[20px]">Price Low To high</p>
        </div>
        <div className=" w-full flex justify-center items-center gap-2">
          <div className="text-2xl">
            <CiCalendarDate />
          </div>
          <p className="md:text-[20px]">Price High To Low </p>
        </div>
        <div className=" w-full flex justify-center items-center gap-2">
          <div className="text-2xl">
            <CiCalendarDate />
          </div>
          <p className="md:text-[20px]">Name (A-z)</p>
        </div>
      </div>
    </>
  );
}

export default Filter;
