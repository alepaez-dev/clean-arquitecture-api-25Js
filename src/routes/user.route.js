const express = require("express");
const { create } = require("../usecases/user.usecase");

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

module.exports = router