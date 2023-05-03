import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ singleData }) => {
  const { id, duration, fullDescription, img, miniDesc, ratings, title } =
    singleData;
  return (
    <div className="card pt-4 w-96 shadow-xl border border-base-200">
      <figure>
        <img src={img} alt={title} className="rounded-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">{title}</h2>
        <p>{miniDesc}</p>
        <Link to={`/courseDetail/${id}`} className="btn btn-primary">
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
