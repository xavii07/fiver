import { Stack } from "@mui/system";
import { Container, Typography } from "@mui/material";
import { useCallback, useEffect, useMemo } from "react";
import { IconPencilPlus, IconEyeEdit } from "@tabler/icons-react";

import BotonComponent from "../../components/Boton";
import { RUTAS_PRIVADAS } from "../../router/router";
import { useVehiculos } from "../../hooks/useVehiculos";
import Loader from "../../components/Loader";
import TablaComponent from "../../components/Tabla";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { IVehiculo } from "../../interfaces/vehiculo";

interface VehiculoRowTable {
  original: {
    id: number;
    estado: boolean;
  };
}

const VehiculosPage: React.FC = () => {
  const {
    vehiculos,
    isloading,
    getVehiculos,
    updateEstadoVehiculo,
    getVehiculoById,
    setEditvehiculo,
  } = useVehiculos();

  const navigate = useNavigate();

  useEffect(() => {
    memorizedGetVehiculos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const memorizedGetVehiculos = useCallback(() => {
    getVehiculos();
  }, [getVehiculos]);

  const handleUpdateEstado = async (id: number, estado: boolean) => {
    await updateEstadoVehiculo(id, estado);
  };

  const handleUpdateVehiculo = async (id: number) => {
    const vehiculo = await getVehiculoById(id);
    setEditvehiculo(vehiculo as IVehiculo);
    navigate(`${RUTAS_PRIVADAS.REGISTRO_VEHICULO}`);
  };

  const columns = useMemo(
    () => [
      {
        id: "imagenes",
        header: "Imagen",
        accessorKey: "imagenes",
        cell: ({
          cell,
        }: {
          cell: {
            getValue: () => string;
          };
        }) => {
          const imagenes = cell?.getValue();
          const primeraImagen =
            imagenes && imagenes.length > 0 ? imagenes[0] : null;

          return primeraImagen ? (
            <img src={primeraImagen} alt="Vehiculo" width={50} height={30} />
          ) : null;
        },
      },
      {
        id: "placa",
        header: "Placa",
        accessorKey: "placa",
      },
      {
        id: "marca",
        header: "Marca",
        accessorKey: "Marca.nombre",
      },
      {
        id: "modelo",
        header: "Modelo",
        accessorKey: "modelo",
      },
      {
        id: "transmision",
        header: "Trasmisión",
        accessorKey: "transmision",
      },
      {
        id: "color",
        header: "Color",
        accessorKey: "color",
      },
      {
        id: "tipo",
        header: "Tipo",
        accessorKey: "tipo",
      },
      {
        id: "anio",
        header: "Año",
        accessorKey: "anio",
      },
      {
        id: "precioHora",
        header: "$ Hora",
        accessorKey: "precioHora",
        cell: ({
          cell,
        }: {
          cell: {
            getValue: () => string;
          };
        }) => <p style={{ textAlign: "center" }}>${cell.getValue()}</p>,
      },
      {
        id: "precioDia",
        header: "$ Día",
        accessorKey: "precioDia",
        cell: ({
          cell,
        }: {
          cell: {
            getValue: () => string;
          };
        }) => <p>${cell.getValue()}</p>,
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
              <span style={{ background: "green", padding: "0.4rem" }}>
                Activo
              </span>
            ) : (
              <span style={{ background: "red", padding: "0.4rem" }}>
                Inactivo
              </span>
            )}
          </Typography>
        ),
      },
      {
        id: "acciones",
        header: "Acciones",
        accessorKey: "acciones",
        cell: ({ row }: { row: VehiculoRowTable }) => (
          <Stack direction="row">
            <button
              className="bg-transparent icon"
              type="button"
              onClick={() => handleUpdateVehiculo(row.original.id)}
            >
              <IconPencilPlus size={18} color={"#7552cc"} />
            </button>
            <button
              className="bg-transparent icon"
              type="button"
              onClick={() =>
                handleUpdateEstado(row.original.id, row.original.estado)
              }
            >
              <IconEyeEdit size={18} color={"#002754"} />
            </button>
          </Stack>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const data = useMemo(() => vehiculos, [vehiculos]);

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
        Vehiculos fiver
      </Typography>
      {isloading ? (
        <Loader />
      ) : (
        <>
          <TablaComponent
            columns={columns}
            data={data}
            totalData={totalData}
            nombre="Vehiculos"
          />
          <div
            style={{ width: "100%", marginTop: "2rem", paddingBottom: "4rem" }}
          >
            <BotonComponent
              titulo="Agregar vehiculo"
              to={`${RUTAS_PRIVADAS.REGISTRO_VEHICULO}`}
            />
          </div>
        </>
      )}
    </Container>
  );
};

export default VehiculosPage;
