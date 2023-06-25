import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import RouterLayout from "./components/RouterLayout";
import { RUTAS_PRIVADAS, RUTAS_PUBLICAS } from "./router/router";
import { Suspense, lazy } from "react";
import HomePage from "./pages/home";
const RegistroVehiculoPage = lazy(() => import("./pages/registroVehiculo"));
const VehiculosPage = lazy(() => import("./pages/vehiculos"));
const MarcasPage = lazy(() => import("./pages/marcas"));
const RegistroMarcaPage = lazy(() => import("./pages/registroMarca"));
import Loader from "./components/Loader";
import VehiculoPage from "./pages/vehiculo";
import RegistroUsuarioPage from "./pages/registroUsuario";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={RUTAS_PUBLICAS.HOME} element={<RouterLayout />}>
          <Route path={RUTAS_PUBLICAS.HOME} element={<HomePage />} />
          <Route path={RUTAS_PUBLICAS.VEHICULO} element={<VehiculoPage />} />
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
        <Route
          path={RUTAS_PUBLICAS.REGISTRO_USUARIO}
          element={<RegistroUsuarioPage />}
        />
        <Route path={RUTAS_PUBLICAS.LOGIN} element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
