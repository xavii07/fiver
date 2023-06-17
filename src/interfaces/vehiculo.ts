export interface IVehiculo {
  id?: string;
  placa: string;
  modelo: string;
  tipo: string;
  anio: string;
  color: string;
  transmision: string;
  combustible: string;
  motorHp: string;
  cilindros: number;
  pasajeros: number;
  puertas: number;
  descripcion: string;
  imagenes: string[];
  abs: boolean;
  ac: boolean;
  bluetooth: boolean;
  gps: boolean;
  airbag: boolean;
  camaraReversa: boolean;
  neblineros: boolean;
  radio: boolean;
  sonidoStereo: boolean;
  precioHora: number;
  precioDia: number;
  idMarca: string;
}
