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
import AdminPage from "./pages/admin";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={RUTAS_PRIVADAS.RESERVA} element={<ReservaPage />} />
          <Route path={RUTAS_PRIVADAS.VEHICULOS} element={<VehiculosPage />} />
          <Route path={RUTAS_PRIVADAS.HOME} element={<AdminPage />} />
          <Route path={RUTAS_PRIVADAS.MARCAS} element={<MarcasPage />} />
          <Route
            path={RUTAS_PRIVADAS.REGISTRO_MARCA}
            element={<RegistroMarcaPage />}
          />
          <Route
            path={RUTAS_PRIVADAS.REGISTRO_VEHICULO}
            element={<RegistroVehiculoPage />}
          />
        </Route>

        <Route element={<PublicRoute />}>
          <Route
            path={RUTAS_PUBLICAS.REGISTRO_USUARIO}
            element={<RegistroUsuarioPage />}
          />
          <Route path={RUTAS_PUBLICAS.LOGIN} element={<LoginPage />} />
        </Route>

        <Route element={<RouterLayout />}>
          <Route path={RUTAS_PUBLICAS.HOME} element={<HomePage />} />
          <Route path={RUTAS_PUBLICAS.VEHICULO} element={<VehiculoPage />} />

          <Route
            path="*"
            element={
              <h1 style={{ textAlign: "center" }}>
                404 Pagina no encontrada :(
              </h1>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
