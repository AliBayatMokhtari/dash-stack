import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterProvider from "@/components/providers/router-provider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider />
  </StrictMode>
);
