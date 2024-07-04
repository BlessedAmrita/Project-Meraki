
import React from 'react'
import Container from '../container/Container'
import Lottie from 'lottie-react'
import blogAnimation from './blogAnimation.json'
import './buttonReflection.css'

function LandingPage() {
  return (
    <>
        <div className="h-[750px] bg-gradient-to-t from-black to-gray-900 font-roboto">
            <Container>
                <div className="h-full flex justify-between ">
                    <div className="left h-full w-auto tracking-wider flex flex-col justify-center">
                        <h3 className="tracking-widest text-9xl text-blush font-bold font-allison flex flex-col gap-3">
                            <span>Passionate Writing,</span><span>Heartfelt Sharing</span>
                        </h3>
                        <h5 className="my-6 text-2xl text-blush opacity-90 tracking-widest">A haven for thoughtful explorers.</h5>
                        <button className="mt-9 text-2xl text-blush border-[1px] border-blush font-medium rounded-full py-2 w-[200px] text-center buttonReflection">Get Started</button>
                    </div>
                    <div className="right h-full">
                        <div className="animation h-full flex items-center">
                            <Lottie animationData={blogAnimation} loop={true}/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </>
  )
}

export default LandingPage