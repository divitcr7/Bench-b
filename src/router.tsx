import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import {
  Home,
  About,
  Industry,
  Onboarding,
  BlogList,
  BlogPost,
  BlogSearchResult,
} from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "industry",
        element: <Industry />,
      },
      {
        path: "onboarding",
        element: <Onboarding />,
      },
      {
        path: "blog",
        children: [
          {
            index: true,
            element: <BlogList />,
          },
          {
            path: ":id",
            element: <BlogPost />,
          },
          {
            path: "search",
            element: <BlogSearchResult />,
          },
        ],
      },
    ],
  },
]);

export default router;
