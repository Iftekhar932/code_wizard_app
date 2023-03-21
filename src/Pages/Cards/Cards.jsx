import React from "react";
import SingleCard from "../SingleCard/SingleCard";
const Cards = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-5 mx-auto w-full place-items-center">
      {data.map((singleData) => {
        return <SingleCard singleData={singleData} key={singleData?.id} />;
      })}
    </div>
  );
};

export default Cards;
