import React from "react";

const SideDrawer = () => {
  return (
    <div className="drawer absolute z-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {/* <!-- Page content here --> */}
      {/* <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div> */}
      <div className="drawer-side ">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a>Web Development</a>
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
