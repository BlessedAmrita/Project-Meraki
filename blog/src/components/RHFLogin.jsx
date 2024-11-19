import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as storeLogin } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import Button from "./Button";
import Input from "./Input";

function RHFLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(storeLogin(userData));
          navigate("/");
        }
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
          Sign in to Your Account
        </h2>

        {/* Signup Link */}
        <p className="text-center text-gray-400 mb-8">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blush font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center font-semibold mb-4">
            {error}
          </p>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit(login)} className="space-y-6">
          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-400 font-medium">
              Email:
            </label>
            <Input
              className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blush"
              placeholder="Enter your email"
              type="email"
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
              placeholder="Enter your password"
              type="password"
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
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default RHFLogin;
