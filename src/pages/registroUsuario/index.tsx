import { Container, Typography } from "@mui/material";
import RegistroUsuario from "../../components/RegistroUsuario";

const RegistroUsuarioPage: React.FC = () => {
  return (
    <Container
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
        Registro de Usuario
      </Typography>
      <RegistroUsuario />
    </Container>
  );
};

export default RegistroUsuarioPage;
