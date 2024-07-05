import React from "react";

function LoginForm() {
  return (
    <>
      <div className="font-roboto tracking-wider">
        <div className="inline-block w-[600px] h-[700px] backdrop-blur-xl border-2 rounded-2xl border-blush border-opacity-50">
          <div className="flex flex-col h-full justify-center gap-[50px] px-[45px] ">
            <h1 className="text-center text-4xl tracking-widest text-blush font-bold">
              Log In
            </h1>
            <div className="border-b-2 border-b-blush border-opacity-50 bg-transparent text-blush text-xl font-medium tracking-widest py-1 h-[50px]">
              <input
                type="text"
                className="bg-transparent w-full h-full px-3"
                placeholder="Username"
              />
            </div>
            <div className="border-b-2 border-b-blush border-opacity-50 bg-transparent text-blush text-xl font-medium tracking-widest py-1 h-[50px]">
              <input
                type="email"
                className="bg-transparent w-full h-full px-3"
                placeholder="Email id"
              />
            </div>
            <div className="border-b-2 border-b-blush border-opacity-50 bg-transparent text-blush text-xl font-medium tracking-widest py-1 h-[50px]">
              <input
                type="password"
                className="bg-transparent w-full h-full px-3"
                placeholder="Password"
              />
            </div>
            <button className="rounded-full bg-blush h-[50px] text-center text-xl text-gray-900 font-semibold ">
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
