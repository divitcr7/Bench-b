import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        <RouterProvider router={router}>
          <App /> 
        </RouterProvider>
      </ThemeProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
