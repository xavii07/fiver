import { Container, Typography } from "@mui/material";
import { useCallback, useEffect, useMemo } from "react";

import { RUTAS_PRIVADAS } from "../../router/router";
import Loader from "../../components/Loader";
import TablaComponent from "../../components/Tabla";
import { useNavigate } from "react-router-dom";
import { useReservaVehiculo } from "../../hooks/useReservaVehiculo";

const ReservaVehiculoPage: React.FC = () => {
  const { reservas, getReservasVehiculos, isloading } = useReservaVehiculo();
  console.log(reservas);

  const navigate = useNavigate();

  useEffect(() => {
    memorizedGetReservasVehiculos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const memorizedGetReservasVehiculos = useCallback(() => {
    getReservasVehiculos();
  }, [getReservasVehiculos]);

  const columns = useMemo(
    () => [
      {
        id: "id",
        header: "ID",
        accessorKey: "id",
      },
      {
        id: "fechaInicio",
        header: "Fecha Inicio",
        accessorKey: "fechaInicio",
      },
      {
        id: "horaInicio",
        header: "Hora Inicio",
        accessorKey: "horaInicio",
      },
      {
        id: "fechaFin",
        header: "Fecha Fin",
        accessorKey: "fechaFin",
      },
      {
        id: "horaFin",
        header: "Hora Fin",
        accessorKey: "horaFin",
      },
      {
        id: "precioTotal",
        header: "Precio Total",
        accessorKey: "precioTotal",
      },
      {
        id: "estado",
        header: "Estado",
        accessorKey: "estado",
        cell: ({
          cell,
        }: {
          cell: {
            getValue: () => string;
          };
        }) => (
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              fontSize: "0.7rem",
              textAlign: "center",
              padding: "0.2rem 0.5rem",
            }}
          >
            {JSON.stringify(cell.getValue()) === "true" ? (
              <span style={{ background: "#00ad45", padding: "0.2rem" }}>
                Activo
              </span>
            ) : (
              <span style={{ background: "red", padding: "0.2rem" }}>
                Inactivo
              </span>
            )}
          </Typography>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const data = useMemo(() => reservas, [reservas]);

  const totalData = useMemo(() => data.length, [data]);

  return (
    <Container
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{ textTransform: "uppercase", marginTop: "2rem" }}
      >
        Reserva de vehículos
      </Typography>
      {isloading ? (
        <Loader />
      ) : (
        <TablaComponent
          columns={columns}
          data={data}
          totalData={totalData}
          nombre="Reservas"
        />
      )}
    </Container>
  );
};

export default ReservaVehiculoPage;
