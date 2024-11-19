import { Link } from "react-router-dom";
import Container from "../container/Container";
import { FooterData } from "../../content/Footer/Footer";
import MapModal from "./MapModal";

function Footer() {
  return (
    <>
      <footer className="mt-auto font-roboto h-auto text-blush text-2xl tracking-wide bg-gradient border-t-[1px] border-t-gray-800">
        <Container>
          <div className="flex flex-col">
            {/* Top Section */}
            <div className="top flex flex-col md:flex-row justify-center w-full gap-10 md:gap-14 border-b-[1px] border-b-gray-800 pt-10 md:pt-20 pb-10">
              {/* Dynamic Footer Sections */}
              {FooterData.topText.map((list) => {
                return (
                  <div
                    key={list.title}
                    className="flex flex-col items-center text-center"
                  >
                    <h3 className="text-xl font-semibold">{list.title}</h3>
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

              {/* Find Me Section */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold">Find me at</h3>
                <ul className="text-lg text-[#b8aeae] mt-5 flex flex-col gap-3 items-center">
                  <MapModal />
                </ul>
              </div>

              {/* Social Media Section */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold">Let’s Connect!</h3>
                <ul className="mt-5 flex gap-4">
                  {FooterData.socials.map((social) => (
                    <li key={social.key}>
                      <a href={social.to} target="_blank" rel="noopener noreferrer">
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

            {/* Bottom Section */}
            <div className="bottom flex flex-col items-center text-center w-full py-10">
              <div>
                <h3 className="font-allison text-5xl md:text-8xl hover-glow">
                  Play the Game!
                </h3>
              </div>
              <div className="flex pt-5">
                <p className="text-xl md:text-2xl opacity-90">
                  Made with{" "}
                  <span className="inline-block opacity-100 animate-glow">
                    ✨
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

export default Footer;
