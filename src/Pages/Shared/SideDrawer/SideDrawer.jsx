import React from "react";
import { Link } from "react-router-dom";

const SideDrawer = ({ data }) => {
  const { category } = data;
  console.log(data, category);
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
            <a>All Courses</a>
          </li>
          <li>
            <Link to={`/courses?category=${data[0].category}`}>
              Web Development
            </Link>
          </li>
          <li>
            <a>App Development</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
