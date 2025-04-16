import React from "react";
import { formatNumberWithCommas } from "./utils";

interface StatisticsProps {
  title: string;
  registeredTitle: string;
  registered: number;
  occupancyTitle: string;
  occupancy: number;
  activeTitle: string;
  active: number;
}
const Statistics: React.FC<StatisticsProps> = ({
  title,
  registeredTitle,
  registered,
  occupancyTitle,
  occupancy,
  activeTitle,
  active,
}) => {
  return (
    <section
      className="py-4 px-6 w-full rounded-md flex flex-col gap-2 bg-slate-200"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <h1 className=" font-sans text-xl font-[700] text-[#0d2737] ">{title}</h1>
      <div className=" flex justify-between w-full">
        <label htmlFor="" className="font-sans text-[18px] ">
          {registeredTitle}
        </label>
        <p className="font-sans text-[20px] font-bold text-[#4094c9] ">
          {formatNumberWithCommas(registered)}
        </p>
      </div>

      <div className=" flex justify-between w-full">
        <label htmlFor="" className="font-sans text-[18px] ">
          {occupancyTitle}
        </label>
        <p className="font-sans text-[20px] font-bold text-[#4094c9] ">
          {formatNumberWithCommas(occupancy)}
        </p>
      </div>

      <div className=" flex justify-between w-full">
        <label htmlFor="" className="font-sans text-[18px] ">
          {activeTitle}
        </label>
        <p className="font-sans text-[20px] font-bold text-[#4094c9] ">
          {formatNumberWithCommas(active)}
        </p>
      </div>
    </section>
  );
};

export default Statistics;
