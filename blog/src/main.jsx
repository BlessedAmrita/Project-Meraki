import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store.js'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import { Home, LogIn, SignUp } from './components/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= <App/> >
        <Route path='' element=<Home/> />
        <Route path='signUp' element=<SignUp/> />
        <Route path='logIn' element=<LogIn/> />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
