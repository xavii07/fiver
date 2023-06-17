import { Container, Typography } from "@mui/material";
import TablaComponent from "../../components/Tabla";
import { useEffect, useMemo } from "react";
import { Stack } from "@mui/system";
import { IconPencilPlus } from "@tabler/icons-react";
import "./styles.css";
import BotonComponent from "../../components/Boton";
import { RUTAS_PRIVADAS } from "../../router/router";
import { useMarcas } from "../../context/MarcaContext";

const MarcasPage: React.FC = () => {
  const { marcas, getMarcas } = useMarcas();

  useEffect(() => {
    getMarcas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = useMemo(
    () => [
      {
        id: "imagen",
        header: "Imagen",
        accessorKey: "imagen",
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
        id: "nombre",
        header: "Nombre",
        accessorKey: "nombre",
      },
      {
        id: "acciones",
        header: "Acciones",
        accessorKey: "acciones",
        cell: () => (
          <Stack direction="row">
            <button className="bg-transparent icon" type="button">
              <IconPencilPlus size={18} color={"#7552cc"} />
            </button>
          </Stack>
        ),
      },
    ],
    []
  );

  const data = useMemo(() => marcas, [marcas]);

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
      <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
        Marcas de vehiculos
      </Typography>
      <TablaComponent
        columns={columns}
        data={data}
        totalData={totalData}
        nombre="Marcas"
      />
      <div style={{ width: "100%", marginTop: "2rem", paddingBottom: "4rem" }}>
        <BotonComponent
          titulo="Agregar Marca"
          to={`${RUTAS_PRIVADAS.REGISTRO_MARCA}`}
        />
      </div>
    </Container>
  );
};

export default MarcasPage;
