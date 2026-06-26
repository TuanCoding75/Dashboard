import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Exercices from "./components/Exercices/Exercices.tsx";

import Task from "./components/Task/Task.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.tsx";
import Nav from "./components/Nav/NavBar.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Nav /> }, // mettre un nav
  { path: "/tasks", element: <Task /> },
  { path: "/exercices", element: <Exercices /> },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
