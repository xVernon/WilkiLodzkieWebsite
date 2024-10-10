import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roster from "./components/Roster";

const router = createBrowserRouter([
  { path: '/', element: <Home />},
  { path: '/roster', element: <Roster />}
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
