"use client";

import React, { useState } from "react";
import Leads from "./Leads";
import Marketing from "./Marketing";
import Engineers from "./Engineers";
import CustomerSupport from "./CustomerSupport";

function OurTeam() {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="my-20 ">
      <h1 className="text-center sm:text-5xl text-4xl font-bold my-5 dark:text-[#56d2ff] text-[#125875]">
        Our Team
      </h1>
      <nav className="flex justify-center lg:p-10  py-4 font-bold  ">
        <div className="sm:mr-4 m-1 text-[17px] font-semibold lg:font-bold">
          <button
            className={`btn btn-danger p-1 sm:px-5 px-2  team-switch-border  sm:text-xl  lg:font-bold  rounded-3xl ${
              activeTab === 1
                ? "text-white bg-orange-500 font-bold  border-2 border-orange-500"
                : "text-black bg-white font-bold  border-2 border-black"
            } `}
            onClick={() => handleTabClick(1)}
          >
            Leads
          </button>
        </div>{" "}
        <div className="sm:mr-4 m-1 text-[17px] font-semibold lg:font-bold">
          <button
            className={`btn btn-danger p-1 sm:px-5 px-2  team-switch-border  sm:text-xl  lg:font-bold  rounded-3xl ${
              activeTab === 2
                ? "text-white bg-orange-500 font-bold  border-2 border-orange-500"
                : "text-black bg-white font-bold  border-2 border-black"
            } `}
            onClick={() => handleTabClick(2)}
          >
            Engineers
          </button>
        </div>{" "}
        <div className="sm:mr-4 m-1 text-[17px] font-semibold lg:font-bold">
          <button
            className={`btn btn-danger p-1 sm:px-5 px-2  team-switch-border  sm:text-xl  lg:font-bold  rounded-3xl ${
              activeTab === 3
                ? "text-white bg-orange-500 font-bold  border-2 border-orange-500"
                : "text-black bg-white font-bold  border-2 border-black"
            } `}
            onClick={() => handleTabClick(3)}
          >
            Marketing
          </button>
        </div>{" "}
        <div className="sm:mr-4 m-1 text-[17px] lg:font-bold font-semibold">
          <button
            className={`btn btn-danger p-1 sm:px-5 px-2  team-switch-border sm:text-xl  lg:font-bold   rounded-3xl ${
              activeTab === 4
                ? "text-white bg-orange-500 font-bold  border-2 border-orange-500"
                : "text-black bg-white font-bold  border-2 border-black"
            } `}
            onClick={() => handleTabClick(4)}
          >
            Support
          </button>
        </div>{" "}
      </nav>
      <div
        className="tabcontent bg-light"
        style={{ display: activeTab === 1 ? "block" : "none" }}
      >
        {" "}
        <Leads />
      </div>
      <div
        className="tabcontent bg-light"
        style={{ display: activeTab === 2 ? "block" : "none" }}
      >
        <Engineers />
      </div>
      <div
        className="tabcontent bg-light"
        style={{ display: activeTab === 3 ? "block" : "none" }}
      >
        <Marketing />
      </div>
      <div
        className="tabcontent bg-light"
        style={{ display: activeTab === 4 ? "block" : "none" }}
      >
        <CustomerSupport />
      </div>
    </div>
  );
}

export default OurTeam;
