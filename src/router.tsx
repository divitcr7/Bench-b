import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import { Home,About,Industry,Onboarding } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/industry", element: <Industry /> },
      { path: "/onboarding", element: <Onboarding /> },
    
    ],
  },
]);

export default router