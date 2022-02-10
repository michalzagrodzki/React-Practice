
import React from "react";
import Home from "./Routes/Home.jsx";
import Exercise from "./Routes/Exercise.jsx";

export const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />
  },
  {
    path: "/exercise/:name",
    component: <Exercise />
  },
];