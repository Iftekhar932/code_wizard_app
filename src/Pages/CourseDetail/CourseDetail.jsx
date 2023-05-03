import React from "react";
import { useLoaderData } from "react-router-dom";
import FAQ from "../FAQ/FAQ";

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
      <article className="border border-black-100 border-t-0 shadow-xl w-3/4 p-8 mt-4 mx-auto flex flex-col place-items-center">
        <picture>
          <img src={img} alt={title} className="rounded-full" />
        </picture>

        <p className="m-4 capitalize font-bold text-2xl">{title}</p>
        <p className="font-semibold text-xl">{fullDescription}</p>
        <picture>
          <img src="" alt="" />
        </picture>
        <FAQ />
      </article>
    </div>
  );
};

export default CourseDetail;
