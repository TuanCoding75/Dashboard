import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import Task from "./Task/Task.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./NotFoundPage/NotFoundPage.tsx";
import Nav from "./Nav/Nav.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Nav /> }, // mettre un nav
  { path: "/tasks", element: <Task /> },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
