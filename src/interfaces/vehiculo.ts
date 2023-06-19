export interface IVehiculo {
  id?: number | null;
  placa: string;
  modelo: string;
  tipo: string;
  anio: string;
  color: string;
  transmision: string;
  combustible: string;
  motorHp: string;
  cilindros: number | null;
  pasajeros: number | null;
  puertas: number | null;
  descripcion: string;
  imagenes: string[] | File[] | null;
  abs: boolean;
  ac: boolean;
  bluetooth: boolean;
  gps: boolean;
  airbag: boolean;
  camaraReversa: boolean;
  neblineros: boolean;
  radio: boolean;
  sonidoStereo: boolean;
  precioHora: number | null;
  precioDia: number | null;
  estado?: boolean;
  idMarca: number | null;
}
