"use strict";

const ps = require("prompt-sync");
const parseArgs = require("minimist");
const prompt = ps();
const fs = require(`fs`);

filehandle.write(`data.txt`, `eventos-amilcar`, (error) => {
  if (error) {
    console.log(`Error: ${error}`);
  }
});

let fecha = prompt("Indica la fecha  ");
let evento = prompt("Indica el evento ");
console.log(`${fecha} el dia del evento llamado ${evento} `);
