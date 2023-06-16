import * as yup from "yup";

export const marcaValidation = yup.object().shape({
  nombre: yup
    .string()
    .required("El nombre es requerida")
    .max(500, "El maximo de caracteres es 500"),

  imagen: yup
    .mixed()
    .test("fileSize", "El tamaño del archivo es demasiado grande", (value) => {
      if (!value) return true;
      const maxSize = 5 * 1024 * 1024; // 5MB
      return (value as FileList)[0].size <= maxSize;
    })
    .test("fileType", "El formato de archivo no es válido", (value) => {
      if (!value) return true;
      const allowedExtensions = ["jpg", "jpeg", "png", "webp"];
      const fileExtension = (value as FileList)[0].name
        .split(".")
        .pop()
        ?.toLowerCase();
      return allowedExtensions.includes(`${fileExtension}`);
    }),
});
