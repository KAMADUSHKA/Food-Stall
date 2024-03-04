import React from 'react'
import UserAuthorizedRoutes from './UserAuthorizedRoutes'
import unAuthorizedRoutes from './UnAuthorizedRoute'

import { Route, useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cards from '../Pages/Cards'
// import sample from './sample'

export default function Routes() {
//   const user = useSelector((state) => state.auth.authData)
// console.log(user) 

  // return useRoutes (user? UserAuthorizedRoutes:unAuthorizedRoutes )
  return useRoutes ( UserAuthorizedRoutes )

  // return useRoutes (sample)
  
}
