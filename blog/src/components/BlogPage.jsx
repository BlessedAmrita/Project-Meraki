import React from "react";
import BlogPreviewCard from "./BlogPreviewCard";
import Container from "./container/Container";
import { register } from 'swiper/element/bundle';
register();

function BlogPage() {
    return (
        <>
            <div className="px-2 pt-3 pb-20 bg-gradient-to-t from-[#010207] to-gray-950">
                <Container>
                    <div className=" flex flex-col gap-10">
                        {/* //TODO:add a slider here */}
                        <div className="top w-full h-[300px] relative">
                            <swiper-container slides-per-view={1} speed={500} loop={true} navigation={{nextEl:".custom-swiper-button",prevEl:".custom-swiper-button"}} pagination={{clickable:true,bulletClass:"custom-swiper-bullet-class",bulletActiveClass:"custom-swiper-bullet-class-active"}} style={{height:"100%"}}>
                                <swiper-slide><img
                                    src="https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="image"
                                    className=" absolute top-0 object-cover w-full h-full opacity-50"
                                />
                                    <div className="h-full w-full flex flex-col justify-center items-center px-28">
                                        <h3 className="text-9xl opacity-95 text-blush font-allison font-semibold tracking-wider">
                                            Travel
                                        </h3>
                                        <p className="text-xl opacity-90  text-blush font-medium text-center">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                                            perferendis ratione quo cupiditate enim officia, deleniti
                                            laudantium fuga beatae est qui, dolorem quidem fugit incidunt.
                                            Id laudantium voluptatibus est similique.
                                        </p>
                                    </div></swiper-slide>
                                    <swiper-slide><img
                                    src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="image"
                                    className=" absolute top-0 object-cover w-full h-full opacity-50"
                                />
                                    <div className="h-full w-full flex flex-col justify-center items-center px-28">
                                        <h3 className="text-9xl opacity-95 text-blush font-allison font-semibold tracking-wider">
                                            Technology
                                        </h3>
                                        <p className="text-xl opacity-90  text-blush font-medium text-center">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reprehenderit quisquam vero sint, iusto hic cum at expedita?
                                        </p>
                                    </div></swiper-slide>
                                    <swiper-slide><img
                                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="image"
                                    className=" absolute top-0 object-cover w-full h-full opacity-50"
                                />
                                    <div className="h-full w-full flex flex-col justify-center items-center px-28">
                                        <h3 className="text-9xl opacity-95 text-blush font-allison font-semibold tracking-wider">
                                            Sports
                                        </h3>
                                        <p className="text-xl opacity-90  text-blush font-medium text-center">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ad voluptate vero animi magnam eaque ut omnis molestias dolorum voluptas quod. Veniam in consequatur omnis voluptatibus cum voluptas voluptate fugiat!
                                        </p>
                                    </div></swiper-slide>
                                <swiper-slide><img
                                    src="https://images.pexels.com/photos/2263410/pexels-photo-2263410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="image"
                                    className=" absolute top-0 object-cover w-full h-full opacity-50"
                                />
                                    <div className="h-full w-full flex flex-col justify-center items-center px-28">
                                        <h3 className="text-9xl opacity-95 text-blush font-allison font-semibold tracking-wider">
                                            Entertainment
                                        </h3>
                                        <p className="text-xl opacity-90  text-blush font-medium text-center">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, laborum excepturi alias officia perferendis consectetur quis explicabo facere assumenda cupiditate! Eligendi excepturi nemo delectus ipsum odio odit.
                                        </p>
                                    </div></swiper-slide>
                                <swiper-slide><img
                                    src="https://images.unsplash.com/photo-1577083753695-e010191bacb5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="image"
                                    className=" absolute top-0 object-cover w-full h-full opacity-50"
                                />
                                    <div className="h-full w-full flex flex-col justify-center items-center px-28">
                                        <h3 className="text-9xl opacity-95 text-blush font-allison font-semibold tracking-wider">
                                            Culture
                                        </h3>
                                        <p className="text-xl opacity-90  text-blush font-medium text-center">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, voluptate. Aperiam ut nulla nobis a, accusamus ducimus amet labore rem?
                                        </p>
                                    </div></swiper-slide>
                                    
                            </swiper-container>

                        </div>
                        <div className="bottom grid grid-cols-10 gap-9">
                            <div className="left col-span-3 w-full  flex flex-col gap-5">
                                <div className="input w-full h-11 flex items-center opacity-90">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-[86%] h-full px-5 py-1 text-xl font-semibold"
                                    />
                                    <button className="w-[14%] h-full bg-white flex justify-center items-center p-2">
                                        <img
                                            src="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1720025892/icons8-search_y1l2e8.svg"
                                            alt="search-icon"
                                            className="h-full w-full transform transition-transform duration-300 hover:scale-125"
                                        />
                                    </button>
                                </div>
                                <div className="categories flex flex-col gap-5">
                                    <h3 className="text-3xl font-semibold text-blush">
                                        Categories
                                    </h3>
                                    <div className="categories-img flex flex-col gap-3">
                                        <div className="indv-img w-full h-[100px] relative cursor-pointer">
                                            <img
                                                src="https://images.unsplash.com/photo-1577083753695-e010191bacb5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="image"
                                                className=" absolute top-0 object-cover w-full h-full opacity-50 transition-opacity duration-500 hover:opacity-70"
                                            />
                                            <div className="h-full w-full flex flex-col justify-center items-center px-28">
                                                <h3 className="text-2xl opacity-95 text-blush font-roboto tracking-wider font-normal pointer-events-none">
                                                    Culture
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="indv-img w-full h-[100px] relative cursor-pointer">
                                            <img
                                                src="https://images.pexels.com/photos/2263410/pexels-photo-2263410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                alt="image"
                                                className=" absolute top-0 object-cover w-full h-full opacity-50 transition-opacity duration-500 hover:opacity-70"
                                            />
                                            <div className="h-full w-full flex flex-col justify-center items-center px-28">
                                                <h3 className="text-2xl opacity-95 text-blush font-roboto tracking-wider font-normal pointer-events-none">
                                                    Entertainment
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="indv-img w-full h-[100px] relative cursor-pointer">
                                            <img
                                                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="image"
                                                className=" absolute top-0 object-cover w-full h-full opacity-50 transition-opacity duration-500 hover:opacity-70"
                                            />
                                            <div className="h-full w-full flex flex-col justify-center items-center px-28">
                                                <h3 className="text-2xl opacity-95 text-blush font-roboto tracking-wider font-normal pointer-events-none">
                                                    Sports
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="indv-img w-full h-[100px] relative cursor-pointer">
                                            <img
                                                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                alt="image"
                                                className=" absolute top-0 object-cover w-full h-full opacity-50 transition-opacity duration-500 hover:opacity-70"
                                            />
                                            <div className="h-full w-full flex flex-col justify-center items-center px-28">
                                                <h3 className="text-2xl opacity-95 text-blush font-roboto tracking-wider font-normal pointer-events-none">
                                                    Technology
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="indv-img w-full h-[100px] relative cursor-pointer">
                                            <img
                                                src="https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                alt="image"
                                                className=" absolute top-0 object-cover w-full h-full opacity-50  transition-opacity duration-500 hover:opacity-70"
                                            />
                                            <div className="h-full w-full flex flex-col justify-center items-center px-28">
                                                <h3 className="text-2xl opacity-95 text-blush font-roboto tracking-wider font-normal pointer-events-none  ">
                                                    Travel
                                                </h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="top-posts"></div>
                            </div>
                            <div className="right col-span-6 flex justify-center ">
                                <div className="flex justify-center">
                                    <div className="flex gap-9 flex-wrap justify-center">
                                        <BlogPreviewCard />
                                        <BlogPreviewCard />
                                        <BlogPreviewCard />
                                        <BlogPreviewCard />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 flex justify-center    overflow-x-clip">
                                <div className="style-text h-full flex items-start pt-[387px] ">
                                    <h5 className="font-roboto text-8xl tracking-[90px] bg-gradient-to-r from-blush to-skyBlue bg-clip-text text-transparent transform rotate-90 ">MERAKI</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default BlogPage;


//Culture Entertainment Humor  technology  Travel 