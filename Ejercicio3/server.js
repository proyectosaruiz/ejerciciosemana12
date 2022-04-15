"use strict";

const express = require("express");
const app = express();
const parseArgs = require("minimist");

const fs = require("fs");

app.listen(3500, () => {
  console.log("Funcionando", 3500);
});

let fechaActual = new Date();
console.log(fechaActual.toUTCString());

let file = fs.readdirSync("../Ejercicio3");
console.log(file);

function error404(req, res, next) {
  let error = new Error(),
    locals = {
      title: "error 404",
      description: "recurso no encontrado",
      error: error,
    };
  (error.status = 404), res.render("error", locals), next();
}
