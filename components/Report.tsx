import { data, sampleData, policiesData, claimsData } from "@/constants";
import React from "react";
import DonutChart from "./DonutChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const Report = () => {
  return (
    <div>
      <div className="mt-10 flex flex-col gap-7">
        <div className="bg-black py-3">
          <p className="text-intechOrange text-left font-semibold my-3 text-3xl pl-4">
            Policies vs Claims (First Half of 2024) (million ₽)
          </p>
          <LineChart policiesData={policiesData} claimsData={claimsData} />
        </div>
        <div className="bg-black py-3">
          <p className="text-intechOrange text-left font-semibold mt-3 text-3xl pl-4">
            Policies by Gender
          </p>
          <DonutChart data={data} />
        </div>

        <div className="bg-black">
          <p className=" text-intechOrange text-left font-semibold mt-3 text-3xl pl-4">
            Claims by Policy Types (₽)
          </p>
          <BarChart data={sampleData} />
        </div>
      </div>
    </div>
  );
};

export default Report;
