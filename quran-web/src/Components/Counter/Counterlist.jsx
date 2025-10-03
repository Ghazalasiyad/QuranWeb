import Counter from "./Counter";
import React from "react";
const stats = [
  { value: "65+", label: "Doctors" },
  { value: "20+", label: "Exams" },
  { value: "500+", label: "Placements" },
  { value: "80+", label: "Visas" },
];

const CounterList = () => {
  return (
    <div className=" py-12 flex justify-start">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6  px-4">
        {stats.map((stat, index) => (
          <Counter key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default CounterList;