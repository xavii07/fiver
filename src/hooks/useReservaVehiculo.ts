import { useContext } from "react";
import {
  ReservaVehiculoContext,
  ReservaVehiculoContextProps,
} from "../context/ReservaVehiculo";

export const useReservaVehiculo = (): ReservaVehiculoContextProps => {
  const context = useContext(ReservaVehiculoContext);
  if (!context) {
    throw new Error("El contexto de reservas debe estar dentro del proveedor");
  }
  return context;
};
