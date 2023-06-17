import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { RUTAS_PRIVADAS } from "../router/router";
import { IVehiculo } from "../interfaces/vehiculo";

interface VehiculoContextProps {
  vehiculos: IVehiculo[];
  getVehiculos: () => Promise<void>;
  createVehiculo: (nombre: string) => Promise<void>;
}
export const VehiculoContext = createContext<VehiculoContextProps>({
  vehiculos: [],
  getVehiculos: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
  createVehiculo: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const useVehiculos = () => {
  const context = useContext(VehiculoContext);
  if (!context)
    throw new Error("El contexto de vehiculos debe estar dentro del proveedor");
  return context;
};

interface VehiculoProviderProps {
  children: React.ReactNode;
}

export const VehiculoProvider: React.FC<VehiculoProviderProps> = ({
  children,
}) => {
  const [vehiculos, setVehiculos] = useState<IVehiculo[]>([]);
  const navigation = useNavigate();

  const getVehiculos = async () => {
    const { error, data } = await supabase.from("Vehiculo").select();
    if (error) return toast.error("Error al obtener las marcas");
    setVehiculos(data);
  };

  const createVehiculo = async (vehiculo: IVehiculo) => {
    console.log(vehiculo);
    const { error, data } = await supabase.from("Vehiculo").insert({
      placa: vehiculo.placa,
      modelo: vehiculo.modelo,
      tipo: vehiculo.tipo,
      anio: vehiculo.anio,
      color: vehiculo.color,
      transmision: vehiculo.transmision,
      combustible: vehiculo.combustible,
      motorHp: vehiculo.motorHp,
      cilindros: vehiculo.cilindros,
      pasajeros: vehiculo.pasajeros,
      puertas: vehiculo.puertas,
      descripcion: vehiculo.descripcion,
      abs: vehiculo.abs,
      ac: vehiculo.ac,
      bluetooth: vehiculo.bluetooth,
      gps: vehiculo.gps,
      airbag: vehiculo.airbag,
      camaraReversa: vehiculo.camaraReversa,
      neblineros: vehiculo.neblineros,
      radio: vehiculo.radio,
      sonidoStereo: vehiculo.sonidoStereo,
      precioHora: vehiculo.precioHora,
      precioDia: vehiculo.precioDia,
    });

    if (error) {
      return toast.error("Error al registrar el vehiculo");
    }

    setVehiculos((prev) => [...prev]);

    toast.success("Vehiculo registrada correctamente");
    navigation(RUTAS_PRIVADAS.VEHICULOS);
  };

  return (
    <VehiculoContext.Provider
      value={{ vehiculos, getVehiculos, createVehiculo }}
    >
      {children}
    </VehiculoContext.Provider>
  );
};
