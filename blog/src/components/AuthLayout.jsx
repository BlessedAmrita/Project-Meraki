import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {Loader} from "./index"

export default function Protected({children, authentication=true}) {
  const navigate = useNavigate()
  const loginStatus=useSelector((state)=>state.loginStatus)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if(authentication && loginStatus!==authentication){
      navigate("/login")
    }
    else if(!authentication && loginStatus !== authentication ){
      navigate("/")
    }
    setLoading(false)
  }, [loginStatus,navigate,authentication])
  
  return loading ? (
    <>
      <Loader/>
    </>
  ) : (
    <>
      {children}
    </>
  );
  
}
