import { createContext, useCallback, useEffect, useState } from "react";
import { customizeErrorMessages, supabase } from "../supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { RUTAS_PRIVADAS } from "../router/router";
import { IVehiculo } from "../interfaces/vehiculo";

interface VehiculoProviderProps {
  children: React.ReactNode;
}

export interface VehiculoContextProps {
  isloading: boolean;
  vehiculos: IVehiculo[];
  editvehiculo: IVehiculo;
  getVehiculos: () => Promise<void>;
  createVehiculo: (vehiculo: IVehiculo) => Promise<void>;
  updateEstadoVehiculo: (id: number, estado: boolean) => Promise<void>;
  getVehiculoById: (id: number) => Promise<IVehiculo | undefined>;
  updateVehiculo: (vehiculo: IVehiculo) => Promise<void>;
  subirImagenes: (images: File[], placa: string) => Promise<string[]>;
  setEditvehiculo: React.Dispatch<React.SetStateAction<IVehiculo>>;
}

export const VehiculoContext = createContext<VehiculoContextProps>({
  vehiculos: [],
  isloading: false,
  editvehiculo: {} as IVehiculo,
  getVehiculos: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
  createVehiculo: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
  updateEstadoVehiculo: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
  getVehiculoById: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
  updateVehiculo: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
  subirImagenes: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
  setEditvehiculo: () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
});

export const VehiculoProvider: React.FC<VehiculoProviderProps> = ({
  children,
}) => {
  const [vehiculos, setVehiculos] = useState<IVehiculo[]>([]);
  const [isloading, setIsloading] = useState<boolean>(false);
  const [editvehiculo, setEditvehiculo] = useState<IVehiculo>({} as IVehiculo);
  const navigation = useNavigate();

  useEffect(() => {
    memorizedGetVehiculos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const memorizedGetVehiculos = useCallback(() => {
    getVehiculos();
  }, []);

  const getVehiculos = async (): Promise<void> => {
    setIsloading(true);
    try {
      const { error, data } = await supabase
        .from("Vehiculo")
        .select("*, Marca(nombre)");

      if (error) {
        throw error;
      }
      setVehiculos(data as IVehiculo[]);
    } catch (error) {
      console.log(error);
      toast.error("Error al obtener los vehiculos");
    } finally {
      setIsloading(false);
    }
  };

  const subirImagenes = async (
    images: File[],
    placa: string
  ): Promise<string[]> => {
    //TODO:Verificar si ya existe la carpeta
    const { data: objetos, error: errorObjetos } = await supabase.storage
      .from("fiver")
      .list("vehiculos");

    if (errorObjetos) {
      console.log(errorObjetos);
      throw errorObjetos;
    }

    const existeCarpeta = objetos?.find(
      (objeto) => objeto.name === `vehiculos/${placa}`
    );

    if (existeCarpeta) {
      const { error: eliminarError } = await supabase.storage
        .from("fiver")
        .remove([`vehiculos/${placa}`]);

      if (eliminarError) {
        console.log(eliminarError);
      }
    }

    //TODO: Subir las imagenes
    const imagesUrls: string[] = [];

    for (const image of images) {
      const { data, error } = await supabase.storage
        .from("fiver")
        .upload(`vehiculos/${placa}/${image.name}`, image);

      if (error) {
        console.log(error);
        throw error;
      } else {
        imagesUrls.push(`${import.meta.env.VITE_URL_IMAGEN}${data.path}`);
      }
    }

    return imagesUrls;
  };

  const createVehiculo = async (vehiculo: IVehiculo): Promise<void> => {
    console.log(vehiculo);
    try {
      const { error, data } = await supabase.from("Vehiculo").insert({
        ...vehiculo,
      });

      if (error) {
        console.log(error);
        throw error;
      }

      if (data) {
        setVehiculos([...vehiculos, ...data]);
      }
      console.log(data);

      toast.success("Vehiculo registrada correctamente");
      navigation(RUTAS_PRIVADAS.VEHICULOS);
    } catch (error: unknown) {
      console.log(error);
      if (error instanceof Error) {
        toast.error("Error al registrar el vehiculo" + error.message);
      }
    }
  };

  const updateEstadoVehiculo = async (
    id: number,
    estado: boolean
  ): Promise<void> => {
    console.log({ id, estado });
    try {
      const { error } = await supabase
        .from("Vehiculo")
        .update({ estado: !estado })
        .eq("id", id);

      if (error) {
        throw new Error(customizeErrorMessages(error));
      }

      setVehiculos((prevVehiculos) => {
        return prevVehiculos.map((vehiculo) => {
          if (vehiculo.id === id) {
            return {
              ...vehiculo,
              estado: !estado,
            };
          }
          return vehiculo;
        });
      });

      toast.success("Estado del vehiculo actualizado correctamente");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const getVehiculoById = async (
    id: number
  ): Promise<IVehiculo | undefined> => {
    try {
      const { data, error } = await supabase
        .from("Vehiculo")
        .select()
        .eq("id", id)
        .single();

      console.log(data);

      if (error) {
        throw new Error(customizeErrorMessages(error));
      }

      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const updateVehiculo = async (vehiculo: IVehiculo): Promise<void> => {
    try {
      const { error } = await supabase
        .from("Vehiculo")
        .update(vehiculo)
        .eq("id", vehiculo.id);

      if (error) {
        throw new Error(customizeErrorMessages(error));
      }

      setVehiculos((prevVehiculos) => {
        return prevVehiculos.map((vehiculo) => {
          if (vehiculo.id === vehiculo.id) {
            return {
              ...vehiculo,
              ...vehiculo,
            };
          }
          return vehiculo;
        });
      });

      toast.success("Vehiculo actualizado correctamente");

      navigation(RUTAS_PRIVADAS.VEHICULOS);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <VehiculoContext.Provider
      value={{
        vehiculos,
        isloading,
        editvehiculo,
        getVehiculos,
        createVehiculo,
        updateEstadoVehiculo,
        getVehiculoById,
        updateVehiculo,
        subirImagenes,
        setEditvehiculo,
      }}
    >
      {children}
    </VehiculoContext.Provider>
  );
};
