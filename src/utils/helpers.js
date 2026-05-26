// Formatea un número con separador de miles (ej: 25000 → 25.000)
export const formatPrice = (price) => {
  return price.toLocaleString("es-CL");
};
