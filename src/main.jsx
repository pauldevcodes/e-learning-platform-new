import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Suspense, lazy } from "react";
import { Circles } from "react-loader-spinner";

// import Home from "./pages/Home";
const Home = lazy(() => import('./pages/Home'))
import Error from "./pages/Error";
const About = lazy(() => import('./pages/About'))
const CyberSecurity = lazy(() => import('./pages/CyberSecurity'))
const Security = lazy(() => import('./pages/Security'))
import Faq from "./pages/Faq";
import Mentorship from "./pages/Mentorship";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element:
          <Suspense fallback={
            <div className=" h-screen flex flex-col items-center justify-center">
              <Circles
                height="80"
                width="80"
                color="#f97316"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>}
          >
            <Home />
          </Suspense>,
      },
      {
        path: "about",
        element:
          <Suspense fallback={
            <div className=" h-screen flex flex-col items-center justify-center">
              <Circles
                height="80"
                width="80"
                color="#f97316"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          }>
            <About />
          </Suspense>
      },
      {
        path: "cybersecurity",
        element:
          <Suspense fallback={
            <div className=" h-screen flex flex-col items-center justify-center">
              <Circles
                height="80"
                width="80"
                color="#f97316"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          }>
            <CyberSecurity />
          </Suspense>,
      },
      {
        path: "security-training",
        element:
          <Suspense fallback={
            <div className=" h-screen flex flex-col items-center justify-center">
              <Circles
                height="80"
                width="80"
                color="#f97316"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          }>
            <Security />
          </Suspense>,
      },
      {
        path: "mentorship",
        element: <Mentorship />
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
