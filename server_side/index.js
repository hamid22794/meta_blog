import express from "express";
import Connection from "./database/db.js";

const app = express();

const Port = 4000;
app.listen(Port, () =>
  console.log(`Server is running on port locally ${Port}`)
);

Connection();
