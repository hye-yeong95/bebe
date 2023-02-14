import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import BebeFamily from './pages/BebeFamily';
import Crew from './pages/Crew';
import Kit from './pages/Kit';
import Apply from "./pages/Apply";


const router = createBrowserRouter([
 { 
  path: '/',
  element: <App />,
  errorElement: <NotFound />,
  children: [
    { index: true, path: '/', element: <Home /> },
    { path: '/detail', element: <BebeFamily /> },
    { path: '/crew', element: <Crew /> },
    { path: '/crew/apply', element: <Apply/>},
    { path: '/bebekit', element: <Kit/>},
    ],
 }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
