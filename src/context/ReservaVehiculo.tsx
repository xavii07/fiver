import React, { createContext, useCallback, useEffect, useState } from "react";
import { customizeErrorMessages, supabase } from "../supabase/client";
import { toast } from "sonner";
import { IMarca } from "../interfaces/marca";
import { IReserva } from "../interfaces/reserva";

interface ReservaVehiculoProviderProps {
  children: React.ReactNode;
}

export interface ReservaVehiculoContextProps {
  isloading: boolean;
  reservas: IReserva[];
  editreserva: IReserva;
  getReservasVehiculos: () => Promise<void>;
  createReserva: (reserva: IReserva) => Promise<void>;
  getMarcaById: (id: number) => Promise<IMarca | undefined>;
  setEditReserva: React.Dispatch<React.SetStateAction<IReserva>>;
  updateReserva: (reserva: IReserva) => Promise<void>;
}

export const ReservaVehiculoContext =
  createContext<ReservaVehiculoContextProps>({
    reservas: [],
    editreserva: {} as IReserva,
    isloading: false,
    getReservasVehiculos: async () => {
      throw new Error("El contexto de marcas debe estar dentro del proveedor");
    },
    createReserva: async () => {
      throw new Error("El contexto de marcas debe estar dentro del proveedor");
    },
    getMarcaById: async () => {
      throw new Error("El contexto de marcas debe estar dentro del proveedor");
    },
    setEditReserva: () => {
      throw new Error("El contexto de marcas debe estar dentro del proveedor");
    },
    updateReserva: async () => {
      throw new Error("El contexto de marcas debe estar dentro del proveedor");
    },
  });

export const ReservaVehiculoProvider: React.FC<
  ReservaVehiculoProviderProps
> = ({ children }) => {
  const [reservas, setReservas] = useState<IReserva[]>([]);
  const [isloading, setIsloading] = useState<boolean>(false);
  const [editreserva, setEditReserva] = useState<IReserva>({} as IReserva);

  const memorizedGetReservas = useCallback(() => {
    getReservasVehiculos();
  }, []);

  useEffect(() => {
    memorizedGetReservas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getReservasVehiculos = async (): Promise<void> => {
    setIsloading(true);

    try {
      const { error, data } = await supabase.from("Reservas").select();
      if (error) {
        throw error;
      }
      setReservas(data as IReserva[]);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsloading(false);
    }
  };

  const createReserva = async (reserva: IReserva): Promise<void> => {
    try {
      const { error, data } = await supabase.from("Reservas").insert(reserva);

      if (error) {
        console.log(error);
        throw new Error(customizeErrorMessages(error));
      }

      if (data) {
        setReservas([...reservas, ...data]);
      }

      toast.success("Reserva registrada correctamente");
      //navigation(RUTAS_PRIVADAS.MARCAS);
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
        throw new Error(error.message);
      }

      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const updateReserva = async (reserva: IReserva): Promise<void> => {
    try {
      const { error } = await supabase
        .from("Reservas")
        .update(reserva)
        .eq("id", reserva.id);

      if (error) {
        throw new Error(error.message);
      }

      setReservas((prevReservas) => {
        return prevReservas.map((reserva) => {
          if (reserva.id === reserva.id) {
            return {
              ...reserva,
              ...reserva,
            };
          }
          return reserva;
        });
      });

      toast.success("Reserva actualizada correctamente");

      //navigation(RUTAS_PRIVADAS.MARCAS);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <ReservaVehiculoContext.Provider
      value={{
        reservas,
        isloading,
        editreserva,
        getReservasVehiculos,
        createReserva,
        getMarcaById,
        setEditReserva,
        updateReserva,
      }}
    >
      {children}
    </ReservaVehiculoContext.Provider>
  );
};
