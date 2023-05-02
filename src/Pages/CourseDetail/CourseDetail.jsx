import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const data = useLoaderData();
  const {
    id,
    duration,
    miniDesc,
    fullDescription,
    img,
    ratings,
    category,
    subCategory,
    title,
  } = data;
  return (
    <div>
      <article></article>
    </div>
  );
};

export default CourseDetail;
