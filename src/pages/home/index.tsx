import { Button, Container } from "@mui/material";
import HeaderComponent from "../../components/Header";
import { useVehiculos } from "../../hooks/useVehiculos";
import { IVehiculo, IVehiculoResponse } from "../../interfaces/vehiculo";
import { useMarcas } from "../../hooks/useMarcas";
import CardVehiculo from "../../components/CardVehiculo";
import PaginationPage from "../../components/PaginationPage";
import { useState } from "react";
import SliderFilter from "../../components/SliderFilter";
import MarcasSelectFilter from "../../components/MarcasSelectFilter";

const HomePage = () => {
  const { vehiculos } = useVehiculos();
  const { marcas } = useMarcas();
  const [page, setPage] = useState(1);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const filteredVehiculos = (): IVehiculo[] => {
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    return vehiculos.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(vehiculos.length / 5);

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
              <p
                style={{
                  textAlign: "center",
                  color: "#666",
                  margin: 0,
                  fontSize: "0.9rem",
                }}
              >
                {marca.nombre}
              </p>
            </div>
          ))}
        </div>
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "3rem",
          border: "1px solid #ccc",
          padding: "1rem",
          alignItems: "center",
        }}
      >
        <SliderFilter />
        <MarcasSelectFilter marcas={marcas} />
      </Container>
      <Container style={{ marginBottom: "5rem", marginTop: "5rem" }}>
        {filteredVehiculos().map((vehiculo: IVehiculo) => (
          <div key={vehiculo.id}>
            <CardVehiculo vehiculo={vehiculo as IVehiculoResponse} />
          </div>
        ))}
        {totalPages > 1 && (
          <PaginationPage
            page={page}
            handleChangePage={handleChangePage}
            totalPages={totalPages}
          />
        )}
      </Container>
    </Container>
  );
};

export default HomePage;
