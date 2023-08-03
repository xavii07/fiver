export interface IReserva {
  id: number;
  fechaCreacion: Date;
  fechaInicio: Date;
  fechaFin: Date;
  horaInicio: Date;
  horaFin: Date;
  precioTotal: number;
  idVehiculo: number;
  idUsuario: string;
  idMarca: number;
  estado: boolean;
}
