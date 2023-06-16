// @ts-nocheck
const express = require("express");
const app = express();

// Routers
const routerKoder = require("./routes/koder.route");
const routerMentor = require("./routes/mentor.route");
const routerUser = require("./routes/user.route");
const routerAuth = require("./routes/auth.route");

// Middlewares para toda nuestra api
app.use(express.json());

// Middlewares de rutas
app.use("/koders", routerKoder);
app.use("/mentors", routerMentor);
app.use("/users", routerUser);
app.use("/auth", routerAuth);
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