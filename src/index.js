import express from "express";
import morgan from "morgan";

import NoteRoutes from "./routes/notes.routes.js";

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(NoteRoutes);

app.get("/error", (req, res) => {
  throw new Error("My Bad");
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err.message);
});

app.listen(3000, () => {
  console.log("App starting in PORT: 3000");
});
