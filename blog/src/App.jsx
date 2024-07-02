import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { login, logout } from "./store/authSlice"
import authService from "./appwrite/auth"
import { Footer, Header, Loader } from "./components/index"
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      authService.getCurrentUser()
        .then((userData) => {
          if (userData) {
            dispatch(login({ userData }))
          } else {
            dispatch(logout())
          }
        })
        .finally(
          () => { setLoading(false) }
        )
    }, 3000)

  }, [])

  return (
    loading ?
      <>
        <Loader />
      </>
      :
      <>
        <div className=" bg-gray-950 h-screen flex flex-col items-stretch">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </>
  )
}

export default App


//***** TODO: make a loader
//TODO: try to use react toastify for successfull uploading of post...or succesfull logging in and logging out...
//TODO: appwrite to keep track of number of views on each blog
//TODO: to make a comment section for each of these blogs
//TODO: to be able to add tags 
//TODO: to be able to type and filter according to these tags

