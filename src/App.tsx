import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import RouterLayout from "./components/RouterLayout";
import { RUTAS_PRIVADAS, RUTAS_PUBLICAS } from "./router/router";
import RegistroVehiculoPage from "./pages/registroVehiculo";
import VehiculosPage from "./pages/vehiculos";
import MarcasPage from "./pages/marcas";
import RegistroMarcaPage from "./pages/registroMarca";

function App() {
  return (
    <Routes>
      <Route path={RUTAS_PUBLICAS.HOME} element={<RouterLayout />}>
        <Route path={RUTAS_PUBLICAS.HOME} element={<HomePage />} />
        <Route
          path={RUTAS_PRIVADAS.REGISTRO_VEHICULO}
          element={<RegistroVehiculoPage />}
        />
        <Route path={RUTAS_PRIVADAS.VEHICULOS} element={<VehiculosPage />} />
        <Route path={RUTAS_PRIVADAS.MARCAS} element={<MarcasPage />} />
        <Route
          path={RUTAS_PRIVADAS.REGISTRO_MARCA}
          element={<RegistroMarcaPage />}
        />
      </Route>
      <Route path={RUTAS_PUBLICAS.LOGIN} element={<LoginPage />} />
    </Routes>
  );
}

export default App;
