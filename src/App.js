import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from "./Pages/Home";

const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },

  ]);
  return routes;
};

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};
export default App;
