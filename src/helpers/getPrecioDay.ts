export const getPrecioDay = (precioHour: number): number => {
  const aumento = precioHour * 0.45;

  const precioDay = precioHour + aumento;

  return precioDay;
};
