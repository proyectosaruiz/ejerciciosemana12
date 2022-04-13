const minimist = require("minimist");
const chalk = require("chalk");
const path = require("path");
const fs = require("fs/promises");

console.log(chalk.green("Inicio del ejercicio dos"));
console.log();

async function imagenPrueba({
  inputDir,
  outputDir,
  watermark,
  resize,
  color,
  filter,
}) {
  try {
    const inputPath = path.resolve(__dirname, inputDir);
    const outputPath = path.resolve(__dirname, outputDir);
    if (watermark) {
      await watermark;
    }
    if (resize) {
      await resize;
    }
    if (color) {
      await color;
    }
    if (filter) {
      await filter;
    }
  } catch (error) {
    console.error(chalk.red(error.message));
    process.exit(1);
  }
}

const args = minimist(process.argv);
const { inputDir, outputDir, watermark, resize, color, filter } = args;

if (!inputDir || !outputDir) {
  console.error(
    chalk.red("Los argumentos de direccion y archivo son obligatorios")
  );
  process.exit(1);
}

if (!watermark && !resize && !color && !filter) {
  console.error(chalk.red("Los argumentos de variaciones son obligatorios"));
  process.exit(1);
}

console.log(chalk.green("En proceso"));
console.log();

imagenPrueba({ inputDir, outputDir, watermark, color, filter });

//node ejerciciodos.js --imputDir=ejercicio2/samples --outputDir=result --watermark=logonegro.png --resize=500 --color=black --filter=opacity
