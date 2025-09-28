import CountUp from "react-countup";
import React from "react";
const Counter = ({ value, label }) => {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/\d/g, "");

  return (
    <div
      className=" rounded-xl flex items-center justify-center 
      transition-all duration-300 "
      
    >
      <div className="flex flex-col ">
        <h1 className="text-4xl font-extrabold 
             text-white">
          <CountUp
            start={0}
            end={numericValue}
            duration={4}
            separator=","
            useEasing
          />
          {suffix}
        </h1>
        <p className="text-white text-2xl font-medium">{label}</p>
      </div>
    </div>
  );
};

export default Counter;