import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import RouterLayout from "./components/RouterLayout";
import { RUTAS_PRIVADAS, RUTAS_PUBLICAS } from "./router/router";
import { Suspense, lazy } from "react";
const RegistroVehiculoPage = lazy(() => import("./pages/registroVehiculo"));
const VehiculosPage = lazy(() => import("./pages/vehiculos"));
const MarcasPage = lazy(() => import("./pages/marcas"));
const RegistroMarcaPage = lazy(() => import("./pages/registroMarca"));
const HomePage = lazy(() => import("./pages/home"));
const VehiculoPage = lazy(() => import("./pages/vehiculo"));
const ReservaPage = lazy(() => import("./pages/reserva"));
import RegistroUsuarioPage from "./pages/registroUsuario";
import Loader from "./components/Loader";

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
          <Route path={RUTAS_PRIVADAS.RESERVA} element={<ReservaPage />} />
          <Route path={RUTAS_PRIVADAS.VEHICULOS} element={<VehiculosPage />} />
          <Route path={RUTAS_PRIVADAS.MARCAS} element={<MarcasPage />} />
          <Route
            path={RUTAS_PRIVADAS.REGISTRO_MARCA}
            element={<RegistroMarcaPage />}
          />
          <Route
            path={RUTAS_PUBLICAS.REGISTRO_USUARIO}
            element={<RegistroUsuarioPage />}
          />
          <Route path={RUTAS_PUBLICAS.LOGIN} element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
