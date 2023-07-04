import * as yup from "yup";

export const vehiculoValidation = yup.object().shape({
  placa: yup
    .string()
    .required("La placa es requerida")
    .matches(/^[A-Z]{3}[\d]{4}/, "La placa debe tener el formato ABC1234")
    .min(7, "La placa debe tener 7 caracteres")
    .max(7, "La placa debe tener 7 caracteres"),
  idMarca: yup.string().required("La marca es requerida"),
  modelo: yup
    .string()
    .required("El modelo es requerido")
    .max(100, "El máximo de caracteres es 100"),
  tipo: yup.string().required("El tipo de vehículo es requerido"),
  anio: yup
    .string()
    .required("El motor es requerido")
    .max(4, "El máximo de caracteres es 4")
    .min(4, "El mínimo de caracteres es 4"),
  color: yup
    .string()
    .required("El color es requerido")
    .max(15, "El máximo de caracteres es 15"),
  transmision: yup.string().required("El tipo de transmisión es requerido"),
  combustible: yup
    .string()
    .required("El tipo de combustible es requerido")
    .max(30, "El máximo de caracteres es 30"),
  motorHp: yup
    .string()
    .required("El motor es requerido")
    .max(4, "El máximo de caracteres es 4")
    .min(2, "El mínimo de caracteres es 2"),
  cilindros: yup
    .number()
    .typeError("El numero de cilindros tiene que ser numérico")
    .required("El numero de cilindros es requerido")
    .positive("El numero de cilindros debe ser positivo")
    .integer("El numero de cilindros debe ser un numero entero")
    .max(20, "El numero de cilindros debe ser menor o igual a 20"),
  pasajeros: yup
    .number()
    .typeError("El numero de pasajeros tiene que ser numérico")
    .required("El numero de pasajeros es requerido")
    .positive("El numero de pasajeros debe ser positivo")
    .integer("El numero de pasajeros debe ser un numero entero")
    .max(10, "El numero de pasajeros debe ser menor o igual a 10"),
  puertas: yup
    .number()
    .typeError("El numero de puertas tiene que ser numérico")
    .required("El numero de puertas es requerido")
    .positive("El numero de puertas debe ser positivo")
    .integer("El numero de puertas debe ser un numero entero")
    .max(5, "El numero de puertas debe ser menor o igual a 5"),
  descripcion: yup
    .string()
    .required("La descripción es requerida")
    .max(500, "El máximo de caracteres es 500"),
  precioHora: yup
    .number()
    .positive("El precio por hora debe ser positivo")
    .max(100, "El precio por hora debe ser menor o igual a 100")
    .min(10, "El precio por hora debe ser mayor o igual a 10")
    .required("El precio por hora es requerido"),
  imagenes: yup
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
