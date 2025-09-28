import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Header from './Componend/Hearder/Header.jsx';
import Home from './Componend/Home/Home.jsx';
import Body from './Componend/Body/Body.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    Component: Header,
    children:[
      {index:true, Component:Home},
      {path:"body", Component: Body},
    ]
  },
  {
    path:"about",
    element:<div>About Me </div>
  },
  {
    path:"app",
    Component: App,
  },
  {
    path:"/app",
    element:<App></App>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
