import React from "react";
import { Link } from "react-router-dom";

const SideDrawer = ({ data }) => {
  console.log(data);
  const data2 = new Set(data.map((d) => d.category));
  console.log(data2);
  return (
    <div className="drawer absolute z-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {/* <!-- Page content here --> */}
      {/* <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div> */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/courses">All Courses</Link>
          </li>
          <li>
            <Link to={`/courses/${data2.category}`}>Web Development</Link>
          </li>
          <li>
            <Link to={`/courses/${data2.category}`}>App Development</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
