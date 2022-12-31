import { BrowserRouter } from "react-router-dom";
import * as React from "react";
import Routes from "./routes";
import "./App.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes/>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
