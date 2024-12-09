import express from "express";
import cors from "cors";
import { obtenerRegistros, agregarRegistros } from "./registros.js";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.listen(3000, console.log("¡Servidor encendido!"));

app.get("/posts", async (req, res) => {
  const registros = await obtenerRegistros();
  res.json(registros);
});

app.post("/posts", async (req, res) => {
  const { titulo, url, descripcion, likes } = req.body;
  await agregarRegistros(titulo, url, descripcion, likes);
  res.send("Registro agregado con éxito");
});
