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
  idMarca: undefined,
  modelo: "",
  tipo: "",
  anio: "",
  color: "",
  transmision: "",
  combustible: "",
  motorHp: "",
  cilindros: undefined,
  pasajeros: undefined,
  descripcion: "",
  puertas: undefined,
  precioHora: undefined,
  precioDia: undefined,
  imagenes: undefined,
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
