export const getPrecioDay = (precioHour: number): number => {
  const totalHours = 8;
  const precioDay = precioHour * totalHours;
  const descuento = precioDay * 0.1;
  const iva = descuento * 0.12;

  return precioDay - descuento + iva;
};
