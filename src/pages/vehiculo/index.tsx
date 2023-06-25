import { useParams } from "react-router-dom";
import { useVehiculos } from "../../hooks/useVehiculos";
import { useEffect, useState } from "react";
import { initialValues } from "../../components/RegistroVehiculo/values";
import { IVehiculoRequest } from "../../interfaces/vehiculo";
import { Container } from "@mui/material";
import CauruselImages from "../../components/CarouselImages";

const VehiculoPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const { getVehiculoById } = useVehiculos();
  const [vehiculo, setVehiculo] = useState<IVehiculoRequest>({
    ...initialValues,
    imagenes: [],
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
    <Container>
      <div>VehiculoPage</div>
      <CauruselImages imagenes={imagenes} />
      <p>{vehiculo.descripcion}</p>
      <p>{vehiculo.color}</p>
      <p>{vehiculo.combustible}</p>
      <p>{vehiculo.modelo}</p>
      <p>{vehiculo.motorHp}</p>
    </Container>
  );
};

export default VehiculoPage;
