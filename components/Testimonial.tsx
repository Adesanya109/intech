import { testimonials } from "@/constants";
import React from "react";
import Card from "./Card";

const Testimonial = () => {
  return (
    <div className="py-7 bg-[#1c1c1c] ">
      <h2 className="font-bold text-4xl text-center my-8">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-3 pl-14">
        {testimonials.map((t) => (
          <Card description={t.description} name={t.name} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
