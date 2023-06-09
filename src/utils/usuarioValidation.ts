import * as yup from "yup";

export const usuarioValidation = yup.object().shape({
  cedula: yup
    .string()
    .test(
      "validar-cedula",
      "Este campo solo admite 10 números, no puede contener solo ceros y no debe tener números repetidos",
      (value) => {
        if (/^0{10}$/.test(`${value}`)) {
          return false;
        }
        if (!/^\d{10}$/.test(`${value}`)) {
          return false;
        }
        if (/(\d)\1{9}/.test(`${value}`)) {
          return false;
        }
        return true;
      }
    )
    .required("La cédula es obligatoria"),
  nombres: yup
    .string()
    .required("El campo nombres es requerido")
    .max(50, "El máximo de caracteres es 50")
    .min(5, "El mínimo de caracteres es 5")
    .matches(/^[a-zA-Z\s]*$/, "Este campo solo admite letras")
    .test("dos-nombres", "Debes ingresar dos nombres", (value) => {
      if (value) {
        const nombres = value.trim().split(" ");
        return nombres.length === 2;
      }
      return false;
    }),
  apellidos: yup
    .string()
    .required("El campo apellidos es requerido")
    .max(50, "El máximo de caracteres es 50")
    .min(5, "El mínimo de caracteres es 5")
    .matches(/^[a-zA-Z\s]*$/, "Este campo solo admite letras")
    .test("dos-apellidos", "Debes ingresar dos apellidos", (value) => {
      if (value) {
        const nombres = value.trim().split(" ");
        return nombres.length === 2;
      }
      return false;
    }),
  fechaNacimiento: yup
    .string()
    .required("La fecha de nacimiento es obligatoria")
    .test("age", "Debes ser mayor de edad para registrarte", function (value) {
      const currentDate = new Date();
      const birthDate = new Date(value);
      const ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
      const ageInDays = Math.floor(
        (+currentDate - +birthDate) / (1000 * 60 * 60 * 24)
      );

      return ageInYears >= 18 && ageInDays >= 0;
    }),
  correoElectronico: yup
    .string()
    .required("El campo correo electrónico es requerido")
    .email("Por favor ingrese un correo electrónico válido"),
  contrasena: yup
    .string()
    .required("El campo contraseña es requerido")
    .matches(
      /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g,
      "La contraseña debe tener de 8 a 16 caracteres, combina mayúsculas,  minúsculas, números y caracteres especiales"
    )
    .max(16, "El máximo de caracteres es 16")
    .min(8, "El mínimo de caracteres es 8"),
  celular: yup
    .string()
    .matches(
      /^[0-9]{10}$/,
      "EL celular debe tener exactamente 10 dígitos numéricos"
    )
    .required("El campo celular es obligatoria"),
  direccion: yup
    .string()
    .required("El campo dirección es requerido")
    .max(100, "El máximo de caracteres es 100")
    .min(10, "El mínimo de caracteres es 10"),
  provincia: yup.string().required("El campo provincia es requerido"),
  categoriaLicencia: yup
    .string()
    .required("El campo categoría de licencia es requerido"),
});
