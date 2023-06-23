import { Button, Container } from "@mui/material";
import HeaderComponent from "../../components/Header";
import { useVehiculos } from "../../hooks/useVehiculos";
import { IVehiculo } from "../../interfaces/vehiculo";
import { useMarcas } from "../../hooks/useMarcas";
import CardVehiculo from "../../components/CardVehiculo";
import PaginationPage from "../../components/PaginationPage";

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
        <h3 style={{ marginTop: "5rem" }}>
          Contamos con las marcas mas populares del Ecuador
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-evenly",
          }}
        >
          {marcas.map((marca) => (
            <div key={marca.id}>
              <img src={marca.imagen} width={70} height={55} />
              <h4 style={{ textAlign: "center", color: "#999" }}>
                {marca.nombre}
              </h4>
            </div>
          ))}
        </div>
      </Container>
      <Container style={{ marginBottom: "5rem", marginTop: "5rem" }}>
        {vehiculos.map((vehiculo: IVehiculo) => (
          <div key={vehiculo.id}>
            <CardVehiculo vehiculo={vehiculo} />
          </div>
        ))}
        <PaginationPage />
      </Container>
    </Container>
  );
};

export default HomePage;
