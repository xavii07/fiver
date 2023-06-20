import { Container, Typography } from "@mui/material";
import RegisterVehiculo from "../../components/RegistroVehiculo";
import { useVehiculos } from "../../hooks/useVehiculos";

const RegistroVehiculoPage: React.FC = () => {
  const { editvehiculo } = useVehiculos();
  return (
    <Container
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
        {Object.keys(editvehiculo).length !== 0
          ? "Editar vehículo"
          : "Registro de vehículo"}
      </Typography>
      <RegisterVehiculo />
    </Container>
  );
};

export default RegistroVehiculoPage;
