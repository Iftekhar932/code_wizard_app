import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import SideDrawer from "../Shared/SideDrawer/SideDrawer";

const Courses = () => {
  const data = useLoaderData();
  console.log("🚀 ~ Courses ~ data:", data);

  return (
    <div className="mt-12">
      <Cards data={data} />
    </div>
  );
};

export default Courses;
