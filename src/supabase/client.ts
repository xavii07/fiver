import { createClient } from "@supabase/supabase-js";
import { getWordOfError } from "../helpers/getWordOfError";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const customizeErrorMessages = (error: any) => {
  if (error?.message) {
    const palabra = getWordOfError(error?.message);
    //TODO:  Verificar el tipo de error que quieres personalizar
    if (error?.code === "23505") {
      return ` El texto ingresado en el campo ${palabra} ya existe en la base de datos.`;
    } else if (error?.code === "23502") {
      return `El campo ${palabra} es requerido.`;
    } else if (error?.code === "22P02") {
      return `El campo ${palabra} es inválido.`;
    } else if (error?.code === "459") {
      return error?.message || "Ocurrió un error.";
    } else {
      return error?.message || "Ocurrió un error.";
    }
  }
  return error?.message || "Ocurrió un error.";
};
