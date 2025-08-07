import React from "react";
import type { RouteObject } from "react-router-dom";

import { ROUTER_PATH } from "../constants";
import PublicLayout from "@/layouts/public/PublicLayout";

const HomeScreen = React.lazy(
  async () =>
    await import("@/screens/publicScreens").then((module) => ({
      default: module.HomeScreen,
    }))
);

const _publicRoutes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [{ path: ROUTER_PATH.HOME, element: <HomeScreen /> }],
  },
];

export default _publicRoutes;
