import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roster from "./components/Roster";

const router = createBrowserRouter([
  { path: '/', element: <Home />},
  { path: '/season', element: <Home  />},
  { path: '/roster', element: <Roster />},
  { path: '/news', element: <Home  />},
  { path: '/info', element: <Home  />},
  { path: '/tickets', element: <Home  />},
  { path: '/shop', element: <Home  />}
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
