import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeConfig } from "./config/theme.config";
import { Toaster } from "sonner";
import { MarcaProvider } from "./context/MarcaContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { VehiculoProvider } from "./context/VehiculoContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <VehiculoProvider>
        <MarcaProvider>
          <Toaster position="top-center" />
          <ThemeConfig>
            <App />
          </ThemeConfig>
        </MarcaProvider>
      </VehiculoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
