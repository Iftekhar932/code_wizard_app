import React from "react";
import SingleCard from "../SingleCard/SingleCard";
const Cards = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-3/4 bg-base-200  mx-auto place-items-center">
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
    </div>
  );
};

export default Cards;
