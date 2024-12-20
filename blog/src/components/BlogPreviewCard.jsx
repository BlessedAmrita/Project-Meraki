import databaseService from "../appwrite/database";
import storageService from "../appwrite/storage";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function BlogPreviewCard({ $id, featuredImage, title }) {
    const [imagePreview, setImagePreview] = useState("");
    const [authorName, setAuthorName] = useState("Unknown Author");
  
    useEffect(() => {
      if (featuredImage) {
        storageService
          .getFilePreview(featuredImage)
          .then((preview) => {
            setImagePreview(preview);
          })
          .catch((error) => {
            console.error("Error fetching file preview: ", error);
          });
      }
    }, [featuredImage]);
  
    useEffect(() => {
      databaseService
        .getPost($id) 
        .then((document) => {
          setAuthorName(document.author || document.userId || "Unknown Author");
        })
        .catch((error) => {
          console.error("Error fetching post details: ", error);
        });
    }, [$id]);
  
    return (
      <Link to={`/post/${$id}`}>
        <div className="sm:h-[450px] h-[400px] sm:w-[360px] w-[300px] ">
          <div className="h-full w-full overflow-hidden border-b-4 border-blush relative cursor-pointer rounded-2xl transform transition-transform duration-500 hover:scale-105">
            <img 
              src={imagePreview} 
              alt={title} 
              className="h-full w-full object-cover" 
            />
            <div className="bottom absolute bottom-0 h-full w-full bg-gradient-to-t from-black to-[#00000000] flex justify-center items-center">
              <div className="absolute bottom-0 px-4 py-5  flex-col gap-5 h-[100%] flex justify-center items-start w-full">
                <div className="title text-2xl xl:text-4xl font-semibold text-blush ">
                  {title}
                </div>
                {/* <div className="author text-[#a9e1ff]">
                  <p>by {authorName}</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  
  export default BlogPreviewCard;