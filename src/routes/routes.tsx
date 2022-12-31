import * as React from "react";
import { RouteObject } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import DashboardWrapper from "../components/DashboardWrapper";
import SideNav from "../components/DashboardWrapper/SideNav";

const TestPage = React.lazy(() => import("../pages/test"));
const DashboardPage = React.lazy(() => import("../pages/Dashboard"));

const routesObject: RouteObject[] = [
  {
    element: (
      <DashboardWrapper sideNav={<SideNav />} header={<DashboardHeader />} />
    ),
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
];

export default routesObject;
