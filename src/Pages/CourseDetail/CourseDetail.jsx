import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const data = useLoaderData();
  console.log("🚀 ~ file: CourseDetail.jsx:6 ~ CourseDetail ~ data:", data);

  return (
    <div>
      <article></article>
    </div>
  );
};

export default CourseDetail;
