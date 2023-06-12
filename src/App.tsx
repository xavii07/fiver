import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import RouterLayout from "./components/RouterLayout";
import { RUTAS_PRIVADAS, RUTAS_PUBLICAS } from "./router/router";
import RegistroVehiculoPage from "./pages/registroVehiculo";
import VehiculosPage from "./pages/vehiculos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RUTAS_PUBLICAS.HOME} element={<RouterLayout />}>
          <Route path={RUTAS_PUBLICAS.HOME} element={<HomePage />} />
          <Route
            path={RUTAS_PRIVADAS.REGISTRO_VEHICULO}
            element={<RegistroVehiculoPage />}
          />
          <Route path={RUTAS_PRIVADAS.VEHICULOS} element={<VehiculosPage />} />
        </Route>
        <Route path={RUTAS_PUBLICAS.LOGIN} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
