// import React from 'react'

import { Link } from "react-router-dom"
import Container from "../container/Container"

function Footer() {
  return (
    <>
      <footer className="mt-auto font-roboto h-auto text-blush text-2xl tracking-wide bg-gradient">
        <Container>
          <div className="flex flex-col">
        <div className="top flex justify-center w-full gap-14 border-b-[1px] border-b-gray-800 pt-20 pb-10">
            <div className=" flex flex-col items-center">
              <h3>Customers</h3>
              <ul className="text-lg text-[#b8aeae] mt-5 flex flex-col gap-3 items-center">
                <li className="relative hover-line"><Link>Feedback</Link></li>
              </ul>
            </div>
            <div className=" flex flex-col items-center">
            <h3>Company</h3>
              <ul className="text-lg text-[#b8aeae] mt-5 flex flex-col gap-3 items-center">
                <li className="relative hover-line"><Link>Home</Link></li>
                <li className="relative hover-line"><Link>Sign Up</Link></li>
              </ul>
            </div>
            <div className=" flex flex-col items-center">
            <h3>Further Information</h3>
              <ul className="text-lg text-[#b8aeae] mt-5 flex flex-col gap-3 items-center">
                <li className="relative hover-line"><Link>Terms and Condition</Link></li>
                <li className="relative hover-line"><Link>Privacy Policies</Link></li>
              </ul>
            </div>
            <div className=" flex flex-col items-center">
            <h3>Find me at</h3>
              <ul className="text-lg text-[#b8aeae] mt-5 flex flex-col gap-3 items-center">
                <li>NIT Rourkela,769002 </li>
                <img src="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1719914768/icons8-google-maps-old_kj59jx.svg"
                className="cursor-pointer h-10 hover-glow"/>
              </ul>
            </div>
            <div className=" flex flex-col items-center">
            <h3>Lets Connect!</h3>
              <ul className=" mt-5 flex gap-2">
                <li><Link ><img className="h-10 hover-glow"src="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1719913207/icons8-linkedin_lkpssl.svg" alt="" /></Link></li>
                <li><Link><img className="h-10 hover-glow"src="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1719914768/icons8-github_uztccr.svg" alt="" /></Link></li>
                <li><Link><img className="h-10 hover-glow"src="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1719914535/icons8-instagram_g6ivjs.svg" alt="" /></Link></li>
                <li><Link><img className="h-10 hover-glow"src="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1719914936/icons8-gmail-logo_fa8lgj.svg" alt="" /></Link></li>
                <li><Link><img className="h-10 hover-glow"src="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1719914768/icons8-twitterx_bbrq21.svg" alt="" /></Link></li>
              </ul>
            </div>
            
        </div>
        <div className="bottom flex flex-col items-center w-full py-10 ">
          <div className="">
            <h3 className=" font-allison text-8xl hover-glow">Play the Game !</h3>
          </div>
          <div className="flex pt-5">
            <p className="">Made with <span className="inline-block animate-glow"> ✨ </span> by P.Amrita</p>
          </div>
        </div>
        </div>
        </Container>
      </footer>
    </>
  )
}

const renderFooterList=()=>{

}

export default Footer