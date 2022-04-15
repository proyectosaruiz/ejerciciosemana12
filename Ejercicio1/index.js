"use strict";

const ps = require("prompt-sync");
const parseArgs = require("minimist");
const prompt = ps();
const fs = require("fs");

let fecha = prompt("Indica la fecha  ");
let evento = prompt("Indica el evento ");
let cargaFecha = (fecha, evento);

fs.appendFile("data.json", cargaFecha, "utf-8", function (error) {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(`La ${fecha} es el evento ${evento}`);
  }
});
