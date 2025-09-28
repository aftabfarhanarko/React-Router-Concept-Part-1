import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Componend/Root/Root.jsx";
import Home from "./Componend/Home/Home.jsx";
import Laptop from "./Componend/Laptop/Laptop.jsx";
import MyList from "./Componend/MyLise/MyList.jsx";
import Users from "./Componend/Users/Users.jsx";
import Suspience from "./Componend/Suspiencs/Suspience.jsx";
import Clones from "./Componend/Clones/Clones.jsx";
import Post from "./Componend/Post/Post.jsx";
import DisplayPostid from "./Componend/Post/DisplayPostid.jsx";

const userpa = fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
  res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "laptop", element: <Laptop /> },
      { path: "home", element: <Home /> },
      { path: "mylist", element: <MyList></MyList> },
      {
        path: "users",
        loader: async () =>
          await fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<h2>Data Loding......</h2>}>
            <Suspience userpa={userpa}></Suspience>
          </Suspense>
        ),
      },
      {
        path: "users/:usersId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
        Component: Clones,
      },
      {
        path: "post",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Post,
      },
      {
        path: "post/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: DisplayPostid,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
