import { useCallback, useEffect, useMemo } from "react";
import { Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { IconPencilPlus } from "@tabler/icons-react";
import { IconEyeEdit } from "@tabler/icons-react";

import { RUTAS_PRIVADAS } from "../../router/router";
import { useMarcas } from "../../hooks/useMarcas";
import BotonComponent from "../../components/Boton";
import TablaComponent from "../../components/Tabla";
import Loader from "../../components/Loader";
import "./styles.css";
import { IMarca } from "../../interfaces/marca";
import { useNavigate } from "react-router-dom";

const MarcasPage: React.FC = () => {
  const {
    marcas,
    isloading,
    updateEstadoMarca,
    setEditMarca,
    getMarcaById,
    getMarcas,
  } = useMarcas();

  const navigate = useNavigate();

  const memorizedGetMarcas = useCallback(() => {
    getMarcas();
  }, [getMarcas]);

  useEffect(() => {
    memorizedGetMarcas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdateEstado = async (id: number, estado: boolean) => {
    await updateEstadoMarca(id, estado);
  };

  const handleUpdateMarca = async (id: number) => {
    const marca = await getMarcaById(id);
    setEditMarca(marca as IMarca);
    navigate(`${RUTAS_PRIVADAS.REGISTRO_MARCA}`);
  };

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
          <div className="centrar">
            <img src={cell?.getValue()} alt="imagen" width={50} height={30} />
          </div>
        ),
      },
      {
        id: "codigo",
        header: "Codigo",
        accessorKey: "codigo",
        cell: ({
          cell,
        }: {
          cell: {
            getValue: () => string;
          };
        }) => (
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            {cell.getValue()}
          </Typography>
        ),
      },
      {
        id: "nombre",
        header: "Nombre",
        accessorKey: "nombre",
        cell: ({
          cell,
        }: {
          cell: {
            getValue: () => string;
          };
        }) => (
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            {cell.getValue()}
          </Typography>
        ),
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
          <div className="centrar">
            <Stack direction="row">
              <button
                className="bg-transparent icon"
                type="button"
                onClick={() => handleUpdateMarca(row.original.id)}
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
          </div>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Typography
        variant="h5"
        sx={{ textTransform: "uppercase", marginTop: "2rem" }}
      >
        Marcas de vehiculos
      </Typography>
      {isloading ? (
        <Loader />
      ) : (
        <>
          <TablaComponent
            columns={columns}
            data={data}
            totalData={totalData}
            nombre="Marcas"
          />
          <div
            style={{ width: "100%", marginTop: "2rem", paddingBottom: "4rem" }}
          >
            <BotonComponent
              titulo="Agregar Marca"
              to={`${RUTAS_PRIVADAS.REGISTRO_MARCA}`}
            />
          </div>
        </>
      )}
    </Container>
  );
};

export default MarcasPage;
