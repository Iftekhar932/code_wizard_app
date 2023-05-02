import { createBrowserRouter } from "react-router-dom";
import Main from "../Outlet/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ResetForm from "../Pages/ResetForm/ResetForm";
import SignUp from "../Pages/SignUp/SignUp";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Blog from "../Pages/Blog/Blog";
import CourseDetail from "../Pages/CourseDetail/CourseDetail";

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
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => {
          return fetch("http://localhost:5000/courses");
        },
      },

      {
        path: "/courses/:category",
        element: <Courses></Courses>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/courses/${params.category}`);
        },
      },
      {
        path: "/courseDetail/:id",
        element: <CourseDetail></CourseDetail>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/courseDetail/${params.id}`);
        },
      },
    ],
  },
]);
