require('dotenv').config() // lo mas pronto de nuestra aplicacion;
const mongoose = require("mongoose");
const app = require("./src/server")

/**
 * 1. Conexion a base de datos
 * 2. Prender servidor
 */

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
// Vamos a ocultar
// Variables de entorno
const databaseURL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

mongoose.connect(databaseURL)
.then(() => {
  console.log("We are connected to our database :)")
  app.listen(8080, () => {
    console.log("Nuestra api de clean arquitecture esta prendida!!");
  })
})
.catch((err) => {
  console.log("We have an error", err);
})