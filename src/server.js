const express = require("express");
const app = express();

// Routes
const routerKoder = require("./routes/koder.route");

// Middlewares para toda nuestra api
app.use(express.json());

// Middlewares de rutas
app.use("/koders", routerKoder);

/**
* ---> Aqui se ponen los middlewares (ejecucion)
* ---> Endpoint de home
* ---> Rutear
*/

// Endpoint de home
app.get("/", (request, response) => {
  response.json("Nuestra api sirve!!!");
})

// Exportar
// common js 
module.exports = app