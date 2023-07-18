import { Navigate, Outlet } from "react-router-dom";
import { RUTAS_PUBLICAS } from "../../router/router";

import Navbar from "../Navbar";
import useAuthContext from "../../context/LoginContext";

const PrivateRoute: React.FC = () => {
  const { isAuth } = useAuthContext();

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
