import * as yup from "yup";

export const marcaValidation = yup.object().shape({
  nombre: yup
    .string()
    .required("El nombre es requerida")
    .max(20, "El máximo de caracteres es 20")
    .min(3, "El mínimo de caracteres es 3"),

  codigo: yup
    .string()
    .required("El código es requerido")
    .max(9, "El máximo de caracteres es 9")
    .min(9, "El mínimo de caracteres es 9")
    .matches(/^[A-Z]{4}FIVER$/, "El código debe tener el formato XXXXFIVER"),
  imagen: yup
    .mixed()
    .required("La imagen es requerida")
    .test(
      "fileSize",
      "El tamaño del archivo es demasiado grande supera los 3MB",
      (value) => {
        if (!value) return true;
        const maxSize = 3 * 1024 * 1024; // 5MB
        return (value as FileList)[0].size <= maxSize;
      }
    )
    .test(
      "fileType",
      "El formato de archivo no es válido seleccione un formato valido: .png, .jpg, .jpeg, .webp",
      (value) => {
        if (!value) return true;
        const allowedExtensions = ["jpg", "jpeg", "png", "webp"];
        const fileExtension = (value as FileList)[0].name
          .split(".")
          .pop()
          ?.toLowerCase();
        return allowedExtensions.includes(`${fileExtension}`);
      }
    ),
});
