import React,{useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import { login as storeLogin } from '../store/authSlice'
import Button from "./Button"
import Input from "./Input"
import {useDispatch} from 'react-redux'
import {useForm} from "react-hook-form"


function RHFSignUp() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [error, seterror] = useState("")
    const {register,handleSubmit}=useForm()

    const signup=async(data)=>{
        seterror("")
        try {
            const session= await authService.createAccount(data)
            if(session){
                const userData=await authService.getCurrentUser()
                if(userData) dispatch(storeLogin(userData))
                navigate("/")
            }
        } catch (error) {
            seterror(error.message)
        }
    }

  return (
    <div className="">
        <div className="">
            <div className="">
                <h2>Sign up to create a new account</h2>
                <p>Already have an account ?
                    <Link to={"/login"}>
                        Log In
                    </Link>
                </p>
                {error && <p className=''>{error}</p>}
                <form onSubmit={handleSubmit(signup)}>
                    <div className="">
                        <Input
                            label="Username:"
                            type="text"
                            placeholder="Enter your Username"
                            {...register("username",{
                                required:true
                            })}
                        />
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
                            <Button type='submit' className=''>
                                Create Account
                            </Button>

                    </div>
                </form>
            </div>
        </div>
    </div>
)
}

export default RHFSignUp