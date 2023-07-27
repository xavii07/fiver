import { Link, useParams } from "react-router-dom";
import { useVehiculos } from "../../hooks/useVehiculos";
import { useEffect, useState } from "react";
import { initialValues } from "../../components/RegistroVehiculo/values";
import { IVehiculoRequest } from "../../interfaces/vehiculo";
import { Button, Chip, Container, Divider } from "@mui/material";
import CauruselImages from "../../components/CarouselImages";
import "./styles.css";
import IconoCaracteristicas from "../../components/IconoCaracteristicas";
import abs from "../../../public/abs.png";
import ac from "../../../public/ac.png";
import airbag from "../../../public/airbag.png";
import bluetooth from "../../../public/bluetooth.png";
import camaraReversa from "../../../public/camera-360.png";
import neblineros from "../../../public/neblineros.png";
import gps from "../../../public/gps.png";
import radio from "../../../public/radio.png";
import sonidoStereo from "../../../public/stereo.png";
import year from "../../../public/year.png";
import cilindros from "../../../public/cilindro.png";
import color from "../../../public/color.png";
import combustible from "../../../public/combustible.png";
import motor from "../../../public/motor.png";
import pasajeros from "../../../public/pasajeros.png";
import puertas from "../../../public/pueta.png";
import tipo from "../../../public/tipoauto.png";
import transmision from "../../../public/transmision.png";
import { RUTAS_PRIVADAS } from "../../router/router";

const VehiculoPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const { getVehiculoById } = useVehiculos();
  const [vehiculo, setVehiculo] = useState<IVehiculoRequest>({
    ...initialValues,
    imagenes: [],
    reservado: false,
  });
  const [imagenes, setImagenes] = useState<string[]>([]);

  useEffect(() => {
    getVehiculoById(+`${id}`).then((vehiculo) => {
      if (vehiculo) {
        setVehiculo(vehiculo as IVehiculoRequest);
        if (Array.isArray(vehiculo.imagenes)) {
          setImagenes(vehiculo.imagenes as string[]);
        }
      }
    });
  }, [getVehiculoById, id]);

  return (
    <Container
      style={{
        paddingBottom: "3rem",
        paddingRight: 0,
        paddingLeft: 0,
      }}
    >
      <Container className="header_titulo">
        <h1 className="titulo">{vehiculo.modelo}</h1>
      </Container>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <div style={{ width: "50%" }}>
          <CauruselImages imagenes={imagenes} />

          <Divider sx={{ marginTop: "4rem" }}>
            <Chip label="Precios" />
          </Divider>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div>
              <h1 style={{ marginBottom: 0 }}>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(+`${vehiculo?.precioHora}`)}
              </h1>
              <p style={{ marginTop: 0, color: "#999", textAlign: "center" }}>
                /100 Km
              </p>
            </div>
            <div>
              <h1 style={{ marginBottom: 0 }}>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(+`${vehiculo?.precioDia}`)}
              </h1>
              <p style={{ marginTop: 0, color: "#999", textAlign: "center" }}>
                Km libre
              </p>
            </div>
          </div>
          <Button
            variant="contained"
            size="large"
            fullWidth
            disabled={vehiculo?.reservado}
            sx={{ marginTop: "2rem" }}
          >
            <Link
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                width: "100%",
              }}
              to={`${RUTAS_PRIVADAS.RESERVA}/${vehiculo.id}`}
            >
              Reservar
            </Link>
          </Button>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1>{vehiculo.modelo}</h1>
            <img src={vehiculo?.Marca?.imagen} width={140} height={100} />
          </div>
          <Divider>
            <Chip label="Descripción" />
          </Divider>
          <p style={{ fontSize: "0.9rem" }}>{vehiculo.descripcion}</p>
          <Divider>
            <Chip label="Especificaciones" />
          </Divider>
          <div
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              gap: "2 rem",
              columnGap: "2rem",
              rowGap: "2rem",
            }}
          >
            <IconoCaracteristicas
              imagen={tipo}
              subtitulo={vehiculo.tipo}
              titulo="Tipo"
            />
            <IconoCaracteristicas
              imagen={transmision}
              subtitulo={vehiculo.transmision}
              titulo="Transmisión"
            />
            <IconoCaracteristicas
              imagen={color}
              subtitulo={vehiculo.color}
              titulo="Color"
            />
            <IconoCaracteristicas
              imagen={combustible}
              subtitulo={vehiculo.combustible}
              titulo="Combustible"
            />
            <IconoCaracteristicas
              imagen={year}
              subtitulo={vehiculo.anio}
              titulo="Año"
            />
            <IconoCaracteristicas
              imagen={motor}
              subtitulo={vehiculo.motorHp}
              titulo="Motor HP"
            />
            <IconoCaracteristicas
              imagen={cilindros}
              subtitulo={`${vehiculo.cilindros}`}
              titulo="Cilindros"
            />
            <IconoCaracteristicas
              imagen={pasajeros}
              subtitulo={`${vehiculo.pasajeros}`}
              titulo="Pasajeros"
            />
            <IconoCaracteristicas
              imagen={puertas}
              subtitulo={`${vehiculo.puertas}`}
              titulo="Puertas"
            />
          </div>
          <Divider>
            <Chip label="Mas Caracteristicas" />
          </Divider>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              gap: "2 rem",
              columnGap: "2rem",
              rowGap: "2rem",
            }}
          >
            {vehiculo.abs && (
              <IconoCaracteristicas
                imagen={abs}
                titulo="Frenos"
                subtitulo={"ABS"}
              />
            )}
            {vehiculo.ac && <IconoCaracteristicas imagen={ac} subtitulo="AC" />}
            {vehiculo.airbag && (
              <IconoCaracteristicas
                imagen={airbag}
                titulo="Airbag"
                subtitulo="Conductor"
              />
            )}
            {vehiculo.bluetooth && (
              <IconoCaracteristicas imagen={bluetooth} subtitulo="Bluetooth" />
            )}
            {vehiculo.camaraReversa && (
              <IconoCaracteristicas
                imagen={camaraReversa}
                subtitulo="Cámara Reversa"
              />
            )}
            {vehiculo.neblineros && (
              <IconoCaracteristicas
                imagen={neblineros}
                subtitulo="Neblineros"
              />
            )}
            {vehiculo.gps && (
              <IconoCaracteristicas imagen={gps} subtitulo="GPS" />
            )}
            {vehiculo.radio && (
              <IconoCaracteristicas
                imagen={radio}
                subtitulo="AM FM"
                titulo="Radio"
              />
            )}
            {vehiculo.sonidoStereo && (
              <IconoCaracteristicas
                imagen={sonidoStereo}
                subtitulo="Stereo"
                titulo="Sonido"
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VehiculoPage;
