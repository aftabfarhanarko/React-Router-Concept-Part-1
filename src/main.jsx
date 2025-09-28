import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Componend/Root/Root.jsx';
import Home from './Componend/Home/Home.jsx';
import Laptop from './Componend/Laptop/Laptop.jsx';
import MyList from './Componend/MyLise/MyList.jsx';

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Root />, 
    children: [
      { index: true, element: <Home /> },
      { path: "laptop", element: <Laptop /> },
      { path: "home", element: <Home /> },
      {path : "mylist", element:<MyList></MyList>}
    ] 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
