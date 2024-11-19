// page for showing the blog post when user clickes on one blog post

import React from "react";

function Blog() {
  return (
    <>
      <div className="">
        <div className="bottom grid grid-cols-10 gap-9 min-h-[900px] h-auto overflow-x-clip">
          <div className="left col-span-10 w-full flex gap-14 overflow-y-clip h-full animate-reveal">
            <div className="h-full  bg-gradient-to-b from-gray-950 to-black text-[#e5dadabf] border-2 rounded-2xl overflow-clip border-[#e5dadabf]">
              <div className="image+titile bg-slate-500 h-[80vh] relative">
                <img
                  src="https://images.unsplash.com/photo-1447877980755-c3c642760061?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover w-full h-full"
                />
                <div className="h-full w-full flex flex-col justify-center items-center gap-10 bg-[#0000009c] absolute top-0 tracking-widest">
                  <h3 className="text-7xl opacity-95 text-blush font-roboto font-semibold ">
                    A Day in Amsterdam
                  </h3>
                  <p className="text-3xl font-roboto opacity-90  text-blush font-medium text-center tracking-wider">
                    <span className="font-light">by </span>Maya Voyager
                  </p>
                </div>
              </div>
              <div className="contentOfBlog text-3xl px-20 pt-20 pb-28 font-normal opacity-90 font-montserrat tracking-[0.08em] leading-loose ">
<p>
Amsterdam is one of those cities that captures your imagination long before you step foot in it. The canals, the art, the nightlife—it’s a place where history and modernity meet in the most unique way. I spent a few days exploring its nooks and crannies, and here’s a glimpse into my experience. Spoiler: it’s everything you expect, and more.

<h2 className="text-4xl mt-[90px] mb-[80px] text-blush opacity-95 font-semibold">The Charm of the Canals</h2>

Let’s start with the canals because, honestly, you can’t talk about Amsterdam without mentioning them. They’re everywhere, and each one is more beautiful than the last. Walking alongside the water, you get a sense of calm that’s hard to find in other big cities. Renting a boat and drifting through the narrow waterways is an absolute must—it’s like being in a real-life postcard.

Oh, and if you’re into photography, these canals? *Total goldmine*. Whether it’s early morning mist or the golden hour glow, you’ll end up with enough Instagram-worthy shots to last a lifetime. 

<h2 className="text-4xl mt-[90px] mb-[80px] text-blush opacity-95 font-semibold">The Food Scene: More Than Just Cheese</h2>

Okay, let’s talk food. Everyone knows about Dutch cheese (which is incredible, btw), but what surprised me was how diverse Amsterdam’s food scene is. From traditional *stroopwafels* to Indonesian *rijsttafel*—you could eat your way through several cultures without ever leaving the city.

I discovered a little gem called *Foodhallen*, which is basically a foodie’s dream come true. Think gourmet street food stalls, with everything from sushi to tacos. I spent more time here than I’d care to admit, hopping from stall to stall, tasting every possible dish. No regrets.

<h2 className="text-4xl mt-[90px] mb-[80px] text-blush opacity-95 font-semibold">Art Lover’s Paradise</h2>

Amsterdam is a city where art is woven into the very fabric of its existence. The *Van Gogh Museum* was, of course, at the top of my list, and seeing those iconic sunflowers up close was a total pinch-me moment. But the city is packed with galleries, both big and small, so if you’re an art lover, block out plenty of time for this.

*The Rijksmuseum* is another must-see, with its impressive collection of Dutch masterpieces. I got completely lost in Rembrandt’s works and could have spent the whole day just wandering through the halls.

<h2 className="text-4xl mt-[90px] mb-[80px] text-blush opacity-95 font-semibold">Biking: The Real Way to See Amsterdam</h2>

Forget walking—if you want to feel like a local, you’ve got to get on a bike. Cycling in Amsterdam is practically a rite of passage. The city is built for it, with bike lanes that are wider and more well-maintained than most car lanes in other cities. 

I rented a bike and spent an afternoon cruising around Vondelpark, a lush green oasis in the middle of the city. There’s something about biking through Amsterdam that just feels right, like you’ve been transported into some whimsical European fairytale.

<h2 className="text-4xl mt-[90px] mb-[80px] text-blush opacity-95 font-semibold">Nightlife: From Bars to Boats</h2>

When the sun goes down, Amsterdam transforms. The nightlife is legendary, and whether you’re into chill bar vibes or all-night parties, you’ll find your scene. I started one evening at a cozy pub by the canal, sipping on local craft beer (which, by the way, is ridiculously good). 

As the night went on, we ventured to a floating nightclub. Yep, you heard that right—a boat that doubles as a club, cruising through the canals while you dance the night away. Amsterdam just does things differently, and I’m here for it.

<h2 className="text-4xl mt-[90px] mb-[80px] text-blush opacity-95 font-semibold">Final Thoughts: Why Amsterdam Should Be On Your List</h2>

Amsterdam exceeded every expectation I had. It’s a city where you can do it all—immerse yourself in history, indulge in great food, experience incredible art, and live like a local, if only for a few days. It’s vibrant, laid-back, and endlessly fascinating. Whether you’re here for a weekend or a month, I guarantee this city will leave its mark on you.

Now, if you’ll excuse me, I have to go daydream about my next visit.
</p>
              </div>
            </div>
            {/* <div className="w-[20px] h-full bg-gradient-to-t from-skyBlue to-blush rounded-full"></div> */}
          </div>
          {/* <div className="col-span-1 flex justify-center overflow-x-clip">
            <div className="style-text h-full flex items-start pt-[390px] animate-meraki ">
              <h5 className="font-roboto text-8xl tracking-[90px] bg-gradient-to-r from-blush to-skyBlue bg-clip-text text-transparent transform rotate-90 ">
                MERAKI
              </h5>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Blog;
