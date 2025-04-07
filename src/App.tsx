import "./App.css";

import { Outlet, useLocation } from "react-router-dom";

import { Header } from "@/components";

function App() {
  const location = useLocation();
  //routes where header not visible
  const hideHeaderRoutes = ["/onboarding"];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && (
        <Header />
      )}
      {/* to dynamically render current route */}
      <Outlet />
    </>
  );
}

export default App;
