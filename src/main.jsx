import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllJobs from "./component/AllJobs.jsx";
import NotFound from "./component/NotFound.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/jobs", element: <AllJobs /> },
  { path: "*", element: <NotFound /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
