// import React from 'react'

import { Link, NavLink } from "react-router-dom"
import LogoutBtn from "./LogoutBtn"
import { useSelector } from "react-redux"
import Container from "../container/Container"

function Header() {
  const loginStatus=useSelector((state)=>state.loginStatus)

  return (
    <>
    <header className="h-auto py-7 px-10 bg-gradient text-blush  border-b-[1px] border-b-gray-800">
      <Container>
        <div className=" flex items-center">
      <div className="flex justify-center items-center text-2xl font-semibold">Logo</div>
      <div className="flex justify-center items-center ml-auto gap-10 text-2xl font-semibold">
        <NavLink className={`relative hover-line`} to={"/"}>Home</NavLink>
        <NavLink className={`relative hover-line`} to={"signUp"}>Sign Up</NavLink>
        <NavLink className={`relative hover-line`} to={"logIn"}>Log In</NavLink>
        {loginStatus && <LogoutBtn/> }
      </div>
      </div>
      </Container>
    </header>
    </>
  )
}

export default Header