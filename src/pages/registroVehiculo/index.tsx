import { Container, Typography } from "@mui/material";
import RegisterVehiculo from "../../components/RegistroVehiculo";

const RegistroVehiculoPage: React.FC = () => {
  return (
    <Container
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
        Registro del vehiculo
      </Typography>
      <RegisterVehiculo />
    </Container>
  );
};

export default RegistroVehiculoPage;
