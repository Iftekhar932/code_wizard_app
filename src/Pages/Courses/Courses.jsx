import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import SideDrawer from "../Shared/SideDrawer/SideDrawer";

const Courses = () => {
  const data = useLoaderData();
  console.log("🚀 ~ file: Courses.jsx:8 ~ Courses ~ data:", data);

  return (
    <div className="mt-12">
      <label htmlFor="my-drawer" className="btn btn-primary ">
        More Courses
      </label>
      <SideDrawer data={data} />
      <Cards data={data} />
    </div>
  );
};

export default Courses;
