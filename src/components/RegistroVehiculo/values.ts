import { IVehiculo } from "../../interfaces/vehiculo";

export const tipoTransmision = [
  {
    id: 1,
    nombre: "Automatica",
    values: "automatica",
  },
  {
    id: 2,
    nombre: "Manual",
    values: "manual",
  },
  {
    id: 3,
    nombre: "CVT",
    values: "cvt",
  },
  {
    id: 4,
    nombre: "Automatizada o secuencial",
    values: "automatizada",
  },
];

export const initialValues: IVehiculo = {
  placa: "",
  idMarca: null,
  modelo: "",
  tipo: "",
  anio: "",
  color: "",
  transmision: "",
  combustible: "",
  motorHp: "",
  cilindros: null,
  pasajeros: null,
  descripcion: "",
  puertas: null,
  precioHora: null,
  precioDia: null,
  imagenes: null,
  abs: false,
  ac: false,
  bluetooth: false,
  gps: false,
  airbag: false,
  camaraReversa: false,
  neblineros: false,
  radio: false,
  sonidoStereo: false,
};
