import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  // const selectedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    return document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const clickHandler = (themeName) => {
    // document.querySelector("html").dataset.theme = themeName;
    localStorage.setItem("theme", themeName);

    setTheme(themeName);
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

      {/*  */}

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {user?.photoURL ? (
              <img src={user?.photoURL} />
            ) : (
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
          ) : null}
        </ul>
      </div>

      <div className="flex-1 justify-end">
        {/*  */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user?.photoURL} />
              ) : (
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              )}
            </div>
          </label>

          {/* CHANGE THIS SECTION OPTIONS TO THEMES */}
          {/* WITH ONCLICK FUNCTION */}
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
            <li
              onClick={() => {
                clickHandler("night");
              }}
            >
              <span>Select Default Theme</span>
            </li>
          </ul>
          {/* WITH ONCLICK FUNCTION */}
          {/* CHANGE THIS SECTION OPTIONS TO THEMES */}
        </div>
      </div>
    </div>
  );
};

export default Header;
