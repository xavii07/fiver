import { Button, Container } from "@mui/material";
import HeaderComponent from "../../components/Header";

const HomePage = () => {
  return (
    <Container maxWidth={false} style={{ paddingLeft: 0, paddingRight: 0 }}>
      <HeaderComponent
        title="FIVER"
        description="¡Descubre la libertad sobre ruedas con FIVER! Sigue navegando y encuentra el vehículo perfecto para crear tus propios caminos y vivir aventuras sin límites."
        element={
          <Button
            variant="outlined"
            sx={{ color: "#fff", borderColor: "#fff" }}
          >
            Ingresar
          </Button>
        }
      />
    </Container>
  );
};

export default HomePage;
