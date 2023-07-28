import useAuthContext from "../../context/LoginContext";
import CardVehiculo from "../CardVehiculo";
import { IVehiculoResponse } from "../../interfaces/vehiculo";

interface IInformacionReservaProps {
  vehiculo: IVehiculoResponse;
}

const InformacionReserva: React.FC<IInformacionReservaProps> = ({
  vehiculo,
}) => {
  const { user } = useAuthContext();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
          padding: "3rem",
        }}
      >
        <div
          style={{
            flexBasis: "100%",
            padding: "2rem",
          }}
        >
          <h3>DATOS DEL USUARIO</h3>
          <p>
            Nombre: {user.nombres} {user.apellidos}
          </p>
          <p>Cedula: {user.cedula}</p>
          <p>Email: {user.correoElectronico}</p>
          <p>Celular: {user.celular}</p>
          <p>Domicilio: {user.provincia}</p>
        </div>
        <div style={{ flexShrink: 6 }}>
          <CardVehiculo vehiculo={vehiculo} />
        </div>
      </div>
    </>
  );
};

export default InformacionReserva;
