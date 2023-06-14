const { create, list, update } = require("../usecases/mentor.usecase");
const express = require("express");

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const mentor = await create(req.body)
    res.status(201);
    res.json({
      success: true,
      data: mentor
    })
  }catch (err) {
    res.status(err.status || 500);
    res.json({
      success: false,
      message: err.message
    })
  }
})

router.get("/", async (req, res) => {
  try {
    const mentors = await list(req.query)
    res.json({
      success: true,
      data: mentors
    })
  }catch(err) {
    res.status(err.status || 500)
    res.json({
      success: false,
      message: err.message
    })
  }
})

router.patch("/:id", async (req, res) => {
  try {
    // Tiene que estar sencilla
    const updatedMentor = await update(req.params.id, req.body);
    res.json({
      success :true,
      data: updatedMentor
    })
  }catch(err) {
    res.status(err.status || 500);
    res.json({
      success: false,
      message: err.message
    })
  }
})

module.exports = router;