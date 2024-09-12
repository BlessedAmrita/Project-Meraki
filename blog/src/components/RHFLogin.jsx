import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login as storeLogin} from "../store/authSlice"
import Button from "./Button"
import Input from "./Input"
import {useDispatch} from 'react-redux'
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function RHFLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();
    const [error,setError] = useState(""); 

    const login = async(data)=>{
        setError("")
        try {
            const session=await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(storeLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }


  return (
    <>
        <div className="">
            <div className="">
                <div className="">
                    <h2>Sign in to your account</h2>
                    <p>Don't have an account ?
                        <Link to={"/signup"}>Sign Up</Link>
                    </p>
                    {error && <p className=''>{error}</p>}
                    <form onSubmit={handleSubmit(login)} className=''>
                        <div className="">
                            <Input
                                label="Email:"
                                placeholder="Enter your email"
                                type="email"
                                {...register("email",{
                                    required:true,
                                    pattern:{
                                        value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                        message:"Enter a valid email address"
                                    }
                                })}
                            />
                            <Input
                             label="Password:"
                             type="Password"
                             placeholder="Enter Password"
                             {...register("password",{
                                required:true,
                             })}
                            />
                            <Button
                                type='submit'
                                className=''
                            >Log In</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default RHFLogin