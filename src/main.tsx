import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { ThemeProvider } from "./ThemeContext";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
