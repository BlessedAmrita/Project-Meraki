// page for showing the blog post when user clickes on one blog post

import React from "react";

function Blog() {
  return (
    <>
      <div className="">
        <div className="bottom grid grid-cols-10 gap-9 min-h-[900px] h-auto overflow-x-clip">
          <div className="left col-span-9 w-full flex gap-14 overflow-y-clip h-full animate-leftSlide">
            <div className="h-full w-[1400px] bg-[#e5dadabf] ">
              <div className="image+titile bg-slate-500 h-[400px] relative">
                <img
                  src="https://i.pinimg.com/736x/08/cb/f9/08cbf90391baca454e325ccae3b608d2.jpg"
                  alt=""
                  className="object-cover w-full h-full"
                />
                <div className="h-full w-full flex flex-col justify-center items-center gap-10 bg-[#0000009c] absolute top-0 tracking-wider">
                  <h3 className="text-7xl opacity-95 text-blush font-roboto font-semibold ">
                    A Day in Amsterdam
                  </h3>
                  <p className="text-3xl font-roboto opacity-90  text-blush font-medium text-center tracking-wider">
                    <span className="font-light">by </span>Author
                  </p>
                </div>
              </div>
              <div className="contentOfBlog text-xl px-5 pt-9 font-medium opacity-90 ">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dicta nemo totam hic explicabo labore numquam minima et, a
                  nesciunt reiciendis exercitationem, ex sint at inventore ad!
                  Pariatur, quae illum beatae culpa ratione obcaecati, vitae
                  reiciendis non, excepturi repellendus voluptatem omnis tempora
                  maiores laboriosam quo? Consectetur ex molestias, incidunt
                  autem facilis beatae delectus commodi eaque ea quod
                  repellendus quaerat quia sunt maxime dignissimos! Magni
                  temporibus nemo numquam perspiciatis dolorem quos omnis
                  dignissimos eaque quasi tenetur amet maxime odit soluta ea
                  unde molestias voluptatum, et asperiores adipisci quaerat quas
                  vero, inventore sunt odio. Veritatis nisi praesentium illum
                  eveniet. Possimus sapiente vitae id.
                </p>
              </div>
            </div>
            <div className="w-[20px] h-full bg-gradient-to-t from-skyBlue to-blush rounded-full"></div>
          </div>
          <div className="col-span-1 flex justify-center overflow-x-clip">
            <div className="style-text h-full flex items-start pt-[390px] animate-meraki ">
              <h5 className="font-roboto text-8xl tracking-[90px] bg-gradient-to-r from-blush to-skyBlue bg-clip-text text-transparent transform rotate-90 ">
                MERAKI
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
