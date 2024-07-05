// import React from 'react'

import { Link } from "react-router-dom";
import Container from "../container/Container";
import { FooterData } from "../../content/Footer/Footer";

function Footer() {
  return (
    <>
      <footer className="mt-auto font-roboto h-auto text-blush text-2xl tracking-wide bg-gradient border-t-[1px] border-t-gray-800">
        <Container>
          <div className="flex flex-col">
            <div className="top flex justify-center w-full gap-14 border-b-[1px] border-b-gray-800 pt-20 pb-10">
              {FooterData.topText.map((list) => {
                return (
                  <div key={list.title} className=" flex flex-col items-center">
                    <h3>{list.title}</h3>
                    <ul className="text-lg text-[#b8aeae] mt-5 flex flex-col gap-3 items-center">
                      {list.list.map((item) => (
                        <li key={item.name} className="relative hover-line">
                          <Link to={item.to}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              <div className=" flex flex-col items-center">
                <h3>Find me at</h3>
                <ul className="text-lg text-[#b8aeae] mt-5 flex flex-col gap-3 items-center">
                  <li className="relative hover-line cursor-pointer">
                    NIT Rourkela,769002{" "}
                  </li>
                  <img
                    src="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1719914768/icons8-google-maps-old_kj59jx.svg"
                    className="cursor-pointer h-10 hover-glow"
                  />
                </ul>
              </div>

              <div className=" flex flex-col items-center">
                <h3>Lets Connect!</h3>
                <ul className=" mt-5 flex gap-2">
                  {FooterData.socials.map((social) => (
                    <li key={social.key}>
                      <a href={social.to} target="_blank">
                        <img
                          className="h-10 hover-glow"
                          src={social.img}
                          alt={social.key}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bottom flex flex-col items-center w-full py-10 ">
              <div className="">
                <h3 className=" font-allison text-8xl hover-glow">
                  Play the Game !
                </h3>
              </div>
              <div className="flex pt-5">
                <p className=" text-2xl opacity-90 ">
                  Made with{" "}
                  <span className="inline-block opacity-100 animate-glow">
                    {" "}
                    ✨{" "}
                  </span>{" "}
                  by P.Amrita
                </p>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

const renderFooterList = () => {};

export default Footer;
