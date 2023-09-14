export const checkPort = (port) => {
  if (!port || port.trim() === "") {
    console.error("La variable de entorno PORT no esta completa");
    process.exit(1);
  }
};
