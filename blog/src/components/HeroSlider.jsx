import React from "react";
import { register } from "swiper/element/bundle";
import { Categories } from "../content/Categories";
register();

function HeroSlider() {
  return (
    <>
      <div className="h-full">
        <swiper-container
          slides-per-view={1}
          speed={500}
          loop={true}
          navigation={true}
          pagination={true}
          style={{ height: "100%" }}
        >
          {Categories.map((category) =>
              (<swiper-slide key={category.title}>
                <img
                  src={category.img}
                  alt={category.title}
                  className=" absolute top-0 object-cover w-full h-full opacity-50"
                />
                <div className="h-full w-full flex flex-col justify-center items-center px-28">
                  <h3 className="text-9xl opacity-95 text-blush font-allison font-semibold tracking-wider">
                    {category.title}
                  </h3>
                  <p className="text-xl opacity-90  text-blush font-medium text-center">
                    {category.text}
                  </p>
                </div>
              </swiper-slide>)
            
          )}
        </swiper-container>
      </div>
    </>
  );
}

export default HeroSlider;
