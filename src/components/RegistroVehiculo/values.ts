export const marcasVehiculos = [
  {
    id: 1,
    nombre: "Chevrolet",
    imagen:
      "https://www.chevrolet.com.co/content/dam/chevrolet/na/campaigns/01-images/2021/chevrolet/chevrolet-camino/chevrolet-camino-2021-01.jpg?imwidth=960",
  },
  {
    id: 2,
    nombre: "Toyota",
    imagen: "https://www.toyota.com.co/themes/custom/toyota/images/logo.png",
  },
  {
    id: 3,
    nombre: "Mazda",
    imagen: "https://www.mazda.com.co/themes/custom/mazda/images/logo.png",
  },
];

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

export const initialValues = {
  placa: "",
  marca: "",
  modelo: "",
  tipo: "",
  anio: "",
  color: "",
  transmision: "",
  combustible: "",
  motorHp: "",
  cilindros: "",
  pasajeros: "",
  descripcion: "",
  puertas: "",
  precioHora: "",
  precioDia: "",
  imagenes: null,
};
