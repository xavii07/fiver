import * as yup from "yup";

export const usuarioValidation = yup.object().shape({
  cedula: yup
    .string()
    .required("La cédula es requerida")
    .matches(/^[0-9]{10}$/, "La cédula debe tener 10 dígitos"),
  nombres: yup
    .string()
    .required("El campo nombres es requerido")
    .max(50, "El máximo de caracteres es 50")
    .min(5, "El mínimo de caracteres es 5"),
  apellidos: yup
    .string()
    .required("El campo apellidos es requerido")
    .max(50, "El máximo de caracteres es 50")
    .min(5, "El mínimo de caracteres es 5"),
  fechaNacimiento: yup
    .string()
    .required("El campo fecha de nacimiento es requerido"),
  correoElectronico: yup
    .string()
    .required("El campo correo electrónico es requerido")
    .email("El campo correo electrónico debe ser un correo válido"),
  contrasena: yup
    .string()
    .required("El campo contraseña es requerido")
    .max(50, "El máximo de caracteres es 50")
    .min(5, "El mínimo de caracteres es 5"),
  celular: yup
    .string()
    .required("El campo celular es requerido")
    .max(10, "El máximo de caracteres es 10")
    .min(10, "El mínimo de caracteres es 10"),
  direccion: yup
    .string()
    .required("El campo dirección es requerido")
    .max(100, "El máximo de caracteres es 100")
    .min(5, "El mínimo de caracteres es 5"),
  provincia: yup.string().required("El campo provincia es requerido"),
  categoriaLicencia: yup
    .string()
    .required("El campo categoría de licencia es requerido"),
});
