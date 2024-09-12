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
              <div className="contentOfBlog text-xl px-5 py-9 font-medium opacity-90 ">
                <p>
Traveling to Amsterdam with my friends was the perfect post-graduation celebration. The city's mix of history and modern vibes had always intrigued us, and we were ready to dive in. Here's a snapshot of our first day in Amsterdam.

<h5 className="text-3xl my-[30px]">Morning: Canal Cruise and Pancake Feast</h5>

We started our day with a canal cruise, drifting through Amsterdam’s beautiful waterways. The boat ride was a chill way to see the city’s iconic gabled houses and bridges. After the cruise, we hit up Pancakes Amsterdam for breakfast. Their Dutch pancakes were next-level, with toppings like strawberries, whipped cream, cheese, and bacon. It was the perfect fuel for our adventures.

<h5 className="text-3xl my-[30px]">Afternoon: Art, History, and Biking</h5>

Our next stop was the Van Gogh Museum. Seeing his vibrant paintings up close was surreal. From there, we walked to the Anne Frank House, which was a moving experience. Walking through the secret annex where Anne Frank hid during the war gave us a powerful glimpse into history.

In the afternoon, we rented bikes and rode through the city. Amsterdam is super bike-friendly, and cycling along the canals and through the bustling squares felt incredibly freeing.

<h5 className="text-3xl my-[30px]">Evening: Foodhallen and Red Light District</h5>

For dinner, we went to Foodhallen, a trendy indoor food market. We tried a bit of everything, from Dutch bitterballen to Vietnamese spring rolls, all while sipping on local craft beer. The place had a great vibe and was perfect for chilling out.

Later, we explored the Red Light District. It was buzzing with energy and packed with tourists. We wandered through the narrow streets, soaking up the unique atmosphere and historic buildings.

<h5 className="text-3xl my-[30px]">Night: Canal Reflections</h5>

We wrapped up our day sitting by a quiet canal, reflecting on our amazing experiences. The water shimmered under the moonlight, and we talked about our favorite moments while planning the rest of our trip. Amsterdam had already captured our hearts, and we couldn't wait to see more.

Our first day in Amsterdam was a whirlwind of art, history, food, and fun. The city’s charm and energy made it an unforgettable start to our adventure.
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
