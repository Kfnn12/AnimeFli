import * as React from "react";
import { RouteObject } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import DashboardWrapper from "../components/DashboardWrapper";
import SideNav from "../components/DashboardWrapper/SideNav";
import Layout from "../components/Layout/Layout";

const TestPage = React.lazy(() => import("../pages/test"));
const DashboardPage = React.lazy(() => import("../pages/Dashboard"));
const LandingPage = React.lazy(() => import("../pages/Landing"));
const AnimeDetailsPage = React.lazy(() => import("../pages/AnimeDetails"));

const routesObject: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: ":id",
        index: true,
        element: <AnimeDetailsPage />,
      },
    ],
  },

  {
    path: "*",
    element: <h1>404</h1>,
  },
];

export default routesObject;
