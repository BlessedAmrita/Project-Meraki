// import React from 'react'

import { Link, NavLink, useNavigate } from "react-router-dom"
import LogoutBtn from "./LogoutBtn"
import { useSelector } from "react-redux"
import Container from "../container/Container"

function Header() {
  const loginStatus=useSelector((state)=>state.loginStatus)
  const navigate=useNavigate()
  const navItems=[
    {
      name:"Home",
      slug:"/",
      active:true,
    },{
      name:"Log In",
      slug:"/logIn",
      active:!loginStatus,
    },{
      name:"Sign Up",
      slug:"/signUp",
      active:!loginStatus,
    },{
      name:"Blogs",
      slug:"/blogs",
      active:loginStatus,
    },{
      name:"Write",
      slug:"/write",
      active:loginStatus,
    }
  ]
  return (
    <>
    <header className="h-auto py-7 px-10 bg-gradient text-blush  border-b-[1px] border-b-gray-800">
      <Container>
        <nav className=" flex items-center">
      <div className="flex justify-center items-center text-6xl font-semibold font-allison tracking-wider">
        <Link to={"/"}>Meraki</Link>
      </div>
      <ul className="flex justify-center items-center ml-auto gap-10 text-2xl font-semibold">
        {navItems.map((item)=>
          item.active? (
            <li key={item.name}>
              <button onClick={()=>navigate(item.slug)} className="relative hover-line">{item.name}</button>
            </li>
          ): null
        )}


        {/* <NavLink className={`relative hover-line`} to={"/"}>Home</NavLink>
        <NavLink className={`relative hover-line`} to={"signUp"}>Sign Up</NavLink>
        <NavLink className={`relative hover-line`} to={"logIn"}>Log In</NavLink> */}

        
        {loginStatus && <LogoutBtn/> }
      </ul>
      </nav>
      </Container>
    </header>
    </>
  )
}

export default Header