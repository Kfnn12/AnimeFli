import axios from "axios";
import * as React from "react";
import { RouteObject } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const LandingPage = React.lazy(() => import("../pages/Landing"));
const AnimeDetailsPage = React.lazy(() => import("../pages/AnimeDetails"));

const routesObject: RouteObject[] = [
  {
    element: <Layout />,
    shouldRevalidate: ({ currentUrl }) => {
      return currentUrl.pathname === "/:id";
    },
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: ":id",
        loader: async ({ params, request }) => {
          return axios.get(`https://gogoanime.consumet.org/anime-details/${params.id}`).then((res) => res.data)
        },
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
