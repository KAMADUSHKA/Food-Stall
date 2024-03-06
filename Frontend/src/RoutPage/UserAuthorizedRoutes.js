import React, { lazy } from "react";
import Loadable from "./Loadable";
import AuthorHeader from "./AuthorHeader";
import Plans_and_Diets from "../Pages/Plans_and_Diets";
// import Dashbord from "../Pages/Dashbord";


// const Login = Loadable(lazy(()=>import("../Pages/Login"))) ;

const Dashbord = Loadable(lazy(()=>import( "../Pages/Dashbord")));


const UserAuthorizedRoutes = [
  {
    path: "/",
    element: <AuthorHeader/>,
    children:[
      {
        path: "/",
        element: <Dashbord />,
      },
      {
        path: "/Plans_and_Diets",
        element: <Plans_and_Diets/>,
      },
      {
        path:"*",
        element:<Dashbord />
      }
    ]
  }
  
  
];

export default UserAuthorizedRoutes;
