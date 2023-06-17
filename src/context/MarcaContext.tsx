import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { RUTAS_PRIVADAS } from "../router/router";

interface Marca {
  id: number;
  nombre: string;
  imagen: string;
}

interface MarcaContextProps {
  marcas: Marca[];
  getMarcas: () => Promise<void>;
  createMarca: (nombre: string) => Promise<void>;
}
export const MarcaContext = createContext<MarcaContextProps>({
  marcas: [],
  getMarcas: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
  createMarca: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const useMarcas = () => {
  const context = useContext(MarcaContext);
  if (!context)
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  return context;
};

interface MarcaProviderProps {
  children: React.ReactNode;
}

export const MarcaProvider: React.FC<MarcaProviderProps> = ({ children }) => {
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const navigation = useNavigate();

  const getMarcas = async () => {
    const { error, data } = await supabase.from("Marca").select();
    if (error) return toast.error("Error al obtener las marcas");
    setMarcas(data);
  };

  const createMarca = async (nombre: string) => {
    const { error, data } = await supabase.from("Marca").insert({
      nombre: nombre,
    });

    if (error) {
      return toast.error("Error al registrar la marca");
    }

    setMarcas((prev) => [...prev]);

    toast.success("Marca registrada correctamente");
    navigation(RUTAS_PRIVADAS.MARCAS);
  };

  return (
    <MarcaContext.Provider value={{ marcas, getMarcas, createMarca }}>
      {children}
    </MarcaContext.Provider>
  );
};
