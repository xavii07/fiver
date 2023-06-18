import { useContext } from "react";
import { MarcaContext, MarcaContextProps } from "../context/MarcaContext";

export const useMarcas = (): MarcaContextProps => {
  const context = useContext(MarcaContext);
  if (!context) {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  }
  return context;
};
