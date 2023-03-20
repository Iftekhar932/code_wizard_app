import React from "react";

const SingleCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://johnsmilga.com/_next/image?url=https%3A%2F%2Fimages2.imgbox.com%2F8d%2F44%2Fm5ICZQsi_o.png&w=1920&q=100"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
