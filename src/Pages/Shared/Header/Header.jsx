import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";
import { FaUserAlt, FaSun } from "react-icons/fa";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  // on every render it sets 'data-theme' to the html tag
  useEffect(() => {
    return document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const clickHandler = (themeName) => {
    localStorage.setItem("theme", themeName); //  it stores the last theme to prevent the page from changing to default theme when page reloads
    setTheme(themeName); // to initially set the selected theme by the user
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 justify-around">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "btn btn-ghost normal-case text-xl"
              : isActive
              ? "btn btn-ghost normal-case text-xl text-violet-600"
              : ""
          }
        >
          <div className="w-12 rounded-full">
            <img src="https://i.ibb.co/pLdwbKj/a6adbb.jpg" />
          </div>
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive, isPending }) =>
            isPending
              ? "btn btn-ghost normal-case text-base"
              : isActive
              ? "btn btn-ghost normal-case text-base text-violet-600"
              : ""
          }
        >
          Courses
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "btn btn-ghost normal-case text-base"
              : isActive
              ? "btn btn-ghost normal-case text-base text-violet-600"
              : ""
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive, isPending }) =>
            isPending
              ? "btn btn-ghost normal-case text-base"
              : isActive
              ? "btn btn-ghost normal-case text-base text-violet-600"
              : ""
          }
        >
          FAQ
        </NavLink>
      </div>

      {/* NAV DROPDOWN START */}
      {/* USER PROFILE DROPDOWN START */}
      <div className="flex-1 justify-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user?.photoURL} />
              ) : (
                <FaUserAlt size="2.7em" />
              )}
            </div>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <span>toggle</span>
            </li>
            <li>
              <a>Settings</a>
            </li>
            {user?.email || user?.uid ? (
              <li>
                <Link onClick={logOut}>Logout</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>

        {/* USER PROFILE DROPDOWN END */}

        {/* THEMES DROPDOWN START */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <FaSun size="2.8em" />
            </div>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li
              onClick={() => {
                clickHandler("cupcake");
              }}
            >
              <span>Cupcake</span>
            </li>
            <li
              onClick={() => {
                clickHandler("cyberpunk");
              }}
            >
              <span>CyberPunk</span>
            </li>
            <li
              onClick={() => {
                clickHandler("dark");
              }}
            >
              <span>Dark</span>
            </li>
            <li
              onClick={() => {
                clickHandler("night");
              }}
            >
              <span>Night</span>
            </li>
            <li>
              <div className="divider mb-0 mt-0"></div>
              <span className="justify-center align-items-center">
                Select Default Theme
              </span>
            </li>
          </ul>
          {/* THEMES DROPDOWN END */}
          {/* NAV DROPDOWN END */}
        </div>
      </div>
    </div>
  );
};

export default Header;
