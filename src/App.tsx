import "./App.css";

import { Outlet } from "react-router-dom";

import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      {/* to dynamically render current route */}
      <Outlet />
    </>
  );
}

export default App;
