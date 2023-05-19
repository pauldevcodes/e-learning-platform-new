import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Error from "./pages/Error";
import CyberSecurity from "./pages/CyberSecurity";
import Security from "./pages/Security";
import Faq from "./pages/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cybersecurity",
        element: <CyberSecurity />
      },
      {
        path: "security-training",
        element: <Security />
      },
      {
        path: "faqs",
        element: <Faq />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
