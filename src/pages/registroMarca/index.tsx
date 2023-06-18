import { Container, Typography } from "@mui/material";
import RegistroMarca from "../../components/RegistroMarca";
import { useMarcas } from "../../hooks/useMarcas";

const RegistroMarcaPage: React.FC = () => {
  const { editmarca } = useMarcas();

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
        {Object.keys(editmarca).length !== 0
          ? "Editar marca"
          : "Registro de Marca"}
      </Typography>
      <RegistroMarca />
    </Container>
  );
};

export default RegistroMarcaPage;
