
import React from "react";
import Home from "./Routes/Home";
import Exercise from "./Routes/Exercise";

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