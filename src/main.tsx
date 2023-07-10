import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeConfig } from "./config/theme.config";
import { Toaster } from "sonner";
import { MarcaProvider } from "./context/MarcaContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { VehiculoProvider } from "./context/VehiculoContext.tsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <VehiculoProvider>
          <MarcaProvider>
            <Toaster position="top-center" richColors />
            <ThemeConfig>
              <App />
            </ThemeConfig>
          </MarcaProvider>
        </VehiculoProvider>
      </LocalizationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
