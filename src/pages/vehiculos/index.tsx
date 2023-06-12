import { Container, Typography } from "@mui/material";
import TablaComponent from "../../components/Tabla";
import { useMemo } from "react";

const VehiculosPage: React.FC = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Imagen",
        accessor: "imagen",
        Cell:
          ({ value }: { value: string }) =>
          () =>
            <img src={value} alt="imagen" width="400" height="400" />,
      },
      {
        Header: "Placa",
        accessor: "placa",
      },
      {
        Header: "Marca",
        accessor: "marca",
      },
      {
        Header: "Modelo",
        accessor: "modelo",
      },
      {
        Header: "Color",
        accessor: "color",
      },
      {
        Header: "Tipo",
        accessor: "tipo",
      },
      {
        Header: "Año",
        accessor: "anio",
      },
      {
        Header: "Estado",
        accessor: "estado",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        imagen: "https://placeimg.com/400/400/people",
        placa: "ABC-123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
      },
      {
        imagen: "https://placeimg.com/400/400/people",
        placa: "ABC-123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
      },
      {
        imagen: "https://placeimg.com/400/400/people",
        placa: "ABC-123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
      },
      {
        placa: "ABC-123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        imagen: "https://placeimg.com/400/400/people",
        anio: "2019",
        estado: "Activo",
      },
      {
        imagen: "https://placeimg.com/400/400/people",
        placa: "ABC-123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
      },
    ],
    []
  );

  const totalData = 5;

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
        Vehiculos
      </Typography>
      <TablaComponent
        columns={columns}
        data={data}
        totalData={totalData}
        nombre="vehiculos"
      />
    </Container>
  );
};

export default VehiculosPage;
