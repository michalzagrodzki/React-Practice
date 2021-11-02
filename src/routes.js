
import React from "react";
import Home from "./Routes/Home";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/exercise/:name",
    component: React.lazy(() => import("./Routes/Exercise")),
  },
];