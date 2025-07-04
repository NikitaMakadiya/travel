import { CiCalendarDate } from "react-icons/ci";

function Filter() {
  return (
    <div class="w-3/4 mx-auto p-4  h-[141px]  absolute bottom-1/30 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#F8F8F8] flex flex-col gap-5 md:flex-row   justify-between items-center ">
      <div className=" w-full flex justify-center items-center gap-2">
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
  );
}

export default Filter;
