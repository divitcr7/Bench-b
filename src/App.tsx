import "./App.css";

import { Outlet, useLocation } from "react-router-dom";

import { Header,Footer } from "@/components";

function App() {
  const location = useLocation();
  //routes where header not visible
  const hideHeaderRoutes = ["/onboarding"];
  const hideFooterRoutes = ["/onboarding"];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && (
        <Header />
      )}
      {/* to dynamically render current route */}
      <Outlet />
      {!hideFooterRoutes.includes(location.pathname) && (
        <Footer />
      )}
    </>
  );
}

export default App;
