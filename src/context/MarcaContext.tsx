import React, { createContext, useCallback, useEffect, useState } from "react";
import { customizeErrorMessages, supabase } from "../supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { RUTAS_PRIVADAS } from "../router/router";
import { IMarca } from "../interfaces/marca";

interface IFormValueMarca {
  path: string;
}

interface MarcaProviderProps {
  children: React.ReactNode;
}

export interface MarcaContextProps {
  isloading: boolean;
  marcas: IMarca[];
  editmarca: IMarca;
  getMarcas: () => Promise<void>;
  createMarca: (
    nombre: string,
    codigo: string,
    imagen: string
  ) => Promise<void>;
  subirImagen: (file: File) => Promise<IFormValueMarca>;
  updateEstadoMarca: (id: number, estado: boolean) => Promise<void>;
  getMarcaById: (id: number) => Promise<IMarca | undefined>;
  setEditMarca: React.Dispatch<React.SetStateAction<IMarca>>;
  updateMarca: (marca: IMarca) => Promise<void>;
  getMarcasByEstado: (estado?: boolean) => Promise<void>;
}

export const MarcaContext = createContext<MarcaContextProps>({
  marcas: [],
  editmarca: {} as IMarca,
  getMarcas: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
  createMarca: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
  subirImagen: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
  isloading: false,
  updateEstadoMarca: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
  getMarcaById: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
  setEditMarca: () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
  updateMarca: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
  getMarcasByEstado: async () => {
    throw new Error("El contexto de marcas debe estar dentro del proveedor");
  },
});

export const MarcaProvider: React.FC<MarcaProviderProps> = ({ children }) => {
  const [marcas, setMarcas] = useState<IMarca[]>([]);
  const [isloading, setIsloading] = useState<boolean>(false);
  const [editmarca, setEditMarca] = useState<IMarca>({} as IMarca);
  const navigation = useNavigate();

  const memorizedGetMarcas = useCallback(() => {
    getMarcas();
  }, []);

  useEffect(() => {
    memorizedGetMarcas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const subirImagen = async (file: File): Promise<IFormValueMarca> => {
    //TODO: Verificar si el archivo existe en el almacenamiento y eliminarlo
    const { data: objetos, error: errorB } = await supabase.storage
      .from("fiver")
      .list("marcas");

    if (errorB) {
      console.error("Error al obtener los objetos", errorB);
    }

    const objetoExistente = objetos?.find(
      (objeto) => objeto.name === `${file.name}`
    );

    if (objetoExistente) {
      const { error: eliminarError } = await supabase.storage
        .from("fiver")
        .remove([`marcas/${file.name}`]);

      if (eliminarError) {
        console.error("Error al eliminar el archivo existente", eliminarError);
      }
    }

    //TODO: Subir el archivo al almacenamiento
    const { data, error } = await supabase.storage
      .from("fiver")
      .upload(`marcas/${file.name}`, file);

    if (error) {
      console.log(error);
      toast.error("Error al subir la imagen " + error.message);
    }

    return data as IFormValueMarca;
  };

  const getMarcas = async (): Promise<void> => {
    setIsloading(true);

    try {
      const { error, data } = await supabase.from("Marca").select();
      if (error) {
        throw error;
      }
      setMarcas(data as IMarca[]);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsloading(false);
    }
  };

  const createMarca = async (
    nombre: string,
    codigo: string,
    imagen: string
  ): Promise<void> => {
    try {
      const { error, data } = await supabase.from("Marca").insert({
        nombre,
        codigo,
        imagen,
      });

      if (error) {
        throw new Error(customizeErrorMessages(error));
      }

      if (data) {
        setMarcas([...marcas, ...data]);
      }

      toast.success("Marca registrada correctamente");
      navigation(RUTAS_PRIVADAS.MARCAS);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const updateEstadoMarca = async (
    id: number,
    estado: boolean
  ): Promise<void> => {
    console.log({ id, estado });
    try {
      const { error } = await supabase
        .from("Marca")
        .update({ estado: !estado })
        .eq("id", id);

      if (error) {
        throw new Error(customizeErrorMessages(error));
      }

      setMarcas((prevMarcas) => {
        return prevMarcas.map((marca) => {
          if (marca.id === id) {
            return {
              ...marca,
              estado: !estado,
            };
          }
          return marca;
        });
      });

      toast.success("Estado de la marca actualizada correctamente");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const getMarcaById = async (id: number): Promise<IMarca | undefined> => {
    try {
      const { data, error } = await supabase
        .from("Marca")
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

  const updateMarca = async (marca: IMarca): Promise<void> => {
    try {
      const { error } = await supabase
        .from("Marca")
        .update(marca)
        .eq("id", marca.id);

      if (error) {
        throw new Error(customizeErrorMessages(error));
      }

      setMarcas((prevMarcas) => {
        return prevMarcas.map((marca) => {
          if (marca.id === marca.id) {
            return {
              ...marca,
              ...marca,
            };
          }
          return marca;
        });
      });

      toast.success("Marca actualizada correctamente");

      navigation(RUTAS_PRIVADAS.MARCAS);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const getMarcasByEstado = async (estado = true): Promise<void> => {
    try {
      const { error, data } = await supabase
        .from("Marca")
        .select()
        .eq("estado", estado);
      if (error) {
        throw error;
      }
      setMarcas(data as IMarca[]);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <MarcaContext.Provider
      value={{
        marcas,
        isloading,
        editmarca,
        getMarcas,
        createMarca,
        subirImagen,
        updateEstadoMarca,
        getMarcaById,
        setEditMarca,
        updateMarca,
        getMarcasByEstado,
      }}
    >
      {children}
    </MarcaContext.Provider>
  );
};
