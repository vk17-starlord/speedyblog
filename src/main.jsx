import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Navbar from './components/common/Navbar.jsx';
import Editor from './views/Editor.jsx';
import BlogContext from './context/BlogContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: `/editor/:blogid`,
    Component:Editor,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BlogContext>
   <RouterProvider router={router} />
  </BlogContext>
  </React.StrictMode>,
)
