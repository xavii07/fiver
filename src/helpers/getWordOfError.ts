export const getWordOfError = (error: string) => {
  const errorSplit = error.split(" ").pop();
  const erro = errorSplit?.split("_");
  const errorPalabra = `${erro?.[1]}`;
  if (errorPalabra) {
    return errorPalabra.toUpperCase();
  }
};
