import React from "react";
import { useRef,useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Categories } from "../../content/Categories";
register();

function HeroSlider() {

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            color: #e5dada;
          }
          .swiper-pagination-bullet{
            width: 14px;
            height: 14px;
            background-color:#e5dada;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

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
          autoplay={true}
          ref={swiperRef} init="false"
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


//TODO:https://dev.to/ivadyhabimana/customizing-swiperjs-prevnext-arrow-buttons-and-pagination-bullets-in-react-3gkh
//TODO: read this text for swiper color change 