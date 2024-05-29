import Report from "@/components/Report";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex flex-col">
      <TopBar title="Reports" />
      <div className="flex flex-grow">
        <SideBar />
        <div className="w-full space-y-7 py-7 px-14">
          <Report />
        </div>
      </div>
    </div>
  );
};

export default page;
