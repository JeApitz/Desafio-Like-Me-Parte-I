import pkg from "pg";
const { Pool } = pkg;
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123456",
  database: "likeme",
  allowExitOnIdle: true,
});

export const obtenerRegistros = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  console.log(rows);
  return rows;
};

export const agregarRegistros = async (titulo, url, descripcion, likes) => {
  const consulta =
    "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)";
  const values = [titulo, url, descripcion, likes];
  const result = await pool.query(consulta, values);
  console.log(result);
};
