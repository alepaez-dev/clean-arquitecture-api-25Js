const express = require("express");
const app = express();

// Routers
const routerKoder = require("./routes/koder.route");
const routerMentor = require("./routes/mentor.route");
// Middlewares para toda nuestra api
app.use(express.json());

// Middlewares de rutas
app.use("/koders", routerKoder);
app.use("/mentors", routerMentor);
// middleware -> /mentors -> routerMentors

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