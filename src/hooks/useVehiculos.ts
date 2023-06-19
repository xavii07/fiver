import { useContext } from "react";
import {
  VehiculoContext,
  VehiculoContextProps,
} from "../context/VehiculoContext";

export const useVehiculos = (): VehiculoContextProps => {
  const context = useContext(VehiculoContext);
  if (!context)
    throw new Error("El contexto de vehiculos debe estar dentro del proveedor");
  return context;
};
