import { createClient } from "@supabase/supabase-js";
import { getWordOfError } from "../helpers/getWordOfError";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const customizeErrorMessages = (error: any) => {
  const palabra = getWordOfError(error?.details);

  //TODO:  Verificar el tipo de error que quieres personalizar
  if (error?.code === "23505") {
    return `El campo ${palabra} ya existe en la base de datos.`;
  }
  return error?.message || "Ocurrió un error.";
};
