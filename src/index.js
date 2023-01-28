import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import "./index.css";
import App from "./App";
import NotFound from './pages/NotFound';
import Care from "./pages/Care";
import Kit from "./pages/Kit";
import Mall from "./pages/Mall";

const router = createBrowserRouter([
 { 
  path: '/',
  element: <App />,
  errorElement: <NotFound />,
  children: [
    { index: true, path: '/', element: <Home /> },
    { path: '/diary', element: <Diary /> },
    { path: '/care', element: <Care /> },
    { path: '/mall', element: <Mall /> },
    { path: '/kit', element: <Kit/> },
  ]
 }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
