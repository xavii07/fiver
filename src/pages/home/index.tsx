import { Button, Container } from "@mui/material";
import HeaderComponent from "../../components/Header";
import { useVehiculos } from "../../hooks/useVehiculos";
import { IVehiculo } from "../../interfaces/vehiculo";
import { useMarcas } from "../../hooks/useMarcas";
import CardVehiculo from "../../components/CardVehiculo";

const HomePage = () => {
  const { vehiculos } = useVehiculos();
  const { marcas } = useMarcas();

  console.log(vehiculos);

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
      <Container>
        {vehiculos.map((vehiculo: IVehiculo) => (
          <div key={vehiculo.id}>
            <CardVehiculo vehiculo={vehiculo} />
          </div>
        ))}
      </Container>
      <h3>Explore Most Popular Cars</h3>
      <Container>
        {marcas.map((marca) => (
          <div key={marca.id}>
            <h2>{marca.nombre}</h2>
            <img src={marca.imagen} width={300} height={200} />
          </div>
        ))}
      </Container>
    </Container>
  );
};

export default HomePage;
