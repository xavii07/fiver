import { Container, Typography } from "@mui/material";
import TablaComponent from "../../components/Tabla";
import { useMemo } from "react";
import { Stack } from "@mui/system";
import { IconTrashX, IconPencilPlus, IconEyeEdit } from "@tabler/icons-react";
import "./styles.css";
import BotonComponent from "../../components/Boton";
import { RUTAS_PRIVADAS } from "../../router/router";

const VehiculosPage: React.FC = () => {
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
        header: "Transmision",
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
        header: "$ Dia",
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
              background: "#34bf49",
              color: "#fff",
              fontSize: "0.7rem",
              textAlign: "center",
              padding: "0.2rem 0.5rem",
            }}
          >
            {cell.getValue()}
          </Typography>
        ),
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
            <button className="bg-transparent icon" type="button">
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

  const data = useMemo(
    () => [
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Chevrolet",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Verde",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        placa: "PAC9079",
        marca: "Chevrolet",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "PAD1458",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
      {
        imagen:
          "https://m.atcdn.co.uk/vms/media/cd34eca0a92541ffb422525702adc2e4.jpg",
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
        tipo: "Sedan",
        anio: "2019",
        estado: "Activo",
        transmision: "Automatico",
        precioHora: 20,
        precioDia: 100,
      },
    ],
    []
  );

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
