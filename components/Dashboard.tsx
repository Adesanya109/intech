import { CSSProperties } from "react";
import DonutChart from "./DonutChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import { claimsData, data, policiesData, sampleData, tiles } from "@/constants";

type TileProp = {
  title: string;
  value: number;
  bgColor?: CSSProperties;
};

const Tile = ({ title, value, bgColor }: TileProp) => {
  const backgroundColorStyle = bgColor;

  return (
    <div
      className=" text-black p-5 rounded-lg flex items-center flex-col text-3xl font-semibold shadow-2xl gap-4 w-48"
      style={backgroundColorStyle}
    >
      <p>{title}</p>
      <p className="text-4xl font-bold">{value}</p>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <div className=" w-full flex justify-between">
        {" "}
        {tiles.map((tile) => (
          <Tile title={tile.title} value={tile.value} bgColor={tile.bgColor} />
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-7">
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

export default Dashboard;
