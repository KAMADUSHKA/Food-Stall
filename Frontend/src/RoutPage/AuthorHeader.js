import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../componant/Header'
import Footer from '../componant/Footer'

export default function AuthorHeader() {
  return (
    <div>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}
