import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layout/Root.jsx";
import LoginForm from "./components/Login/LoginForm.jsx";
import RegisterForm from "./components/Registation/RegisterForm.jsx";
import Home from "./components/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index: true,
        Component: Home,
      },
      {
        path: '/login',
        Component: LoginForm,
      },
      {
        path: '/registation',
        Component: RegisterForm,
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
