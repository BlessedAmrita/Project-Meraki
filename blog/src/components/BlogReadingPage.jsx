// page for showing the blog post when user clickes on one blog post HERO-SLIDER + BLOG

// import React from "react";
import Blog from "./Blog";
import BlogPreviewCard from "./BlogPreviewCard";
import Container from "./container/Container";
import HeroSlider from '../components/HeroSlider/HeroSlider';
// import LoginForm from './LoginForm'

function BlogPage() {
    return (
        <>
                        {/* <div className=" fixed top-14 left-[34%] z-50">
                            <LoginForm/>
                        </div> */}
            <div className="px-2 pt-3 pb-20 bg-gradient-to-t from-[#010207] to-gray-950">
                <Container>
                    <div className=" flex flex-col gap-10">
                        {/* //TODO:add a slider here */}
                        {/* <div className="top w-full h-[300px] relative">
                            <HeroSlider/>
                        </div> */}
 {/* ---------------------BLOG COMPONENT---------------------                        */}
                        <Blog/>
 {/* ---------------------BLOG COMPONENT---------------------                        */}
                    </div>
                </Container>
            </div>
        </>
    );
}

export default BlogPage;


//Culture Entertainment Humor  technology  Travel 