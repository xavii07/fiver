import { Button, Container } from "@mui/material";
import HeaderComponent from "../../components/Header";
import { useVehiculos } from "../../hooks/useVehiculos";
import { IVehiculo } from "../../interfaces/vehiculo";
import { useMarcas } from "../../hooks/useMarcas";

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
      <h1>Marcas</h1>
      {marcas.map((marca) => (
        <div key={marca.id}>
          <h2>{marca.nombre}</h2>
          <img src={marca.imagen} width={500} height={300} />
        </div>
      ))}

      <h1>Vehiculos</h1>
      <div>
        {vehiculos.map((vehiculo: IVehiculo) => (
          <div key={vehiculo.id}>
            <h2>{vehiculo.modelo}</h2>
            <img src={vehiculo.imagenes[0]} width={500} height={300} />
            <p>{vehiculo.anio}</p>
            <p>$ {vehiculo.precioDia}</p>
            <p>$ {vehiculo.precioHora}</p>
            <p>{vehiculo.descripcion}</p>
            {vehiculo.bluetooth && (
              <span style={{ border: "1px solid #000" }}>Bluetooth</span>
            )}
            {vehiculo.airbag && (
              <span style={{ border: "1px solid #000" }}>Airbag</span>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HomePage;
