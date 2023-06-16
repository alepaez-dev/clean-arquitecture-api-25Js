
// @ts-nocheck
/**
 * Middleware de auth que vamos a utilizar en las rutas privadas
 * 
 * El token se pone en los headers.
 * 
 * 
 * headers : {
 * Content-Type: application/json,
 * Authorization: `Bearer ${token}`
 * }
 */
const jwt = require("../lib/jwt.lib");

const auth = (request, response, next) => {
  try {
    // Obtener mi header de autorizacion
    const authorization = request.headers.authorization || "";
    // Quitarle Bearer a mi header para obtener el token de JWT
    const token = authorization.replace("Bearer ", "");
    // Verificar el token
    const isVerified = jwt.verify(token);
    next()
  } catch (err) {
    response.status(401).json({
      success: false,
      message: err.message
    })
  }

}

module.exports = auth;