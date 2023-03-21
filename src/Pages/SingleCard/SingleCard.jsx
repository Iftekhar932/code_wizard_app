import React from "react";

const SingleCard = ({ singleData }) => {
  const { duration, fullDescription, img, miniDesc, ratings, title } =
    singleData;

  return (
    <div className="card pt-4 w-96 shadow-xl">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">{title}</h2>
        <p>{miniDesc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
