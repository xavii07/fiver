import * as yup from "yup";

export const automovilValidation = yup.object().shape({
  placa: yup.string().required("La placa es requerida"),
  marca: yup.string().required("La marca es requerida"),
  modelo: yup.string().required("El modelo es requerido"),
  tipoVehiculo: yup.string().required("El tipo de vehiculo es requerido"),
  anio: yup.string().required("El año es requerido"),
  color: yup.string().required("El color es requerido"),
  tipoTrasnsmision: yup
    .string()
    .required("El tipo de transmision es requerido"),
  tipoCombustible: yup.string().required("El tipo de combustible es requerido"),
  motorHp: yup.string().required("El motor es requerido"),
  numeroCilindros: yup.string().required("El cilindraje es requerido"),
  numeroPasajeros: yup.string().required("El numero de pasajeros es requerido"),
  numeroPuertas: yup.string().required("El numero de puertas es requerido"),
  descripcion: yup.string().required("La descripcion es requerida"),
  precioHora: yup.string().required("El precio por hora es requerido"),
  precioDia: yup.string().required("El precio por dia es requerido"),
});
