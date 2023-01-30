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
import BebeDetail from './pages/BebeDetail';
import Crew from './pages/Crew';
import Kit from './pages/Kit';


const router = createBrowserRouter([
 { 
  path: '/',
  element: <App />,
  errorElement: <NotFound />,
  children: [
    { index: true, path: '/', element: <Home /> },
    { path: '/detail', element: <BebeDetail /> },
    { path: '/crew', element: <Crew /> },
    { path: '/bebekit', element: <Kit/>},
    ],
 }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
