import { IUsuarioRegistro } from "../../interfaces/usuario";

export const initialValues: IUsuarioRegistro = {
  cedula: "",
  nombres: "",
  apellidos: "",
  fechaNacimiento: "",
  correoElectronico: "",
  contrasena: "",
  celular: "",
  direccion: "",
  provincia: "",
  sexo: "hombre",
  categoriaLicencia: "",
};

export const provincias = [
  {
    id: 1,
    nombre: "Azuay",
  },
  {
    id: 2,
    nombre: "Bolívar",
  },
  {
    id: 3,
    nombre: "Cañar",
  },
  {
    id: 4,
    nombre: "Carchi",
  },
  {
    id: 5,
    nombre: "Chimborazo",
  },
  {
    id: 6,
    nombre: "Cotopaxi",
  },
  {
    id: 7,
    nombre: "El Oro",
  },
  {
    id: 8,
    nombre: "Esmeraldas",
  },
  {
    id: 9,
    nombre: "Galápagos",
  },
  {
    id: 10,
    nombre: "Guayas",
  },
  {
    id: 11,
    nombre: "Imbabura",
  },
  {
    id: 12,
    nombre: "Loja",
  },
  {
    id: 13,
    nombre: "Los Ríos",
  },
  {
    id: 14,
    nombre: "Manabí",
  },
  {
    id: 15,
    nombre: "Morona Santiago",
  },
  {
    id: 16,
    nombre: "Napo",
  },
  {
    id: 17,
    nombre: "Orellana",
  },
  {
    id: 18,
    nombre: "Pastaza",
  },
  {
    id: 19,
    nombre: "Pichincha",
  },
  {
    id: 20,
    nombre: "Santa Elena",
  },
  {
    id: 21,
    nombre: "Santo Domingo de los Tsáchilas",
  },
  {
    id: 22,
    nombre: "Sucumbíos",
  },
  {
    id: 23,
    nombre: "Tungurahua",
  },
  {
    id: 24,
    nombre: "Zamora Chinchipe",
  },
];

export const categoriaLicencia = [
  {
    id: 1,
    nombre: "B",
  },
  {
    id: 2,
    nombre: "C",
  },
  {
    id: 3,
    nombre: "C1",
  },
  {
    id: 4,
    nombre: "D",
  },
  {
    id: 5,
    nombre: "D1",
  },
  {
    id: 6,
    nombre: "E",
  },
  {
    id: 7,
    nombre: "G",
  },
];
