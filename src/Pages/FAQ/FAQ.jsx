import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./FAQ.css";

const FAQ = () => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    return setRating(rate);

    // other logic
  };

  // optional callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);
  //www.youtube.com/watch?v=TNSfesnsVTk try this video link
  https: return (
    <div className="ratingBox">
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        fillStyle={{ display: "flex" }}
        // SVGstyle={{ display: "flex" }}
        // style={{ display: "flex" }}
        emptyStyle={{ display: "flex" }}
        // tooltipStyle={{ display: "flex" }}
        disableFillHover={true}
        /* Available Props */
      />
    </div>
  );
};

export default FAQ;
