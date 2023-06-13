const express = require("express");
const { list } = require("../usecases/koder.usecase");

// Router
// Un conjunto de rutas en una applicacion
const router = express.Router();
/**
 * Las rutas
 * Aqui vamos a leer el request y response
 */

// /koders
router.get("/", async (req, res) => {
  try {
    const koders = await list();
    res.json({
      success: true,
      data: koders
    })
  }catch(err) {
    res.status(400);
    res.json({
      success: false,
      message: err.message
    })
  }
})

/**
 * Ejercicio: obtener un koder;
 */
module.exports = router;