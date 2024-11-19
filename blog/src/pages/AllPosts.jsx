import { useState, useEffect } from 'react';
import { Container } from '../components';
import databaseService from '../appwrite/database';
import BlogPreviewCard from "../components/BlogPreviewCard";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import { Categories } from "../content/Categories";

function AllPosts() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const allPosts = async () => {
      try {
        const posts = await databaseService.getAllPosts();

        // If you want to enrich posts with usernames
        const enrichedPosts = await Promise.all(
          posts.documents.map(async (post) => {
            try {
              const user = await databaseService.getUser(post.userId);
              return { ...post, username: user.name };
            } catch (error) {
              console.log("Error fetching username for post:", post.$id);
              return { ...post, username: "Unknown User" };
            }
          })
        );

        setResult(enrichedPosts);
      } catch (error) {
        console.log("Error fetching all posts", error);
      }
    };
    allPosts();
  }, []);

  return (
    <>
      <div className="px-2 pt-3 pb-20 bg-gradient-to-t from-[#010207] to-gray-950">
        <Container>
          <div className="flex flex-col gap-10">
            <div className="top w-full h-[250px] sm:h-[300px] relative">
              <HeroSlider />
            </div>
            <div className="bottom grid grid-cols-1 sm:grid-cols-10 gap-6 sm:gap-9">
              <div className="left col-span-1 sm:col-span-3 w-full flex flex-col gap-5 overflow-y-clip animate-layoutUp">
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
                  <h3 className="text-3xl font-semibold text-blush">Categories</h3>
                  <div className="categories-img flex flex-col gap-3">
                    {Categories.map((category) => (
                      <RenderCategories
                        key={category.title}
                        img={category.img}
                        title={category.title}
                      />
                    ))}
                  </div>
                </div>
                <div className="top-posts"></div>
              </div>

              <div className="right col-span-1 sm:col-span-6 flex justify-center animate-layoutUp">
                <div className="flex justify-center">
                  <div className="flex gap-9 flex-wrap justify-center">
                    {result.map((post) => (
                      <BlogPreviewCard
                        key={post.$id}
                        $id={post.$id}
                        featuredImage={post.featuredImage}
                        title={post.title}
                        username={post.username} // Display the username if enriched
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-span-1 hidden sm:flex justify-center overflow-x-clip">
                <div className="style-text h-full flex items-start pt-[390px] animate-meraki">
                  <h5 className="font-roboto text-8xl tracking-[90px] bg-gradient-to-r from-blush to-skyBlue bg-clip-text text-transparent transform rotate-90">
                    MERAKI
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

const RenderCategories = ({ img, title }) => {
  return (
    <>
      <div className="indv-img w-full h-[100px] relative cursor-pointer">
        <img
          src={img}
          alt={title}
          className="absolute top-0 object-cover w-full h-full opacity-50 transition-opacity duration-500 hover:opacity-100"
        />
        <div className="h-full w-full flex flex-col justify-center items-center px-28">
          <h3 className="text-2xl opacity-95 text-blush font-roboto tracking-wider font-normal pointer-events-none">
            {title}
          </h3>
        </div>
      </div>
    </>
  );
};

export default AllPosts;
