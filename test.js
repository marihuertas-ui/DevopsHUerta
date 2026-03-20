const mensaje = "hola";

if (mensaje === "hola") {
  console.log("✅ Test aprobado");
  process.exit(0);
} else {
  console.log("❌ Test fallido");
  process.exit(1);
}
