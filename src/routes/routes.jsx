import { createBrowserRouter } from "react-router-dom";
import Main from "../Outlet/Main";
import Cards from "../Pages/Cards/Cards";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ResetForm from "../Pages/ResetForm/ResetForm";
import SignUp from "../Pages/SignUp/SignUp";
import Courses from "../Pages/Courses/Courses";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/resetPwd",
        element: <ResetForm></ResetForm>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
    ],
  },
]);
