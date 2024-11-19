import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { login as storeLogin } from "../store/authSlice";
import Button from "./Button";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function RHFSignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const signup = async (data) => {
    setError("");
    try {
      const session = await authService.createAccount(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(storeLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh] h-auto ">
      <div className="w-[600px] bg-gray-950 bg-opacity-90 shadow-lg rounded-2xl p-10">
        {/* Title */}
        <h2 className="text-3xl text-center font-bold text-blush mb-6">
          Sign up to Create a New Account
        </h2>

        {/* Login Link */}
        <p className="text-center text-gray-400 mb-8">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-blush font-semibold hover:underline"
          >
            Log In
          </Link>
        </p>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center font-semibold mb-4">
            {error}
          </p>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSubmit(signup)} className="space-y-6">
          {/* Username Input */}
          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-400 font-medium">
              Username:
            </label>
            <Input
              className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blush"
              type="text"
              placeholder="Enter your Username"
              {...register("username", {
                required: "Username is required",
              })}
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-400 font-medium">
              Email:
            </label>
            <Input
              className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blush"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                  message: "Enter a valid email address",
                },
              })}
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-400 font-medium">
              Password:
            </label>
            <Input
              className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blush"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-3 rounded-md bg-blush text-gray-900 font-semibold text-lg hover:bg-blush-dark transition"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default RHFSignUp;
