import { Navigate, Outlet } from "react-router-dom";
import { RUTAS_PRIVADAS } from "../../router/router";
import Navbar from "../Navbar";

const PublicRoute: React.FC = () => {
  const isAuth = true;

  if (isAuth) {
    return <Navigate to={RUTAS_PRIVADAS.HOME} />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PublicRoute;
