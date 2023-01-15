import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from "react";
import Routes from "./routes";
import "./App.css"
import routesObject from "./routes/routes";
function App() {
  const router = createBrowserRouter(routesObject)
  return (
    <>
    <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          {/* <RouterProvider router={router}/> */}
          <Routes/>
        </React.Suspense>
    </BrowserRouter>
    </>
  );
}

export default App;
