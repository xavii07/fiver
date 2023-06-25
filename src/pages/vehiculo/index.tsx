import { useParams } from "react-router-dom";
import { useVehiculos } from "../../hooks/useVehiculos";
import { useEffect, useState } from "react";
import { initialValues } from "../../components/RegistroVehiculo/values";
import { IVehiculo } from "../../interfaces/vehiculo";

const VehiculoPage: React.FC = () => {
  const { id } = useParams();
  const { getVehiculoById } = useVehiculos();
  const [vehiculo, setVehiculo] = useState<IVehiculo>(initialValues);

  useEffect(() => {
    (async () => {
      const vehiculo = await getVehiculoById(+`${id}`);
      setVehiculo(vehiculo as IVehiculo);
    })();
  }, [getVehiculoById, id]);

  //console.log(vehiculo);
  const imagenes = vehiculo?.imagenes;

  return (
    <>
      <div>VehiculoPage</div>
      {Array.isArray(imagenes) &&
        imagenes.map((imagen: string | File) => {
          if (typeof imagen === "string") {
            return (
              <img
                src={imagen}
                alt="Imagen del auto"
                key={imagen}
                width={500}
                height={350}
              />
            );
          }
        })}
      <p>{vehiculo.descripcion}</p>
      <p>{vehiculo.color}</p>
      <p>{vehiculo.combustible}</p>
      <p>{vehiculo.modelo}</p>
      <p>{vehiculo.motorHp}</p>
    </>
  );
};

export default VehiculoPage;
