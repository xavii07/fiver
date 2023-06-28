import { Container } from "@mui/material";
import HeaderComponent from "../../components/Header";
import { useVehiculos } from "../../hooks/useVehiculos";
import { IVehiculo, IVehiculoResponse } from "../../interfaces/vehiculo";
import { useMarcas } from "../../hooks/useMarcas";
import CardVehiculo from "../../components/CardVehiculo";
import PaginationPage from "../../components/PaginationPage";
import { useCallback, useEffect, useState } from "react";
import Filters from "../../components/Filters";
import "./styles.css";

const HomePage = () => {
  const { vehiculosactivos, getVehiculosActivos } = useVehiculos();
  const { marcas } = useMarcas();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    marca: "",
    minPriceHour: 0,
    minPriceDay: 0,
  });

  useEffect(() => {
    memorizedGetVehiculos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const memorizedGetVehiculos = useCallback(() => {
    getVehiculosActivos();
  }, [getVehiculosActivos]);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const filteredVehiculos = (): IVehiculo[] => {
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;

    const filterV = vehiculosactivos.filter((vehiculo) => {
      return (
        +`${vehiculo?.precioHora}` >= filters.minPriceHour &&
        +`${vehiculo?.precioDia}` >= filters.minPriceDay &&
        (filters.marca === "" ||
          vehiculo?.Marca?.nombre.toUpperCase() === filters.marca.toUpperCase())
      );
    });

    return filterV.slice(startIndex, endIndex);
  };

  let totalPages: number;
  if (
    filters.marca === "" &&
    filters.minPriceHour === 0 &&
    filters.minPriceDay === 0
  ) {
    totalPages = Math.ceil(vehiculosactivos.length / 5);
  } else {
    totalPages = Math.ceil(filteredVehiculos().length / 5);
  }

  const vehiculoMaxPriceByHour = vehiculosactivos.reduce(
    (prev, current) => {
      const prevPrecioHora = +`${prev.precioHora}`;
      const currentPrecioHora = +`${current.precioHora}`;
      return prevPrecioHora > currentPrecioHora ? prev : current;
    },
    { precioHora: 0 } as IVehiculo
  );

  const vehiculoMaxPriceByDay = vehiculosactivos.reduce(
    (prev, current) => {
      const prevPrecioDia = +`${prev.precioDia}`;
      const currentPrecioDia = +`${current.precioDia}`;
      return prevPrecioDia > currentPrecioDia ? prev : current;
    },
    { precioDia: 0 } as IVehiculo
  );

  const maxPriceByHour = vehiculoMaxPriceByHour.precioHora;
  const maxPriceByDay = vehiculoMaxPriceByDay.precioDia;

  return (
    <Container maxWidth={false} style={{ paddingLeft: 0, paddingRight: 0 }}>
      <HeaderComponent
        title="FIVER"
        description="¡Descubre la libertad sobre ruedas con FIVER! Sigue navegando y encuentra el vehículo perfecto para crear tus propios caminos y vivir aventuras sin límites."
        element={
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
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
          justifyContent: "space-between",
          marginTop: "3rem",
          border: "1px solid #ccc",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          borderRadius: "0.5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          alignItems: "center",
        }}
      >
        <Filters
          marcas={marcas}
          setFilters={setFilters}
          maxPriceByHour={+`${maxPriceByHour}`}
          maxPriceByDay={+`${maxPriceByDay}`}
        />
      </Container>
      <Container style={{ marginBottom: "8rem", marginTop: "4rem" }}>
        {totalPages > 1 && (
          <PaginationPage
            page={page}
            handleChangePage={handleChangePage}
            totalPages={totalPages}
          />
        )}
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
