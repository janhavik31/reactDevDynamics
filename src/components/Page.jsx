import React, { useState } from "react";
import Image from "../assets/icon64.png";
import StackedBarChart from "./StackedBarchart";
import sampleData from "../fdata/sample-data.json";

function Page() {
  const developers = sampleData.data.AuthorWorklog.rows;
  const [selectedDeveloper, setSelectedDeveloper] = useState(developers[0]);

  return (
    <div className="bg-custom-gradient min-h-screen flex flex-col ">

      <div className="flex m-3 px-2">
        <img src={Image} alt="TeamWorks Logo" />
        <h1 className="text-lg font-semibold my-auto">TeamWorks</h1>
      </div>

      <div className="mx-auto py-1">
          <h1 className=" text-xl underline">Choose Developer</h1>
        </div>

      <div className="flex items-center justify-center py-2">
        <div className="flex divide-x divide-gray-800 m-2">
          <button
            onClick={() => setSelectedDeveloper(developers[0])}
            className="px-6 md:px-7 py-3 md:py-4 font-sans text-xs md:text-base font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-l-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20"
            type="button"
          >
            Dev One
            <span className=" font-thin normal-case">
              <p> Rishi </p>
            </span>
          </button>
          <button
            onClick={() => setSelectedDeveloper(developers[1])}
            className="px-6 md:px-7 py-3 md:py-4 font-sans text-xs md:text-base font-bold text-center text-gray-900 uppercase align-middle transition-all select-none hover:bg-gray-900/10 active:bg-gray-900/20"
            type="button"
          >
            Dev Two
            <span className=" font-thin normal-case">
              <p> Ritik </p>
            </span>
          </button>
          <button
            onClick={() => setSelectedDeveloper(developers[2])}
            className="px-6 md:px-7 py-3 md:py-4 font-sans text-xs md:text-base font-bold text-center text-gray-900 uppercase align-middle transition-all select-none hover:bg-gray-900/10 active:bg-gray-900/20"
            type="button"
          >
            Dev Three
            <span className=" font-thin normal-case">
              <p> Avijit </p>
            </span>
          </button>
          <button
            onClick={() => setSelectedDeveloper(developers[3])}
            className="px-6 md:px-7 py-3 md:py-4 font-sans text-xs md:text-base font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-r-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20"
            type="button"
          >
            Dev Four
            <span className=" font-thin normal-case">
              <p> Arvind </p>
            </span>
          </button>
        </div>
      </div>
      <div className="lg:w-[930px] w-full max-w-full h-[500px] flex mx-auto bg-[#d6cfcf] bg-opacity-40 rounded-3xl 
      p-5 border-black border-2 border-opacity-10">
        <StackedBarChart developer={selectedDeveloper} />
      </div>
    </div>
  );
}

export default Page;
