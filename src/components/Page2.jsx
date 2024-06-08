import React from "react";
import PolarAreaChart from "./PieChart.jsx";
import sampleData from "../fdata/sample-data.json";

function Page2() {
  const developer = sampleData.data.AuthorWorklog.rows[0]; // example to get the first developer

  return (
    <div
      className="bg-custom-gradient min-h-screen flex flex-col
     justify-center items-center py-5"
    >
      <h1 className=" text-xl my-4 underline">Total Activity</h1>

      <div
        className="lg:w-[930px] w-full max-w-full flex justify-around h-[500px]
        mx-auto bg-[#d6cfcf] bg-opacity-40 rounded-3xl p-5
        border-black border-2 border-opacity-10"
      >
        <PolarAreaChart developer={developer} />
      </div>
      
    </div>
  );
}

export default Page2;
