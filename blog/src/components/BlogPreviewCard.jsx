// import React from 'react'

function BlogPreviewCard() {
    return (
        <>
            <div className="h-[450px] w-[360px]">
                <div className="h-full w-full overflow-hidden border-b-4 border-blush relative cursor-pointer rounded-2xl transform transition-transform duration-500 hover:scale-105">
                    <img src="https://i.pinimg.com/736x/08/cb/f9/08cbf90391baca454e325ccae3b608d2.jpg" alt="image" className='h-full w-full object-cover' />
                    <div className="bottom absolute bottom-0 h-full w-full bg-gradient-to-t from-black to-[#00000000] ">
                        <div className="absolute bottom-0 px-4 py-5 flex flex-col gap-2">
                            <div className="tags nd views flex justify-between">
                                <div className="tags flex gap-3">
                                    <span className='inline-block text-[#a9e1ffcf]'>Travel</span>
                                    <span className='inline-block text-[#a9e1ffcf]'>Food</span>
                                </div>
                                <div className="views text-[#a9e1ffcf]">Views:5</div>
                            </div>
                            <div className="title text-2xl font-semibold text-blush">A Day in Amsterdam</div>
                            <div className="text-preview text-blush">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates atque dolor tempore reprehenderit perferendis nihil accusantium quisquam quasi laborum repudiandae.</p>
                            </div>
                            <div className="author text-[#a9e1ff]">
                                <p>by Author</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPreviewCard