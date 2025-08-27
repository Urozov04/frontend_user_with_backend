import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import User from "./user";

const MainRouters = () => {
  return (
    <>
      <Suspense fallback={<div>Loading ... </div>}>
        {useRoutes([
          {
            path: "/",
            element: <Layout />,
            children: [
              {
                index: true,
                element: <Home />,
              },
              {
                path: "user",
                element: <User />,
              },
            ],
          },
        ])}
      </Suspense>
    </>
  );
};

export default React.memo(MainRouters);
