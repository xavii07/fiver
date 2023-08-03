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
import { LoginProvider } from "./context/LoginContext.tsx";
import { ReservaVehiculoProvider } from "./context/ReservaVehiculo.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <LoginProvider>
          <ReservaVehiculoProvider>
            <VehiculoProvider>
              <MarcaProvider>
                <Toaster position="top-left" richColors />
                <ThemeConfig>
                  <App />
                </ThemeConfig>
              </MarcaProvider>
            </VehiculoProvider>
          </ReservaVehiculoProvider>
        </LoginProvider>
      </LocalizationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
