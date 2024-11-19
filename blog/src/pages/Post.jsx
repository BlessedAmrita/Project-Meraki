import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import databaseService from "../appwrite/database";
import storageService from "../appwrite/storage";
import { Button, Container, Loader } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData.userData);

  console.log("Redux State:", useSelector((state) => state));
  console.log("User Data from Redux:", userData);


  const isAuthor = post?.userId && userData ? post.userId === userData.$id : false;
  // Fetch the post details
  useEffect(() => {
    if (slug) {
      databaseService
        .getPost(slug)
        .then((post) => {
          if (post) {
            setPost(post);
          } else {
            navigate("/");
          }
        })
        .catch(() => navigate("/"));
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  // Fetch the featured image preview URL
  useEffect(() => {
    if (post?.featuredImage) {
      storageService
        .getFilePreview(post.featuredImage)
        .then((url) => {
          setImageURL(url);
        })
        .catch((error) => {
          console.error("Error fetching image preview URL:", error);
        });
    }
  }, [post]);

  // Delete post functionality
  const deletePost = () => {
    if (post) {
      databaseService.deletePost(post.$id).then((status) => {
        if (status) {
          storageService.deleteFile(post.featuredImage);
          navigate("/");
        }
      });
    }
  };
  
  console.log("Post Data:", post);
  console.log("Post Author ID:", post?.userId);
  console.log("Current User ID:", userData?.$id);
  console.log("Is Author:", isAuthor);
  
  return post ? (
    <div className="h-full bg-gradient-to-b from-gray-950 to-black text-[#e5dadabf] py-5">
      <Container>
        {/* Post Content */}
        <div className="w-full mx-auto text-gray-200 rounded-xl shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
            {imageURL ? (
              <img
                src={imageURL}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-700 flex justify-center items-center">
                <p className="text-gray-400">Loading image...</p>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="h-full w-full flex flex-col justify-center items-center gap-4 sm:gap-10 bg-[#0000009c] absolute top-0 tracking-widest px-4 text-center">
                <h1 className="text-4xl sm:text-7xl opacity-95 text-blush font-roboto font-semibold">
                  {post.title}
                </h1>
                <p className="text-xl sm:text-3xl font-roboto opacity-90 text-blush font-light tracking-wider">
                  by <span className="font-medium">{post.authorName || "Unknown Author"}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Author Actions */}
          {post?.userId && isAuthor && (
  <div className="absolute top-4 right-4 sm:right-6 flex space-x-2 sm:space-x-3">
    <Link to={`/edit-post/${post.$id}`}>
      <Button bgColor="bg-green-500">Edit</Button>
    </Link>
    <Button bgColor="bg-red-500" onClick={deletePost}>
      Delete
    </Button>
  </div>
)}

          {/* Content Section */}
          <div className="px-4 py-6 sm:px-8 sm:py-10 bg-gradient-to-br from-black to-gray-950">
            <div className="content text-lg sm:text-3xl leading-relaxed sm:leading-loose font-normal opacity-90 font-montserrat tracking-[0.02em] sm:tracking-[0.08em]">
              {parse(post.content)}
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : (
    <div className="h-full flex items-center justify-center text-white">
        <Loader/>
    </div>
  );
}
