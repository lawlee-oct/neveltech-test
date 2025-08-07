import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import _publicRoutes from "./_public";

const RootRouter: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalRouters: RouteObject[] = [..._publicRoutes];

  return useRoutes(totalRouters);
};

export default RootRouter;
