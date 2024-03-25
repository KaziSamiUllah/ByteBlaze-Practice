import React, {  } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './Components/Home/Home';
import Landing from './Components/Pages/Landing';
import Blogs from './Components/Pages/Blogs';
import Bookmarks from './Components/Pages/Bookmarks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children :[
      {
        path : '/',
        element : <Landing></Landing>
      },
      {
        path : '/blogs',
        element : <Blogs></Blogs>
      },
      {
        path : '/bookmarks',
        element : <Bookmarks></Bookmarks>
      }
    ]
  }


  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
