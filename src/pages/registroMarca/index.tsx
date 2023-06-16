import { Container, Typography } from "@mui/material";
import RegistroMarca from "../../components/RegistroMarca";

const RegistroMarcaPage: React.FC = () => {
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
        Registro de Marca
      </Typography>
      <RegistroMarca />
    </Container>
  );
};

export default RegistroMarcaPage;
