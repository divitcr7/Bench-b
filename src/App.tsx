import "./App.css";

import { Outlet, useLocation } from "react-router-dom";

import { Header } from "./components";
import ScrollToTop from "./components/ScrollToTop ";
import { useRef } from "react";

function App() {
  const location = useLocation();
  //routes where header not visible
  const hideHeaderRoutes = ["/onboarding"];

  const contactRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;

  return (
    <>
      <ScrollToTop />
      {/* to scroll to top on route change */}
      {/* Header component */}
      {/* Header is not visible on onboarding page */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header contactRef={contactRef} />}
      {/* to dynamically render current route */}
      <Outlet context={{ contactRef }} />
    </>
  );
}

export default App;
