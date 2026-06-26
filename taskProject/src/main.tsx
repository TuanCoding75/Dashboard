import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Exercices from "./components/Exercices/Exercices.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.tsx";
import Layout from "./components/Layout/Layout.tsx";
import Task from "./components/Task/Task.tsx";
import Exercices2 from "./components/Exercices/Exercices2.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/exercices", element: <Exercices /> },
      { path: "/exercices2", element: <Exercices2 /> },
      { path: "/tasks", element: <Task /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
