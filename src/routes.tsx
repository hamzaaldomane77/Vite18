import {createBrowserRouter, } from "react-router-dom";
import App from "./App";
import {routes as techersroutes} from "./modules/Techers/routes/index";
import {routes as coursesrouters} from "./modules/Courses/routes/index";
import {routes as studentroutes} from "./modules/Students/routes/index";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [ ...techersroutes,...studentroutes,...coursesrouters,],
   
    },
  ]);