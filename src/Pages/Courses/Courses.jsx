import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import SideDrawer from "../Shared/SideDrawer/SideDrawer";

const Courses = () => {
  const data = useLoaderData();

  return (
    <div className="mt-12">
      <label htmlFor="my-drawer" className="btn btn-primary ">
        More Courses
      </label>
      <SideDrawer />
      <Cards data={data} />
    </div>
  );
};

export default Courses;
