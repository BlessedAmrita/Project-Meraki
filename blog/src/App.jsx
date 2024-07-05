import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import { Footer, Header, Loader } from "./components/index";
import { Outlet } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginForm from "./components/LoginForm";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      authService
        .getCurrentUser()
        .then((userData) => {
          if (userData) {
            dispatch(login({ userData }));
          } else {
            dispatch(logout());
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }, 3000);
  }, []);

  return loading ? (
    <>
      <Loader />
    </>
  ) : (
    <>
      <div className=" bg-gray-900 h-auto flex flex-col items-stretch">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;

//***** TODO: make a loader
//TODO: try to use react toastify for successfull uploading of post...or succesfull logging in and logging out...
//TODO: appwrite to keep track of number of views on each blog
//TODO: appwrite to make a comment section for each of these blogs
//TODO: appwrite to be able to add tags
//TODO: to be able to type and filter according to these tags
//TODO: add a feedback form (that has some text like "hey Amrita! i just used ur <website name> website and here's what i think about it...") and it sends an email..."do give feedback kyunki bada achha lagta hai :)"
//TODO: in footer under more-information add learn about the process or the process...or maybe just explain the features
//TODO: change the swiper buttons colors
//TODO: add a go to top option
//TODO: make the header sticky and its background blur on scroll
