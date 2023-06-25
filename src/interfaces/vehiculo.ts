export interface IVehiculo {
  id?: number | undefined;
  placa: string;
  modelo: string;
  tipo: string;
  anio: string;
  color: string;
  transmision: string;
  combustible: string;
  motorHp: string;
  cilindros: number | undefined;
  pasajeros: number | undefined;
  puertas: number | undefined;
  descripcion: string;
  imagenes: string | File[] | undefined | string[];
  abs: boolean;
  ac: boolean;
  bluetooth: boolean;
  gps: boolean;
  airbag: boolean;
  camaraReversa: boolean;
  neblineros: boolean;
  radio: boolean;
  sonidoStereo: boolean;
  precioHora: number | undefined;
  precioDia: number | undefined;
  estado?: boolean;
  idMarca: number | undefined;
}

export interface IVehiculoResponse extends IVehiculo {
  Marca: {
    nombre: string;
  };
}
