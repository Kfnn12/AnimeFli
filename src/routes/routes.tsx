import axios from "axios";
import * as React from "react";
import { RouteObject } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const LandingPage = React.lazy(() => import("../pages/Landing"));
const AnimeDetailsPage = React.lazy(() => import("../pages/AnimeDetails"));
const PlayerPage = React.lazy(() => import("../pages/Player"));
const SearchPage = React.lazy(() => import("../pages/Search"));
const GenrePage = React.lazy(() => import("../pages/Genre"));

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
        loader: async ({ params, request }) => {
          return axios.get(`https://api.consumet.org/anime/gogoanime/info/${params.id}`).then((res) => res.data)
        },
        element: <AnimeDetailsPage />,
      },
      {
        path: ":id/:episode",
        loader: async ({ params, request }) => {
          return axios.get(`https://api.consumet.org/anime/gogoanime/info/${params.id}`).then((res) => res.data)
        },
        element: <PlayerPage />,
      },
      {
        path: "/search",
        element: <SearchPage/>,
        
      },
      {
        path: "search/:genre",
        element: <GenrePage/>,
        loader: async ({ params, request }) => {
          return axios.get(`https://api.consumet.org/anime/gogoanime/genre/${params.genre}`).then((res) => res.data)
        },

      }
    ],
  },

  {
    path: "*",
    element: <h1>404</h1>,
  },
];

export default routesObject;
