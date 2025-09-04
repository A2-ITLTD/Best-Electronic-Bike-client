import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import { Helmet, HelmetProvider } from "@vuer-ai/react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </HelmetProvider>
  </StrictMode>
);
