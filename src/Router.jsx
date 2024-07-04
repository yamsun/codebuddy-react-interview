import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
import Root from "./pages/Root";
import MainForm from "./components/MainForm";
import Posts from "./components/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <MainForm /> },
      { path: "/posts", element: <Posts /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
