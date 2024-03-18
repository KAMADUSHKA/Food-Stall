import React, { lazy } from "react";
import Loadable from "./Loadable";
import AuthorHeader from "./AuthorHeader";
import Plans_and_Diets from "../Pages/Plans_and_Diets";
import Custom_Meals from "../Pages/Custom_Meals";
import Quick_Check_Out from "../Pages/Quick_Check_Out";
import Channel_Nutritionist from "../Pages/Channel_Nutritionist";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import SingUp from "../Pages/SingUp";
import SingUpOTP from "../Pages/SingUpOTP";
import AddFamilyMembers from "../Pages/AddFamilyMembers";
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
        path:"/Custom_Meals",
        element:<Custom_Meals/> 
      },
      {
        path:"/Quick_Check_Out",
        element:<Quick_Check_Out/> 
      },
      {
        path:"/Channel_Nutritionist",
        element:<Channel_Nutritionist/> 
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/Profile",
        element:<Profile/>
      },
      {
        path:"/SingUp",
        element:<SingUp/>
      },
      {
        path:"/SingUpOTP",
        element:<SingUpOTP/>
      },
      {
        path:"/AddFamilyMembers",
        element:<AddFamilyMembers/>
      },
      {
        path:"*",
        element:<Dashbord />
      }
    ]
  }
  
  
];

export default UserAuthorizedRoutes;
