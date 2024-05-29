import { services } from "@/constants";
import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div className="py-7 pl-14 bg-[#1c1c1c] ">
      <h2 className="font-bold text-4xl text-center my-8">
        Why Choose InsureTech?
      </h2>
      <div className=" grid grid-cols-3 justify-between">
        {services.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
