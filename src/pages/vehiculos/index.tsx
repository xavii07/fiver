import { Container, Typography } from "@mui/material";
import TablaComponent from "../../components/Tabla";
import { useEffect, useMemo } from "react";
import { Stack } from "@mui/system";
import { IconTrashX, IconPencilPlus, IconEyeEdit } from "@tabler/icons-react";
import "./styles.css";
import BotonComponent from "../../components/Boton";
import { RUTAS_PRIVADAS } from "../../router/router";
import { supabase } from "../../supabase/client";
import { useVehiculos } from "../../context/VehiculoContext";

const VehiculosPage: React.FC = () => {
  const { vehiculos, getVehiculos } = useVehiculos();

  useEffect(() => {
    getVehiculos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        }) => (
          <img src={cell?.getValue()} alt="imagen" width={50} height={30} />
        ),
      },
      {
        id: "placa",
        header: "Placa",
        accessorKey: "placa",
      },
      {
        id: "marca",
        header: "Marca",
        accessorKey: "marca",
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
        cell: ({ row }: { row: any }) => (
          <Stack direction="row">
            <button className="bg-transparent icon" type="button">
              <IconPencilPlus size={18} color={"#7552cc"} />
            </button>
            <button
              className="bg-transparent icon"
              type="button"
              onClick={() => handleUpdateEstado(row.original.id)}
            >
              <IconEyeEdit size={18} color={"#002754"} />
            </button>
            <button className="bg-transparent icon" type="button">
              <IconTrashX size={18} color={"#f82a53"} />
            </button>
          </Stack>
        ),
      },
    ],
    []
  );

  const data = useMemo(() => vehiculos, [vehiculos]);

  const totalData = useMemo(() => data.length, [data]);

  const handleUpdateEstado = async (id: number) => {
    try {
      const { data: item, error } = await supabase
        .from("Vehiculo")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error al obtener el elemento:", error.message);
        return;
      }

      const updatedStatus = !item.estado;
      const { data, error: updateError } = await supabase
        .from("Vehiculo")
        .update({ estado: updatedStatus })
        .eq("id", id);

      if (updateError) {
        console.error(
          "Error al actualizar el campo de estado:",
          updateError.message
        );
        return;
      }

      console.log("Campo de estado actualizado:", data);
    } catch (error) {
      console.error("Error al actualizar el campo de estado:");
    }
  };

  return (
    <Container
      sx={{
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
        Vehiculos fiver
      </Typography>
      <TablaComponent
        columns={columns}
        data={data}
        totalData={totalData}
        nombre="Vehiculos"
      />
      <div style={{ width: "100%", marginTop: "2rem", paddingBottom: "4rem" }}>
        <BotonComponent
          titulo="Agregar vehiculo"
          to={`${RUTAS_PRIVADAS.REGISTRO_VEHICULO}`}
        />
      </div>
    </Container>
  );
};

export default VehiculosPage;
