const express = require("express");
const { list, getbyId, create } = require("../usecases/koder.usecase");

// Router
// Un conjunto de rutas en una applicacion
const router = express.Router();
/**
 * Las rutas
 * Aqui vamos a leer el request y response
 */

// /koders/
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

// Obtener koder
// path params -> id -> /koders/:id
router.get("/:id", async (req, res) => {
  try {
    const koder = await getbyId(req.params.id);

    if(!koder) {
      const error = new Error("Koder not found");
      //@ts-ignore
      error.status = 404; // not found
      throw error; // return
    }
    res.json({
      success: true,
      data: koder
    })
  } catch (err) {
    console.log("ERROR en el catch", err);
    res.status(err.status || 500);
    res.json({
      success: false,
      message: err.message
    })
  }
})

// /koders
router.post("/", async (req, res) => {
  try {
    const koder = await create(req.body)
    res.status(201);
    res.json({
      success: true,
      data: koder
    })
  }catch(err) {
    res.status(err.status || 500)
    res.json({
      success: false,
      message: err.message
    })
  }
})
/**
 * Ejercicio: obtener un koder;
 * Patch
 * Delete
 */
module.exports = router;