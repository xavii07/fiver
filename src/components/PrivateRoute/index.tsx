import { Navigate, Outlet } from "react-router-dom";
import { RUTAS_PUBLICAS } from "../../router/router";

import Navbar from "../Navbar";

const PrivateRoute: React.FC = () => {
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to={RUTAS_PUBLICAS.LOGIN} />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PrivateRoute;
