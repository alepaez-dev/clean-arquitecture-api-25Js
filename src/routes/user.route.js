// @ts-nocheck
const express = require("express");
const { create, list, get } = require("../usecases/user.usecase");
const auth = require("../middlewares/auth.middleware");

/**
 * rutas publicas -> no necesitas autorizacion
 * rutas privadas -> autorizacion
 */
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const createdUser = await create(req.body);
    res.status(201);
    res.json({
      success: true,
      data: createdUser
    })
  }catch(err) {
    res.status(err.status || 500).json({
      success: false,
      message: err.message
    })
  }
})

// Enlistar usuarios
router.get("/", async (req, res) => {
  try {
    const users = await list(req.query);
    res.json({
      success: true,
      data: users
    })
  } catch (err) {
    res.status(err.status || 500).json({
      success: false,
      message: err.message
    })
  }
})

// Obtener usuario
router.get("/:id", auth, async (req, res) => {
  try {
    const user = await get(req.params.id);
    res.status(200).json({
      success: true,
      data: user
    })
  }catch(err) {
    res.status(err.status || 500).json({
      success: false,
      message: err.message
    })
  }
})

module.exports = router