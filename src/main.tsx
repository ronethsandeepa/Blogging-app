import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import "./index.css";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      // Additional routes can be added here
    ],
  },
  { path: "login", element: <LoginPage/>},
  { path: "signup", element: <SignupPage/>}
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
