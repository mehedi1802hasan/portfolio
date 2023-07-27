import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Home/Home/Main";
import Home from "../Home/Home/Home";
import Projects from "../Home/Home/Projects";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path: '/',
          element:<Home></Home>
        },{
          path:'/project',
          element:<Projects></Projects>
        }
      ]
    },
  ]);
  export default router;