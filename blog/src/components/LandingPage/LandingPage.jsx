import React from "react";
import Container from "../container/Container";
import Lottie from "lottie-react";
import blogAnimation from "./blogAnimation.json";
import "./landingPage.css";
// import LoginForm from '../LoginForm'


function LandingPage() {
  return (
    <>
    {/* <div className=" fixed top-14 left-[34%] z-50">
     <LoginForm/>
    </div> */}
      <div className="h-[750px] bg-gradient-to-t from-black to-gray-900 font-roboto">
        <Container>
          <div className="h-full flex flex-col xl:flex-row  xl:justify-between animate-reveal  ">
            <div className="left h-full w-auto tracking-wider flex flex-col justify-center ">
              <h3 className="tracking-widest text-4xl xl:text-9xl text-blush font-bold font-allison flex flex-col gap-3 text-center xl:text-left ">
                <span>Passionate Writing,</span>
                <span>Heartfelt Sharing</span>
              </h3>
              <div className="mt-6 xl:my-6 text-[14px] xl:text-2xl text-blush opacity-90 tracking-widest inline-block ">
                <h5 className=" border-r-[3px] border-r-blush  typeWriter">
                  A haven for thoughtful explorers.
                </h5>
              </div>
              <button className="mt-9 text-xl xl:text-2xl text-blush border-[1px] border-blush font-medium rounded-full py-2 w-[200px] text-center buttonGlow mx-auto xl:mx-0">
                Get Started
              </button>
            </div>
            <div className="right h-full">
              <div className="animation h-full flex items-center">
                <Lottie animationData={blogAnimation} loop={true} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
